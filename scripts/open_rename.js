const Zotero = require("Zotero");
const basename = (path) => path.split(/(\\|\/)/g).pop();

async function getAttachmentPath(attachment) {
    const path = await attachment.getFilePathAsync();
    if (!path) {
        Zotero.logError(`No local file path for attachment ${attachment.id}.`);
        return null;
    }
    return path;
}

async function itemRelativePath(item) {
    const basePath = Zotero.Prefs.get('baseAttachmentPath') || Zotero.getStorageDirectory().path;
    const collectionIDs = item.getCollections();
    if (!collectionIDs.length) return basePath;

    let collection = Zotero.Collections.get(collectionIDs[0]);
    const parts = [collection.name];
    let parentID = collection.parentID;
    while (parentID) {
        const parent = Zotero.Collections.get(parentID);
        parts.unshift(parent.name);
        parentID = parent.parentID;
    }
    parts.unshift(basePath);
    return parts.join('\\');
}

async function attachmentFileInfo(attachment) {
    const parentItem = await Zotero.Items.getAsync(attachment.parentItemID);
    const collectionDir = await itemRelativePath(parentItem);
    const old_path = await getAttachmentPath(attachment);
    if (!old_path) return null;

    const extension = old_path.includes('.') ? old_path.split('.').pop() : '';
    const new_basename = Zotero.Attachments.getFileBaseNameFromItem(parentItem, {
        attachmentTitle: parentItem.getField("title")
    });

    return {
        attachment,
        collectionDir,
        extension,
        old_base: basename(old_path),
        new_basename,
        old_path,
        new_path: collectionDir + "\\" + new_basename + "." + extension
    };
}

async function processRenaming(info) {
    if (!info) return { renamed: 0, errors: 0 };
    const { attachment, old_path, new_path, new_basename } = info;

    // 路径相同则跳过
    if (old_path === new_path) return { renamed: 0, errors: 0 };

    try {
        await Zotero.File.moveToUnique(old_path, new_path);
        if (attachment.attachmentLinkMode !== Zotero.Attachments.LINK_MODE_LINKED_FILE) {
            attachment.attachmentLinkMode = Zotero.Attachments.LINK_MODE_LINKED_FILE;
        }
        attachment.attachmentPath = new_path;
        attachment.setField('title', new_basename);
        await attachment.saveTx();
        return { renamed: 1, errors: 0 };
    } catch (error) {
        Zotero.alert(null, "Rename Attachments", `Error renaming ${attachment.id}: ${error}`);
        return { renamed: 0, errors: 1 };
    }
}

async function processItem(targetItem) {
    // 兼容两种入口：附件本身（Open File）或父条目（Ctrl+R）
    const attachments = targetItem.isAttachment()
        ? [targetItem]
        : await Zotero.Items.getAsync(targetItem.getAttachments());

    let renamed = 0, errors = 0;
    for (const att of attachments) {
        if (att.attachmentContentType !== 'application/pdf') continue;
        const info = await attachmentFileInfo(att);
        const result = await processRenaming(info);
        renamed += result.renamed;
        errors += result.errors;
    }
    return { renamed, errors };
}

(async () => {
    // Ctrl+R 多选时用 items 避免重复执行
    const targetItems = (items && items.length) ? items : (item ? [item] : null);
    if (!targetItems) {
        Zotero.alert(null, "Rename Attachments", "No item provided.");
        return;
    }

    let totalRenamed = 0, totalErrors = 0;
    for (const t of targetItems) {
        const result = await processItem(t);
        totalRenamed += result.renamed;
        totalErrors += result.errors;
    }
    // if (totalRenamed > 0 || totalErrors > 0) {
    //     Zotero.alert(null, "Rename Attachments",
    //         `Renamed: ${totalRenamed}, Errors: ${totalErrors}`);
    // }
})();

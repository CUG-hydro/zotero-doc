const Zotero = require("Zotero");
basename = (path) => path.split(/(\\|\/)/g).pop();

async function getAttachments(item) {
  return item.itemType === 'attachment' ? [item] : await Zotero.Items.getAsync(item.getAttachments());
}

async function getAttachmentPath(attachment) {
  let path = await attachment.getFilePathAsync();
  if (!path) {
    Zotero.logError(`No local file path available for attachment ${attachment.id}.`);
    return null;
  }
  return path;
}


async function itemRelativePath(item) {
  const basePath = Zotero.Prefs.get('baseAttachmentPath') || Zotero.getStorageDirectory().path;

  let collectionIDs = await item.getCollections();
  if (!collectionIDs.length) return null;

  let collection = await Zotero.Collections.get(collectionIDs[0]);

  let relativePathParts = [collection.name];
  let parentID = collection.parentID;

  while (parentID) {
    let parent = await Zotero.Collections.get(parentID);
    parentID = parent.parentID;
    relativePathParts.unshift(parent.name);
  }
  relativePathParts.unshift(basePath);
  return relativePathParts.join('\\'); // e.g., "Research/Physics/Quantum"
}


async function attachmentFileInfo(attachment) {
  let item = await Zotero.Items.getAsync(attachment.parentItemID);
  let collectionDir = await itemRelativePath(item);

  // let attachment = (await getAttachments(att))[0]; // new to check
  let old_path = await getAttachmentPath(attachment);
  let extension = old_path.includes('.') ? old_path.split('.').pop() : '';

  let old_base = basename(old_path);
  let new_basename = Zotero.Attachments.getFileBaseNameFromItem(item, {
    attachmentTitle: item.getField("title")
  });

  let new_path = collectionDir + "\\" + new_basename + "." + extension;
  let info = {
    "attachment": attachment,
    "collectionDir": collectionDir, "extension": extension,
    "old_base": old_base,
    "new_basename": new_basename,
    "old_path": old_path,
    "new_path": new_path
  };
  Zotero.debug(info);
  return info;
}

async function ProcessRenaming(info) {
  // info = await itemFileInfo(item);
  let old_path = info.old_path;
  let new_path = info.new_path;
  let attachment = info.attachment;

  try {
    await Zotero.File.moveToUnique(old_path, new_path);
    if (attachment.attachmentLinkMode != Zotero.Attachments.LINK_MODE_LINKED_FILE) {
      attachment.attachmentLinkMode = Zotero.Attachments.LINK_MODE_LINKED_FILE;
    }
    attachment.attachmentPath = new_path;
    attachment.setField('title', info.new_basename);
    await attachment.saveTx();
    // attachment.relinkAttachmentFile(info.new_path);
    // Zotero.alert(null, "Rename Attachments",
    //   `[Rename Attachments] Successfully renamed ${info.new_path}`);
    return { renamed: 1, errors: 0 };
  } catch (error) {
    Zotero.alert(null, "Rename Attachments", `Error renaming attachment ${attachment.id}: ${error}`);
    return { renamed: 0, errors: 1 };
  }
}
// return await itemRelativePath(item)
// return item;
// return await processRenaming(item);
(async () => {
  if (!items && !item) {
    Zotero.alert(null, "Rename Attachments", "[Rename Attachments] No item or items array provided.");
    return;
  }
  // Simplified targetItems logic
  let targetItems = items || [item];
  let totalRenamed = 0;
  let totalErrors = 0;
  // let processedAttachmentIds = new Set();

  for (const currentItem of targetItems) {
    const attachments = currentItem.itemType === 'attachment' ? [currentItem] : await Zotero.Items.getAsync(currentItem.getAttachments());
    for (const attachment of attachments) {
      const info = await attachmentFileInfo(attachment);
      const result = await ProcessRenaming(info);
      totalRenamed += result.renamed;
      totalErrors += result.errors;
    }
  }

  // Display a summary alert only if there are significant outcomes to report
  if (totalRenamed > 0 || totalErrors > 0) {
    Zotero.alert(null, "Rename Attachments", `[Rename Attachments] Successfully renamed ${totalRenamed} attachments. Errors: ${totalErrors}`);
  }
})();

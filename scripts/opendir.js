// https://github.com/windingwind/zotero-actions-tags/discussions/132
if (!item) return;

async function getPDFAttachmentPath(item) {
  // If it is PDF, get the path directly
  if (item.isAttachment() && item.attachmentContentType === 'application/pdf') {
    return await item.getFilePathAsync();
  }
  // If it is a parent item, find its PDF attachment
  else if (item.isRegularItem() && !item.isAttachment()) {
    let attachments = await item.getAttachments();
    for (let attachmentID of attachments) {
      let attachment = await Zotero.Items.getAsync(attachmentID);
      if (attachment.attachmentContentType === 'application/pdf') {
        return await attachment.getFilePathAsync();
      }
      //break;
    }
  }
  return null;
}

function dirname(path) {
  return path.replace(/[^/\\]+$/, '');
}

async function opendir(item) {
  let path = await getPDFAttachmentPath(item);
  if (path) {
    let dir = dirname(path);
    let app = "C:\\Windows\\explorer.exe";
    Zotero.launchFileWithApplication(dir, app);
    return dir;
  } else {
    return "null";
  }
}

return await opendir(item);

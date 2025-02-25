var pane = Zotero.getActiveZoteroPane();
var items = pane.getSelectedItems();
var item = items[0];

var atts = await getAttachments(item);
var info = await attachmentFileInfo(atts[0]);

return await ProcessRenaming(info);

// return item;
return info;

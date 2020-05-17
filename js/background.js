chrome.contextMenus.create({
	"title": "改行を削除してコピー",
	"type": "normal",
	"contexts": ["selection"],
	"onclick": function (info) {
		var selectiontext=info.selectionText.toString();
		var castedtext = castText(selectiontext)
		execCopy(castedtext)
	}
});

console.log("Background activate");

function execPreprocessingCopy(info){
	var selectiontext=info.selectionText.toString();
	var castedtext = castText(selectiontext)
	execCopy(castedtext)
}

chrome.contextMenus.create({
	"title": "翻訳前処理をしてコピー",
	"type": "normal",
	"contexts": ["selection"],
	"onclick": function (info) {
		execPreprocessingCopy(info)
	}
});

console.log("Background activate");

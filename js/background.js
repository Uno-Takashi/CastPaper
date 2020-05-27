function execPreprocessingCopy(info){
	const selectiontext=info.selectionText.toString();
	execCopy(selectiontext);
}

chrome.contextMenus.create({
	'title': '翻訳前処理をしてコピー',
	'type': 'normal',
	'contexts': ['selection'],
	'onclick': execPreprocessingCopy,
});

console.log('Background activate');

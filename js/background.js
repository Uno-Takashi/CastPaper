function execPreprocessingCopy(info) {
  const selectiontext = info.selectionText.toString();
  execCopy(selectiontext);
}

function openDeepL(info) {
  const selectiontext = info.selectionText.toString();
  window.open('https://www.deepl.com/translator#auto/ja/' + encodeURI(selectiontext));
}

chrome.contextMenus.create({
  'id': 'copy',
  'title': '翻訳前処理をしてコピー',
  'type': 'normal',
  'contexts': ['selection'],
  'onclick': execPreprocessingCopy,
});

chrome.contextMenus.create({
  'id': 'translate',
  'title': '翻訳前処理をしてDeepL翻訳',
  'type': 'normal',
  'contexts': ['selection'],
  'onclick': openDeepL,
});

console.log('Background activate');

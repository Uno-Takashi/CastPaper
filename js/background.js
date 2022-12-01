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

function copySelection(tab) {
  chrome.tabs.executeScript(tab.id, {
    code: "window.getSelection().toString();"
  }, function (results) {
    if (results.length > 0) {
      execCopy(results[0]);
    }
  });
}

function getCurrentTab(callback) {
  let queryOptions = { active: true, lastFocusedWindow: true };
  chrome.tabs.query(queryOptions, ([tab]) => {
    if (chrome.runtime.lastError)
      console.error(chrome.runtime.lastError);
    callback(tab);
  });
}

chrome.commands.onCommand.addListener((command) => {
  switch (command) {
    case 'copy':
      getCurrentTab(copySelection);
      break;
  }
});

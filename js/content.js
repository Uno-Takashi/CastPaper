chrome.extension.onRequest.addListener(
    function (request, sender, sendResponse) {
        console.log(request.selectionText)

    }
);
 document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('test').addEventListener('click', function() {
            chrome.tabs.update({ url: 'chrome://kill/' });
        });
    });

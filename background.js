(function() {
	var v_arr = navigator.userAgent.toLowerCase().split(/.*chrome\//).join('').split(/ safari.*/).join('').split('.');


chrome.browserAction.setBadgeText({text: v_arr[0]});
chrome.browserAction.setTitle({title: v_arr.join('.')});

})();

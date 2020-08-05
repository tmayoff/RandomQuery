function getRandomParam() {}

function Randomize() {
	chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
		let paramName = "r_tm";

		if (tabs.length == 0) return;
		var tab = tabs[0];
		console.log(tab);

		let random = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
		let url = tab.url

		if (url.indexOf(paramName + "=") >= 0) {
			var prefix = url.substring(0, url.indexOf(paramName + "=")); 
			var suffix = url.substring(url.indexOf(paramName + "="));
			suffix = suffix.substring(suffix.indexOf("=") + 1);
			suffix = (suffix.indexOf("&") >= 0) ? suffix.substring(suffix.indexOf("&")) : "";
			url = prefix + paramName + "=" + random + suffix;
		}
		else {
			if (url.indexOf("?") < 0)
				url += "?" + paramName + "=" + random;
			else
				url += "&" + paramName + "=" + random;
		}
		url = url		
		
		console.log("Navigation to: " + url);
		chrome.tabs.update(tab.id, {url: url})

	})

	return;
} 

chrome.browserAction.onClicked.addListener(Randomize);
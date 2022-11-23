/*
grab the url, append the parameter, reload
*/

const parameter = "&sp=CAASAhAB";
let url = window.location.href;
if (!url.endsWith(parameter)) {
	window.location.href = url + parameter;
}


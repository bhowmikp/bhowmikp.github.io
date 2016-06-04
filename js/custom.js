// last modified date for all pages
var monthNames = ["January", "February", "March", "April", "May", "June",
			 "July", "August", "September", "October", "November", "December"];

var pcs = document.lastModified.split(" ")[0].split("/");
var month = parseInt(pcs[0])-1
var date = monthNames[month] + '/' + pcs[1] + '/' + pcs[2];
onload = function(){
	document.getElementById("lastModified").innerHTML = "Site last updated: " + date;
}

// clicks ssction for 404 page
var clicks = 0;
function onClick() {
	clicks += 1;
	document.getElementById("clicks").innerHTML = clicks;
};

// The ID of the extension we want to talk to.
var editorExtensionId = "mhklkaddlabkplhnjdnimihdpofbmecp";

// Make a simple request:
chrome.runtime.sendMessage(editorExtensionId, {openUrlInEditor: url},
  function(response) {
    if (!response.success)
      handleError(url);
  });
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

// communication with extension
var port = chrome.runtime.connect();

window.addEventListener("message", function(event) {
  // We only accept messages from ourselves
  if (event.source != window)
    return;

  if (event.data.type && (event.data.type == "FROM_PAGE")) {
    console.log("Content script received: " + event.data.text);
    port.postMessage(event.data.text);
  }
}, false);
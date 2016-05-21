var monthNames = ["January", "February", "March", "April", "May", "June",
			 "July", "August", "September", "October", "November", "December"];

var pcs = document.lastModified.split(" ")[0].split("/");
var month = parseInt(pcs[0])-1
var date = monthNames[month] + '/' + pcs[1] + '/' + pcs[2];
onload = function(){
	document.getElementById("lastModified").innerHTML = "Site last updated: " + date;
}

var clicks = 0;
function onClick() {
	clicks += 1;
	document.getElementById("clicks").innerHTML = clicks;
};
var sidebarHidden = true;
var body = document. getElementsByTagName("body")[0];
var button = document.createElement("button");
var mwPanel = document.getElementById("mw-panel");
var mwBody = document.getElementsByClassName("mw-body")[0];
var mwHead = document.getElementById("mw-head");
var mwHeadBase = document.getElementById("mw-head-base");
var leftNavigation = document.getElementById("left-navigation");

createToggleButton();

function createToggleButton() {
	button.innerHTML = ">";
	body.appendChild(button);
	button.innerHTML = "-"
	button.id = "toggleSidebarButton";
	button.addEventListener ("click", togglePanels);	
}

function hideTopPanel() {
	mwHead.style.display = "none";
	mwHeadBase.style.height = "1em";
	mwBody.style.borderTop = "none";
}

function showTopPanel() {
	mwHead.style.display = "inherit";
	mwHead.style.width = "100%";
	mwHead.style.margin = "0 0 0 0"
	mwHead.style.right = "5em";
	
	leftNavigation.style.marginLeft = "20em"
	mwHeadBase.style.height = "5em";
	mwBody.style.borderTop = "1px solid #ccc";
}

function togglePanels() {
	if (sidebarHidden) {
		showSidebar();
		showTopPanel();
	} else {
		hideSidebar();
		hideTopPanel();
	}
}

function showSidebar() {
	mwPanel.style.display = "inherit";
	
	mwBody.style.width = "80%";
	mwBody.style.marginLeft = "15em";
	mwBody.style.margin = "-1px 0 0 15em";
	
	sidebarHidden = false;
//	button.innerHTML = ">";
}

function hideSidebar()  {
	mwPanel.style.display = "none";

	mwBody.style.width = "80%";
	mwBody.style.marginLeft = "0";
	mwBody.style.margin = "0 auto";
	
	sidebarHidden = true;
	//button.innerHTML = "<";
}

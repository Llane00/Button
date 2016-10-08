// change container's background-color into button's background-color
function changeColor(whichButton) {
	if(!document.getElementById) return false;
	if(!document.getElementById("container")) return false;
	// step1 get button's background-color
	var button_backgroundColor = whichButton.style.backgroundColor;
	// step2 replace container's background-color with button)
	var container = document.getElementById("container");
	container.style.backgroundColor = button_backgroundColor ;
}
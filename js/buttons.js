//BUTTON ANIMATION

//Close
function mouseDownClose() {
  e = window.event;
  if (e.button == 0) {
    document.getElementById("closebutton").src="images/netscape/titlebar/closepress.png";
  }
}
function mouseUpClose() {
  document.getElementById("closebutton").src="images/netscape/titlebar/closebutton.png";
}

//Min
function mouseDownMin() {
  e = window.event;
  if (e.button == 0) {
    document.getElementById("minbutton").src="images/netscape/titlebar/minpress.png";
  }
}
function mouseUpMin() {
  document.getElementById("minbutton").src="images/netscape/titlebar/minbutton.png";
}

//Max
function mouseDownMax() {
  e = window.event;
  if (e.button == 0) {
    document.getElementById("maxbutton").src="images/netscape/titlebar/maxpress.png";
  }
}
function mouseUpMax() {
  document.getElementById("maxbutton").src="images/netscape/titlebar/maxbutton.png";
}
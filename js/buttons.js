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

//CHANGE BACKGROUNDS
function changeBackground() {
  var x = document.getElementById("backgroundSelect").value;
  if (x == "Classic") {
    document.body.style.backgroundImage = "none"
    document.body.style.backgroundColor = "#008080";
  }
  else if (x == "Clouds") {
    document.body.style.backgroundImage = "url('images/backgrounds/clouds.jpg')";
    document.body.style.backgroundSize = "cover";
  }
  else if (x == "Space") {
    document.body.style.backgroundImage = "url('images/backgrounds/stars.gif')";
    document.body.style.backgroundSize = "auto";
  }
}
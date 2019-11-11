//Sound Players

function stopAudio() {
  var array = ['startAudio', 'dialupAudio'];
  for(i=0; i<array.length; i++){
    var x = document.getElementById(array[i]);
      x.pause();
      x.currentTime = 0;
  }
}

function playStart() {
var x = document.getElementById("startAudio");
  x.play();
}

function playDialup() { 
var x = document.getElementById("dialupAudio"); 
  x.play(); 
}
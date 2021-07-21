const style = document.createElement('style');

document.head.appendChild(style);



var audioVaporWave = document.getElementById('vaporwave');
var audioLofi = document.getElementById('lofi');
let img = document.getElementById('hide-image');
let mini = document.getElementById('minimize');
let miniBtn = document.getElementById('minimizeButton');
const filtered = document.getElementById('filtered');

function playVapor() {
  style.innerHTML = '.marginal-background{ background-color: #10D7AE; !important}';

  if (audioVaporWave.paused) {
    mini.style.display = 'block';
    img.style.display = 'block';
    audioVaporWave.play();
    audioLofi.pause();
    audioLofi.currentTime = 0;

  } else {
    audioVaporWave.pause();
    audioVaporWave.currentTime = 0;
    style.innerHTML = '.marginal-background{ background-color: #ed65c4; !important}';
    img.style.display = 'none';

  }
}
function playLofi() {
  style.innerHTML = '.marginal-background{ background-color: #92B5F3ff !important;}';

  if (audioLofi.paused) {
    audioLofi.play();
    audioVaporWave.pause();
    audioVaporWave.currentTime = 0;
    img.style.display = 'none';
  } else {
    audioLofi.pause();
    audioLofi.currentTime = 0;
    style.innerHTML = '.marginal-background{ background-color: #ed65c4; !important}';
  }
}
const audioVolume = document.getElementById('volume');
audioVolume.addEventListener('input', changeVolume);

function changeVolume() {
  audioVaporWave.volume = audioVolume.value;
  audioLofi.volume = audioVolume.value;
}
xOut = document.getElementById('hider');
xOut.addEventListener('click', hide);
function hide() {
  img.style.display='none';
}
//add event listener click and fnction mminimise
miniBtn.addEventListener('click', minimize);
function minimize() {
  if (mini.style.display=='block') {
        mini.style.display='none';
 } else {
        mini.style.display='block';
 }

}


    var ball = document.querySelector("#hide-image");
    ball.onmousedown = function(event) {
  let shiftX = event.clientX - ball.getBoundingClientRect().left;
  let shiftY = event.clientY - ball.getBoundingClientRect().top;

  ball.style.position = 'absolute';
  ball.style.zIndex = 1000;
  document.body.append(ball);

  moveAt(event.pageX, event.pageY);

  // moves the ball at (pageX, pageY) coordinates
  // taking initial shifts into account[]
  function moveAt(pageX, pageY) {
    ball.style.left = pageX - shiftX + 'px';
    ball.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // move the ball on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // drop the ball, remove unneeded handlers
  ball.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    ball.onmouseup = null;
  };

};

ball.ondragstart = function() {
  return false;
};

function filterSwitch() {
  if (filtered.style.display == 'none') {
    filtered.style.display='block';
} else {
  filtered.style.display='none';
  }
}

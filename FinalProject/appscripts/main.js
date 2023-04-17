
// click to pause music for starting screen
const mainBGM = new Audio ("resources/Opening.mp3");
let MusicStatus = "off"
MusicButton.addEventListener("click", function (ev) {
  if (MusicStatus === "off"){
          MusicStatus = "on";
          document.getElementById("MusicButton").innerHTML = "Pause Music";
          mainBGM.play();
          mainBGM.loop = "true";
  } else {
          MusicStatus = "on";
          document.getElementById("MusicButton").innerHTML  = "Play Music";
          mainBGM.pause();
  };
});


// click to unpause music

// page 2 input username
const UN = document.getElementById('username');

insertName.addEventListener("submit", function (e) {
    e.preventDefault(); // to prevent the page from refreshing
    const usernameValue = UN.value;
    localStorage.setItem('user-name', usernameValue);
    window.location.href = "Instructions.html";
});

// page 3 instructions

// page 4 trial page

// ^ refer to  demo.js

// page 5 pre-game flash
// refer to pregameflash.js


// page 6 actual game
document.getElementById("timesUp").style.visibility='hidden';
let points = 0
clicked = document.addEventListener("click", function (score) {
    points = i++;
})

const lettertoajax = document.querySelector("audio");

audio.addEventListener("ended", (timesUp) => {
  document.getElementById("timesUp").style.visibility='visible';
});

// page 7 time's up screen


// page 8 score summary
// find out what total is
let missed = total - points;
let percent = (points * 100) / total;

document.getElementById("scores").innerHTML = "Scored:" + points
document.getElementById("missed").innerHTML = "Missed:" + missed;
document.getElementById("overall").innerHTML = "Overall:" + percent;


// page 1 starting screen

// click to pause or play music for starting screen
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

// extra page to prompt before gg to PGF

// page 5 pre-game flash
// ^refer to pregameflash.js


// page 6 actual game
//document.getElementById("timesUp").style.visibility='hidden';
//let points = 0


//const lettertoajax = document.querySelector("audio");
//audio.addEventListener("ended", (timesUp) => {
  //document.getElementById("timesUp").style.visibility='visible';
//});

// page 7 time's up screen


// page 8 score summary
// find out what total is
let total = missed + perfect + good;
let scored = perfect + good;
let percent = (scored * 100) / total;

document.getElementById("perfect").innerHTML = "Perfect:" + perfect
document.getElementById("good").innerHTML = "Good:" + good;
document.getElementById("missed").innerHTML = "Missed:" + missed;
document.getElementById("overall").innerHTML = "Total:" + percent;


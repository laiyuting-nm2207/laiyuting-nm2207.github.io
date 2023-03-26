

// click to pause music for starting screen
const audio = document.getElementById("music");

// PauseMusic.addEventListener("click", function (ev) {
// document.getElementById("music") = false;

// });
// ^ doesnt work yet... still dk how

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

setTimeout(function (flash3) {
    document.getElementById("3").style.visbility = 'visible';
    document.getElementById("2").style.visbility = 'hidden';
    document.getElementById("1").style.visbility = 'hidden';
    document.getElementById("startRealGame").style.visbility = 'hidden';
}, 1000);

setTimeout(function (flash2) {
    document.getElementById("3").style.visbility = 'hidden';
    document.getElementById("2").style.visbility = 'visible';
    document.getElementById("1").style.visbility = 'hidden';
    document.getElementById("startRealGame").style.visbility = 'hidden';
}, 1000);

setTimeout(function (flash1) {
    document.getElementById("3").style.visbility = 'hidden';
    document.getElementById("2").style.visbility = 'hidden';
    document.getElementById("1").style.visbility = 'visible';
    document.getElementById("startRealGame").style.visbility = 'hidden';
}, 1000);

setTimeout(function (flashstart) {
    document.getElementById("3").style.visbility = 'hidden';
    document.getElementById("2").style.visbility = 'hidden';
    document.getElementById("1").style.visbility = 'hidden';
    document.getElementById("startRealGame").style.visbility = 'visible';
}, 1000);

// ^ the flash doesnt work T^T


// page 6 actual game
document.getElementById("timesUp").style.visibility='hidden';
let points = 0
clicked = document.addEventListener("click", function (score) {
    points = 0++;
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


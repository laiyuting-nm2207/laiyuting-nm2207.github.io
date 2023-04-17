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
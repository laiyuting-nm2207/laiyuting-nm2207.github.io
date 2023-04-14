let perfect = 0;
let good = 0;
let missed = 0;
// let counter = 0; 
//^ use this only for demo

// functions to call video **DO NOT DEFINE THEM IN THE IF N IF ELSE CONDITION, ONLY CALL THEM THERE
function showPerfectVideo() {
    var video = document.getElementById("perfect");
    video.style.display = "block";
    video.play();
  };
  
  function showGoodVideo() {
    var video = document.getElementById("good");
    video.style.display = "block";
    video.play();
  };

function startGame() {
    
    beat1.style.display = "none";
    beat2.style.display = "none";
    beat3.style.display = "none";
    beat4.style.display = "none";
    beat5.style.display = "none";
    beat6.style.display = "none";
    beat7.style.display = "none";
    beat8.style.display = "none";
    beat9.style.display = "none";
    beat10.style.display = "none";
    
    setTimeout(function() {
      beat1.style.display = "block";
      beat2.style.display = "block";
      beat3.style.display = "block";
      beat4.style.display = "block";
      beat5.style.display = "block";
      beat6.style.display = "block";
      beat7.style.display = "block";
      beat8.style.display = "block";
      beat9.style.display = "block";
      beat10.style.display = "block";

      animateBeat(beat1);
      animateBeat(beat2);
      animateBeat(beat3);
      animateBeat(beat4);
      animateBeat(beat5);
      animateBeat(beat6);
      animateBeat(beat7);
      animateBeat(beat8);
      animateBeat(beat9);
      animateBeat(beat10);
    }, 1000);
    document.getElementById("TrialCount").innerHTML = "Score = " + counter + " /10";
  }

  function GotoPGF() {
    console.log("counter:", counter);
    if (counter === 10) {
      console.log("redirecting");
      window.location.href = "AreYouReady.html";
    }
  }

function handleBeatClick() {
    console.log("clicked");
    var beat = this;
    console.log(beat);
    var beatTop = beat.getBoundingClientRect().top;
  
    if (beatTop >= 610) {
        perfect += 1;
        console.log(perfect);
        setTimeout(function() {
          showPerfectVideo(); // Call the function here
        }, 500);
      } else if (beatTop >= 590 && beatTop < 610) {
        good += 1;
        setTimeout(function() {
          showGoodVideo(); // Call the function here
        }, 500);
      } else {
        missed += 1
        console.log("missed");
      }
  
    //document.getElementById("TrialCount").innerHTML = "Score = " + counter + " /10";
    //GotoPGF();
  }


  document.addEventListener("DOMContentLoaded", function() {
    var beat1 = document.querySelector("#beat1");
    var beat2 = document.querySelector("#beat2");
    var beat3 = document.querySelector("#beat3");
    var beat4 = document.querySelector("#beat4");
    var beat5 = document.querySelector("#beat5");
    var beat6 = document.querySelector("#beat6");
    var beat7 = document.querySelector("#beat7");
    var beat8 = document.querySelector("#beat8");
    
    if (beat1 && beat2 && beat3 && beat4 && beat5 && beat6 && beat7 && beat8) {
      beat1.addEventListener("click", handleBeatClick);
      beat2.addEventListener("click", handleBeatClick);
      beat3.addEventListener("click", handleBeatClick);
      beat4.addEventListener("click", handleBeatClick);
      beat5.addEventListener("click", handleBeatClick);
      beat6.addEventListener("click", handleBeatClick);
      beat7.addEventListener("click", handleBeatClick);
      beat8.addEventListener("click", handleBeatClick);
    }
  });

  // AUTOMATICALLY MOVE TO NEXT PAGE WHEN SONG ENDS 
  // code for this in the html
function perfectAnimation() { // for "Perfect!" to appear in response to player's clicks
    var img = document.createElement("img");
    img.src = "resources/perfect.png";
    img.style.height = "100px";
    document.body.appendChild(img);
    setTimeout(function() {
      document.body.removeChild(img);
    }, 500);
  }
  
  function goodAnimation() { // for "Good" to appear in response to player's clicks
      var img = document.createElement("img");
      img.src = "resources/good.png";
      img.style.height = "100px";
      document.body.appendChild(img);
      setTimeout(function() {
        document.body.removeChild(img);
      }, 500);
    }

function startGame() {

    beat1.style.display = "none"; //hide the beat at first
    beat2.style.display = "none";
    beat3.style.display = "none";
    beat4.style.display = "none";
    beat5.style.display = "none";
    beat6.style.display = "none";
    beat7.style.display = "none";
    beat8.style.display = "none";
    beat9.style.display = "none";
    beat10.style.display = "none";

    setTimeout(function () {
        beat1.style.display = "block"; //then show the beat when it's time
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
}
let counter = 0;

// if counter = 10 (player clicks 10 beats for demo), redicrect them to actual game count down page
function GotoPGF() {
    if (counter === 10) {
        window.location.href = "AreYouReady.html";
    }
}

// the conditions for scoring
function handleBeatClick() {
    var beat = this;
    var beatTop = beat.getBoundingClientRect().top; // find top position of the moving beat

    if (beatTop >= 590) {
        counter += 1;
        console.log(counter);
        perfectAnimation();
    }
    else {
        console.log("missed");
    }

    document.getElementById("TrialCount").innerHTML = "Score = " + counter + " /10"; // put score into html for visualisation
    GotoPGF();
}

if (beat1) { beat1.addEventListener("click", handleBeatClick) }; // on click, it will find top position of moving beat and score accordingly
if (beat2) { beat2.addEventListener("click", handleBeatClick) };
if (beat3) { beat3.addEventListener("click", handleBeatClick) };
if (beat4) { beat4.addEventListener("click", handleBeatClick) };
if (beat5) { beat5.addEventListener("click", handleBeatClick) };
if (beat6) { beat6.addEventListener("click", handleBeatClick) };
if (beat7) { beat7.addEventListener("click", handleBeatClick) };
if (beat8) { beat8.addEventListener("click", handleBeatClick) };
if (beat9) { beat9.addEventListener("click", handleBeatClick) };
if (beat10) { beat10.addEventListener("click", handleBeatClick) };

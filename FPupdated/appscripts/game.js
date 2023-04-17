// score variables
let perfect = 0;
let good = 0;
let missed = 0;

let goodCount = 0;
let perfectCount = 0;
let missedCount = 0;

// results array
const results = [[], [], []]; //1 big array for results and that 1 array will contain 3 empty arrays (good, perfect, missed) to be filled as the game proceeds

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector("#good").textContent = `Good: ${goodCount}`;
  document.querySelector("#perfect").textContent = `Perfect: ${perfectCount}`;
  document.querySelector("#missed").textContent = `Missed: ${missedCount}`;
});

let gameSong = new Audio("resources/LetterFromAjax.mp3");
// bg music for the main game
window.addEventListener("load", function () {
    gameSong.play();
    gameSong.loop = false; // because we want to be redirected to the score page when the song ends so no loops allowed

    gameSong.addEventListener("ended", function () {
        console.log(results);
        // save the counts in local storage (same as the username input page)
        localStorage.setItem("goodCount", good);
        localStorage.setItem("perfectCount", perfect);
        localStorage.setItem("missedCount", missed);
       // console.log(missedCount);
        window.location.href = "scoreSummary.html"
    });
});

function startGame() {
    let beat1, beat2, beat3, beat4, beat5, beat6, beat7, beat8, beat9, beat10;
    //hide beats at the start//
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

    //show beats later when they supposed to come out//
    setTimeout(function () {
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
}


function perfectAnimation() { // shows "Perfect!" when player clicks
  var img = document.createElement("img");
  img.src = "resources/perfect.png";
  img.style.height = "100px";
  document.body.appendChild(img);
  setTimeout(function() {
    document.body.removeChild(img);
  }, 500); //animation to last 0.5s
}

function goodAnimation() { // shows "Good" when player clicks
    var img = document.createElement("img");
    img.src = "resources/good.png";
    img.style.height = "100px";
    document.body.appendChild(img);
    setTimeout(function() {
      document.body.removeChild(img);
    }, 500); //animation to last 0.5s
  }

function handleBeatClick() {
    var beat = this;
    var beatTop = beat.getBoundingClientRect().top; // find the top position
    // 610 is the height that is close to the bottom stationary circles' top position --> meaning u have close to perfect accuracy and 590 is a lenient position if user's click is not super accurate
    if (beatTop >= 610) {
        perfect += 1;
        console.log(perfect);
        results.push("perfect"); // put into results array so that it could be put into scoresummary
        perfectAnimation();
    } else if (beatTop >= 590 && beatTop < 610) {
        good += 1;
        console.log(good);
        results.push("good");
        goodAnimation();
    } else {
        missed += 1;
        console.log("missed");
        results.push("missed");
    }
}

// player's click will trigger the function handleBeatClick that differentiates between the click accuracy and assigns scores
if (beat1) { beat1.addEventListener("click", handleBeatClick) };
if (beat2) { beat2.addEventListener("click", handleBeatClick) };
if (beat3) { beat3.addEventListener("click", handleBeatClick) };
if (beat4) { beat4.addEventListener("click", handleBeatClick) };
if (beat5) { beat5.addEventListener("click", handleBeatClick) };
if (beat6) { beat6.addEventListener("click", handleBeatClick) };
if (beat7) { beat7.addEventListener("click", handleBeatClick) };
if (beat8) { beat8.addEventListener("click", handleBeatClick) };
if (beat9) { beat9.addEventListener("click", handleBeatClick) };
if (beat10) { beat10.addEventListener("click", handleBeatClick) };

if (gameSong) {
    gameSong.onended = function () {
        console.log(ended);
        // stop beats animation when song ends
        if (beat1) { beat1.classList.add("stopped") };
        if (beat2) { beat2.classList.add("stopped") };
        if (beat3) { beat3.classList.add("stopped") };
        if (beat4) { beat4.classList.add("stopped") };
        if (beat5) { beat5.classList.add("stopped") };
        if (beat6) { beat6.classList.add("stopped") };
        if (beat7) { beat7.classList.add("stopped") };
        if (beat8) { beat8.classList.add("stopped") };
        if (beat9) { beat9.classList.add("stopped") };
        if (beat10) { beat10.classList.add("stopped") };

        // count frequency of each type of press 
        let goodCount = results.filter(result => result === "good").length;
        let perfectCount = results.filter(result => result === "perfect").length;
        let missedCount = results.filter(result => result === "missed").length;
    }
}
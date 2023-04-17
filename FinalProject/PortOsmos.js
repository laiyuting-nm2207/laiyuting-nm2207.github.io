// score variables & array to tabulate scores
let perfect = 0;
let good = 0;
let missed = 0;

let goodCount = 0;
let perfectCount = 0;
let missedCount = 0;

// Sample results array
const results = [[], [], []]; //1 big array for results and that 1 array will contain 3 empty arrays (good, perfect, missed) to be filled as the game proceeds

document.addEventListener('DOMContentLoaded', () => {
  //  handleBeatClick1();
    document.querySelector("#good").textContent = `Good: ${goodCount}`;
    document.querySelector("#perfect").textContent = `Perfect: ${perfectCount}`;
    document.querySelector("#missed").textContent = `Missed: ${missedCount}`;
});

// bg music for the main game
window.addEventListener("load", function () {
    let gameSong = new Audio("resources/portOsmos.mp3");
    //gameSong.play();
    gameSong.loop = false; // because we want to be redirected to the score page when the song ends

    gameSong.addEventListener("ended", function () {
        console.log(results);
        // save the counts in local storage (same as the username input page)
        localStorage.setItem("goodCount", good);
        localStorage.setItem("perfectCount", perfect);
        localStorage.setItem("missedCount", missed);
        // console.log(missedCount);
        window.location.href = "scoreSummary.html"
        // give it some time jic scores take a while to be calculated
    });
});



function startGame() {
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


function perfectAnimation() {
    var img = document.createElement("img");
    img.src = "resources/perfect.png";
    img.style.height = "100px";
    document.body.appendChild(img);
    setTimeout(function () {
        document.body.removeChild(img);
    }, 500);
}

function goodAnimation() {
    var img = document.createElement("img");
    img.src = "resources/good.png";
    img.style.height = "100px";
    document.body.appendChild(img);
    setTimeout(function () {
        document.body.removeChild(img);
    }, 500);
}

//function handleBeatClick() {
let beat1 = document.getElementById("beat1");
let beat2 = document.getElementById("beat2");
let beat3 = document.getElementById("beat3");
let beat4 = document.getElementById("beat4");
let beat5 = document.getElementById("beat5");
let beat6 = document.getElementById("beat6");
let beat7 = document.getElementById("beat7");
let beat8 = document.getElementById("beat8");
let beat9 = document.getElementById("beat9");
let beat10 = document.getElementById("beat10");

let id1 = beat1.id;
let id2 = beat2.id;
let id3 = beat3.id;
let id4 = beat4.id;
let id5 = beat5.id;
let id6 = beat6.id;
let id7 = beat7.id;
let id8 = beat8.id;
let id9 = beat9.id;
let id10 = beat10.id;

let beatTop1 = beat1.getBoundingClientRect().top; // find the top position
let beatTop2 = beat2.getBoundingClientRect().top; // find the top position
let beatTop3 = beat3.getBoundingClientRect().top; // find the top position
let beatTop4 = beat4.getBoundingClientRect().top; // find the top position
let beatTop5 = beat5.getBoundingClientRect().top; // find the top position
let beatTop6 = beat6.getBoundingClientRect().top; // find the top position
let beatTop7 = beat7.getBoundingClientRect().top; // find the top position
let beatTop8 = beat8.getBoundingClientRect().top; // find the top position
let beatTop9 = beat9.getBoundingClientRect().top; // find the top position
let beatTop10 = beat10.getBoundingClientRect().top; // find the top position

function updateBeatTop1() {
    beatTop1 = beat1.getBoundingClientRect().top;
    requestAnimationFrame(updateBeatTop1);
  }
  
updateBeatTop1();  

function updateBeatTop2() {
    beatTop2 = beat2.getBoundingClientRect().top;
    requestAnimationFrame(updateBeatTop1);
  }
  
updateBeatTop2();

function updateBeatTop3() {
    beatTop3 = beat3.getBoundingClientRect().top;
    requestAnimationFrame(updateBeatTop1);
  }
  
updateBeatTop3();

function updateBeatTop4() {
    beatTop4 = beat4.getBoundingClientRect().top;
    requestAnimationFrame(updateBeatTop1);
  }
  
updateBeatTop4();

function updateBeatTop5() {
    beatTop5 = beat5.getBoundingClientRect().top;
    requestAnimationFrame(updateBeatTop1);
  }
  
updateBeatTop5();

function updateBeatTop6() {
    beatTop6 = beat6.getBoundingClientRect().top;
    requestAnimationFrame(updateBeatTop1);
  }
  
updateBeatTop6();

function updateBeatTop7() {
    beatTop7 = beat7.getBoundingClientRect().top;
    requestAnimationFrame(updateBeatTop1);
  }
  
updateBeatTop7();

function updateBeatTop8() {
    beatTop8 = beat8.getBoundingClientRect().top;
    requestAnimationFrame(updateBeatTop1);
  }
  
updateBeatTop8();

function updateBeatTop9() {
    beatTop9 = beat9.getBoundingClientRect().top;
    requestAnimationFrame(updateBeatTop1);
  }
  
updateBeatTop9();

function updateBeatTop10() {
    beatTop10 = beat10.getBoundingClientRect().top;
    requestAnimationFrame(updateBeatTop1);
  }
  
updateBeatTop10();
  

//const musicalComposition = [beat1, beat2, beat3, beat4, beat5, beat6, beat7, beat8, beat9, beat10];
// console.log(beat);
// 610 is the height that is close to the bottom stationary circles' top position --> meaning u have close to perfect accuracy and 590 is a lenient position if user's click is not super accurate
//}

// user's click will trigger the function handleBeatClick that differentiates between the click accuracy and assigns scores

function forbeat1 (){};
function forbeat2 (){};
function forbeat3 (){};
function forbeat4 (){};
function forbeat5 (){};
function forbeat6 (){};
function forbeat7 (){};
function forbeat8 (){};
function forbeat9 (){};
function forbeat10 (){};

function removeListeners (){// remove event listeners from all other beats
    document.removeEventListener('keydown', forbeat1);
    document.removeEventListener('keydown', forbeat2);
    document.removeEventListener('keydown', forbeat3);
    document.removeEventListener('keydown', forbeat4);
    document.removeEventListener('keydown', forbeat5);
    document.removeEventListener('keydown', forbeat6);
    document.removeEventListener('keydown', forbeat7);
    document.removeEventListener('keydown', forbeat8);
    document.removeEventListener('keydown', forbeat9);
    document.removeEventListener('keydown', forbeat10);
    };

document.addEventListener('keydown', function(event) {
    if ((event.code === 'KeyC' && id1 && beatTop1 >= 610) ||
        (event.code === 'KeyV' && id2 && beatTop2 >= 610) ||
        (event.code === 'KeyB' && id3 && beatTop3 >= 610) ||
        (event.code === 'KeyN' && id4 && beatTop4 >= 610) ||
        (event.code === 'KeyM' && id5 && beatTop5 >= 610) ||
        (event.code === 'KeyC' && id6 && beatTop6 >= 610) ||
        (event.code === 'KeyV' && id7 && beatTop7 >= 610) ||
        (event.code === 'KeyB' && id8 && beatTop8 >= 610) ||
        (event.code === 'KeyN' && id9 && beatTop9 >= 610) ||
        (event.code === 'KeyM' && id10 && beatTop10 >= 610)) {
        perfect += 1;
       // console.log(perfect);
        results.push("perfect"); // put into results array so that it could be put into scoresummary
        perfectAnimation();
    } else if ((event.code === 'KeyC' && id1 && beatTop1 >= 590 && beatTop1 < 610) ||
               (event.code === 'KeyV' && id2 && beatTop2 >= 590 && beatTop2 < 610) ||
               (event.code === 'KeyB' && id3 && beatTop3 >= 590 && beatTop3 < 610) ||
               (event.code === 'KeyN' && id4 && beatTop4 >= 590 && beatTop4 < 610) ||
               (event.code === 'KeyM' && id5 && beatTop5 >= 590 && beatTop5 < 610) ||
               (event.code === 'KeyC' && id1 && beatTop6 >= 590 && beatTop6 < 610) ||
               (event.code === 'KeyV' && id2 && beatTop7 >= 590 && beatTop7 < 610) ||
               (event.code === 'KeyB' && id3 && beatTop8 >= 590 && beatTop8 < 610) ||
               (event.code === 'KeyN' && id4 && beatTop9 >= 590 && beatTop9 < 610) ||
               (event.code === 'KeyM' && id5 && beatTop10 >= 590 && beatTop10 < 610)) {
        good += 1;
        console.log(good);
        results.push("good");
        goodAnimation();
    } else if ((event.code === 'KeyC' && id1 && beatTop1 < 590) ||
    (event.code === 'KeyV' && id2 && beatTop2 <590) ||
    (event.code === 'KeyB' && id3 && beatTop3 <590 ) ||
    (event.code === 'KeyN' && id4 && beatTop4 < 590) ||
    (event.code === 'KeyM' && id5 && beatTop5 < 590) ||
    (event.code === 'KeyC' && id1 && beatTop6 < 590) ||
    (event.code === 'KeyV' && id2 && beatTop7 <590)  ||
    (event.code === 'KeyB' && id3 && beatTop8 <590 ) ||
    (event.code === 'KeyN' && id4 && beatTop9 < 590) ||
    (event.code === 'KeyM' && id5 && beatTop10 < 590)) {
        missed += 1;
        console.log("missed");
        results.push("missed");
    }
    removeListeners();
     // add event listener back to the appropriate beat for next round
     if (event.code === 'KeyC' && id1) {
        beat1.addEventListener('click', function () {  });
    } else if (event.code === 'KeyV' && id2) {
        beat2.addEventListener('click', function () { });
    } else if (event.code === 'KeyB' && id3) {
        beat3.addEventListener('click', function () {  });
    } else if (event.code === 'KeyN' && id4) {
        beat4.addEventListener('click', function () { });
    } else if (event.code === 'KeyM' && id5) {
        beat5.addEventListener('click', function () { });
    } else if (event.code === 'KeyC' && id6) {
        beat1.addEventListener('click', function () {  });
    } else if (event.code === 'KeyV' && id7) {
        beat2.addEventListener('click', function () { });
    } else if (event.code === 'KeyB' && id8) {
        beat3.addEventListener('click', function () {  });
    } else if (event.code === 'KeyN' && id9) {
        beat4.addEventListener('click', function () { });
    } else if (event.code === 'KeyM' && id10) {
        beat5.addEventListener('click', function () { });
    }
}

);




// handleBeatClick1();


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

        // count frequency of each type of press 
        let goodCount = results.filter(result => result === "good").length;
        let perfectCount = results.filter(result => result === "perfect").length;
        let missedCount = results.filter(result => result === "missed").length;

        // put into score summary html
        // document.getElementById("perfect").innerHTML = "Perfect: " + perfectCount;
        // document.getElementById("good").innerHTML = "Good: " + goodCount;
        // document.getElementById("missed").innerHTML = "Missed: " + missedCount;
        // document.getElementById("overall").innerHTML = "Total: " + percentage;

        // window.location.href = 'scoreSummary.html';
    }
}


  // in the case browser blocks audio from autoplaying and the code canot get cue from audio onended,
  //setTimeout(function() {
   // window.location.href = "scoreSummary.html";
 // }, 93000);

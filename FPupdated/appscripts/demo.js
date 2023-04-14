
//function hideReady() {
//document.getElementById("YouAreReady").style.visibility = "hidden";
//}

//function GoToPreGameFlash() {
//Trial.addEventListener("click", function (YouAreReady) {
//document.getElementById("YouAreReady").style.visibility = "visible";
//});
//};

//let counter = 0
//let StationaryBeatsTop = document.getElementById("beatsStationary");
//var SBValue = StationaryBeatsTop.getBoundingClientRect().top;
//console.log(SBValue);

// listen for position of moving beats when user clicks
beat1.addEventListener("click", function (getPosition) {
    var b1 = this.getBoundingClientRect().top;
    console.log(b1);
    // detect collision
    if (b1 <= 450) {
        counter += 1;
        console.log(counter);
    } else {
        console.log("missed");
    };
    // tabulate demo score
    document.getElementById("TrialCount").innerHTML = "Score = " + counter + " /10";
    function GotoPGF() {
        if (counter === 10) {
            window.location.href = "PreGameFlash.html"; // maybe put the congrats prompt before gg to PGF
        };
    };
});

beat2.addEventListener("click", function (getPosition) {
    var b2 = this.getBoundingClientRect().top;
    console.log(b2);
    // detect collision
    if (b2 <= 450) {
        counter += 1;
        console.log(counter);
    } else {
        console.log("missed");
    };
    // tabulate demo score
    document.getElementById("TrialCount").innerHTML = "Score = " + counter + " /10";
    function GotoPGF() {
        if (counter === 10) {
            window.location.href = "PreGameFlash.html"; // maybe put the congrats prompt before gg to PGF
        };
    };
});

beat3.addEventListener("click", function (getPosition) {
    var b3 = (this.getBoundingClientRect().top);
    console.log(b3);
    // detect collision
    if (b3 <= 450) {
        counter += 1;
        console.log(counter);
    } else {
        console.log("missed");
    };
    // tabulate demo score
    document.getElementById("TrialCount").innerHTML = "Score = " + counter + " /10";
    function GotoPGF() {
        if (counter === 10) {
            window.location.href = "PreGameFlash.html"; // maybe put the congrats prompt before gg to PGF
        };
    };
});

beat4.addEventListener("click", function (getPosition) {
    var b4 = this.getBoundingClientRect().top;
    console.log(b4);
    // detect collision
    if (b4 <= 450) {
        counter += 1;
        console.log(counter);
    } else {
        console.log("missed");
    };
    // tabulate demo score
    document.getElementById("TrialCount").innerHTML = "Score = " + counter + " /10";
    function GotoPGF() {
        if (counter === 10) {
            window.location.href = "PreGameFlash.html"; // maybe put the congrats prompt before gg to PGF
        };
    };
});

beat5.addEventListener("click", function (getPosition) {
    var b5 = this.getBoundingClientRect().top;
    console.log(b5);
    // detect collision
    if (b5 <= 450) {
        counter += 1;
        console.log(counter);
    } else {
        console.log("missed");
    };
    // tabulate demo score
    document.getElementById("TrialCount").innerHTML = "Score = " + counter + " /10";
    function GotoPGF() {
        if (counter === 10) {
            window.location.href = "PreGameFlash.html"; // maybe put the congrats prompt before gg to PGF
        };
    };
});

beat6.addEventListener("click", function (getPosition) {
    var b6 = this.getBoundingClientRect().top;
    console.log(b6);
    // detect collision
    if (b6 <= 450) {
        counter += 1;
        console.log(counter);
    } else {
        console.log("missed");
    };
    // tabulate demo score
    document.getElementById("TrialCount").innerHTML = "Score = " + counter + " /10";
    function GotoPGF() {
        if (counter === 10) {
            window.location.href = "PreGameFlash.html"; // maybe put the congrats prompt before gg to PGF
        };
    };
});

beat7.addEventListener("click", function (getPosition) {
    var b7 = this.getBoundingClientRect().top;
    console.log(b7);
    // detect collision
    if (b7 <= 450) {
        counter += 1;
        console.log(counter);
    } else {
        console.log("missed");
    };
    // tabulate demo score
    document.getElementById("TrialCount").innerHTML = "Score = " + counter + " /10";
    function GotoPGF() {
        if (counter == 10) {
            window.location.href = "PreGameFlash.html"; // maybe put the congrats prompt before gg to PGF
        };
    };
});

beat8.addEventListener("click", function (getPosition) {
    var b8 = this.getBoundingClientRect().top;
    console.log(b8);
    // detect collision
    if (b8 <= 450) {
        counter += 1;
        console.log(counter);
    } else {
        console.log("missed");
    };
    // tabulate demo score
    document.getElementById("TrialCount").innerHTML = "Score = " + counter + " /10";
    function GotoPGF() {
        if (counter === 10) {
            window.location.href = "PreGameFlash.html"; // maybe put the congrats prompt before gg to PGF
        };
    };
});

beat9.addEventListener("click", function (getPosition) {
    var b9 = this.getBoundingClientRect().top;
    console.log(b9);
    // detect collision
    if (b9 <= 450) {
        counter += 1;
        console.log(counter);
    } else {
        console.log("missed");
    };
    // tabulate demo score
    document.getElementById("TrialCount").innerHTML = "Score = " + counter + " /10";
    function GotoPGF() {
        if (counter === 10) {
            window.location.href = "PreGameFlash.html"; // maybe put the congrats prompt before gg to PGF
        };
    };
});

beat10.addEventListener("click", function (getPosition) {
    var b10 = this.getBoundingClientRect().top;
    console.log(b10);
    // detect collision
    if (b10 <= 450) {
        counter += 1;
        console.log(counter);
    } else {
        console.log("missed");
    };
    // tabulate demo score
    document.getElementById("TrialCount").innerHTML = "Score = " + counter + " /10";
    function GotoPGF() {
        if (counter === 10) {
            window.location.href = "PreGameFlash.html"; // maybe put the congrats prompt before gg to PGF
        };
    };
});

// get positions
//let Movement = setInterval(function () {
   // let beats1Top = parseInt(window.getComputedStyle(beats1).getPropertyValue("top"));
    //let stationaryBeatsTop = parseInt(window.getComputedStyle(beatsStationary).getPropertyValue("top"));
    // console.log(beats1Top);
    // console.log(stationaryBeatsTop);
    let beat1 = document.querySelector("#beat1.beat");
    let beat2 = document.querySelector("#beat2.beat");
    let beat3 = document.querySelector("#beat3.beat");
    let beat4 = document.querySelector("#beat4.beat");
    
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
      }
    let counter = 0;

    function GotoPGF() {
        if (counter === 10) {
            window.location.href = "AreYouReady.html";
        }
    }
    
    function handleBeatClick() {
        var beat = this;
        console.log(beat);
        var beatTop = beat.getBoundingClientRect().top;
    
        if (beatTop >= 610) {
            counter += 1;
            setTimeout(function(){
                document.getElementById("Perfect").innerHTML = "Perfect";
            },500);
            console.log(counter);
        } else if (beatTop >= 590 && beatTop < 610){
            setTimeout(function(){
                document.getElementById("Good").innerHTML = "Good";
            },500);
        }
        else {
            console.log("missed");
        }
    
        document.getElementById("TrialCount").innerHTML = "Score = " + counter + " /10";
        GotoPGF();
    }
    
    beat1.addEventListener("click", handleBeatClick);
    beat2.addEventListener("click", handleBeatClick);
    beat3.addEventListener("click", handleBeatClick);
    beat4.addEventListener("click", handleBeatClick);
    beat5.addEventListener("click", handleBeatClick);
    beat6.addEventListener("click", handleBeatClick);
    beat7.addEventListener("click", handleBeatClick);
    beat8.addEventListener("click", handleBeatClick);
    beat9.addEventListener("click", handleBeatClick);
    beat10.addEventListener("click", handleBeatClick);

    
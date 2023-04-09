var TrialCircle = document.getElementById("Trial");
var TC = TrialCircle.getContext("2d");
TC.beginPath();
TC.arc(200, 200, 100, 0, 2 * Math.PI);
TC.fillStyle = 'grey';
TC.linewidth = 15;
TC.strokeStyle = 'black';
TC.stroke();

function hideReady (){
    document.getElementById("YouAreReady").style.visibility = "hidden";
}

function GoToPreGameFlash () {
    Trial.addEventListener("click", function (YouAreReady){
    document.getElementById("YouAreReady").style.visibility = "visible";
    });
};

// got help from: https://www.tutorialspoint.com/How-to-set-whether-an-element-should-be-visible-in-JavaScript#:~:text=style%5B%22visibility%22%5D%20%3D,should%20be%20visible%20or%20not.
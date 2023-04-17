
function hideReady (){
    document.getElementById("YouAreReady").style.visibility = "hidden";
}

function GoToPreGameFlash () {
    Trial.addEventListener("click", function (YouAreReady){
    document.getElementById("YouAreReady").style.visibility = "visible";
    });
};
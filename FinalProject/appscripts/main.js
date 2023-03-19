

// pause auto music for starting screen
var myMusic = document.getElementById("music");
function play() {
    MyMusic.pause();
};


// page 2 input username
const UN = document.getElementById('username');

insertName.addEventListener("submit", function (e) {
    e.preventDefault(); // to prevent the page from refreshing
    const usernameValue = UN.value;
    localStorage.setItem('user-name', usernameValue);
    window.location.href="Instructions.html";
});

// page 3 instructions

// page 4 trial page
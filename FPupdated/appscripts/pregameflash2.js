document.getElementById("PGF").innerText = "3"
setTimeout(function(){
    document.getElementById("PGF").innerText = '2';
}, 1000);
setTimeout(function(){
    document.getElementById("PGF").innerText = '1';
}, 2000);
setTimeout(function(){
    document.getElementById("PGF").innerText = 'Start';
}, 3000);
setTimeout(function(){
    window.location.href = "RexIncognito.html";
}, 4000);
setInterval(setClock, 1000);
setDate()
function setClock() {
    let clock = new Date();
    document.querySelector(".hour").textContent = clock.getHours();
    document.querySelector(".minutes").textContent = clock.getMinutes();
    document.querySelector(".seconds").textContent = clock.getSeconds();
    setDate();
}

function setDate() {
    let clock = new Date();
    document.querySelector(".weak-info").textContent = clock.getFullYear() + '-' + (clock.getMonth() + 1) + '-' + clock.getDate();
}
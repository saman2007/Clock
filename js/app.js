//call set clock every 1 second
setInterval(setClock, 1000);
//a function to set hours, minutes and seconds
function setClock() {
    //Date instance
    let clock = new Date();
    //setting hours, minutes and seconds
    document.querySelector(".hour").textContent = clock.getHours();
    document.querySelector(".minutes").textContent = clock.getMinutes();
    document.querySelector(".seconds").textContent = clock.getSeconds();
    //calling setDate function
    setDate();
}

//a function to set date
function setDate() {
    let clock = new Date();
    //setting date
    document.querySelector(".weak-info").textContent = clock.getFullYear() + '-' + (clock.getMonth() + 1) + '-' + clock.getDate();
}
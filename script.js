const timer = document.querySelector(".timer");
let date = new Date();
let hour = date.getHours();
let min = date.getMinutes();

hour = hour < 10 ? "0" + hour : hour;
min = min < 10 ? "0" + min : min;
timer.innerHTML = `${hour}:${min}`;

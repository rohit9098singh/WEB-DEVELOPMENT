
const clock = document.querySelector("#clock");


function updateClock() {

    const date = new Date();
    console.log(date);
    const formattedDate = date.toLocaleTimeString();//gives only the time
    const justfun = date.toLocaleTimeString();//gives  the date + time
     clock.innerHTML = formattedDate;
}

updateClock();
setInterval(updateClock, 1000);

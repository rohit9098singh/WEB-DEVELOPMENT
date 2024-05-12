let intervalId =null;

const randomColor = function() {
    const hex_code = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex_code[Math.floor(Math.random() * 16)];
    }
    return color;
};

const changeBgColor = function() {
    document.body.style.backgroundColor = randomColor();
};

const startChangingColor = function() {
    if (intervalId === null) {
        intervalId = setInterval(changeBgColor, 1000);
    }
};

const stopChangingColor = function() {
    clearInterval(intervalId);
    intervalId = null;
};

document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);

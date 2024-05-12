const button = document.querySelector(".btn"); 
const colorSpan = document.querySelector(".color"); 

const colors = ['red', 'blue', 'green', 'yellow', 'seagreen', 'purple']; 

button.addEventListener("click", function(e) {
    e.preventDefault();
    const randomIndex = Math.floor(Math.random() * colors.length); 
    const randomColor = colors[randomIndex];
    colorSpan.innerHTML = randomColor;
    document.body.style.backgroundColor = randomColor;
}, false);



const hex="0123456789ABCDEF"
const color=
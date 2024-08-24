console.log("hi there");

setTimeout(function(){
    console.log("from inside async function");
    
},20000);

setTimeout(function(){
    console.log("from inside async function -2");
    
},10000);

let b=0;
for(let i=0;i<10;i++){
    a=a+i;
}
console.log(b);


// 2nd 
setTimeout(ondone, 1000);

function ondone() {
    console.log("hello world"); // Corrected "cosole.log" to "console.log"
}

let a = 0; // Declared variable 'a' using 'let'
for (let i = 0; i < 100; i++) { // Declared variable 'i' using 'let'
    a = a + i;
}

console.log(a); // This will print the sum of numbers from 0 to 99

// 3rd

console.log("see whats new at here ");

setTimeout(function(){
    console.log("first process");
    setTimeout(function(){
        console.log("second process ");
        
    },1000);
    
},3000);

a=0;
for(let i=0;i<10;i++){
    a=a+i;
}
console.log(a);



/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let date = new Date();
    let beginingTime = date.getTime();
    
    let sum = 0;
    for (let i = 1; i <= n; i++) { 
        sum += i;
    }
    console.log("the sum is ",sum);
    
    let endTime = new Date().getTime(); 

    let timeTaken = (endTime - beginingTime) / 1000; 
    return timeTaken;
}


console.log("Time to execute sum from 1 to 100 is", calculateTime(100), "seconds");
console.log("Time to execute sum from 1 to 500 is", calculateTime(500), "seconds");
console.log("Time to execute sum from 1 to 1000 is", calculateTime(1000), "seconds");
console.log("Time to execute sum from 1 to 100000 is", calculateTime(100000), "seconds");
console.log("Time to execute sum from 1 to 1000000000 is", calculateTime(1000000000), "seconds");

function displayClock() {
    const now = new Date();
    
    // Extract hours, minutes, and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Format the time to always be two digits (e.g., "09" instead of "9")
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Clear the console to update the clock in place
    console.clear();
    
    // Display the clock
    console.log(`${hours}:${minutes}:${seconds}`);
}

// Run displayClock() every second
setInterval(displayClock, 1000);

// Initial call to display the clock immediately
displayClock();



/*

function calculatesum(){
    return sum(10,20);
}
setTimeout(calculatesum,1000);

==> but if we pass the function [setTimeout(calculatesum(),1000);] then it will be wrong because it means
 that here you are not passinf the function rather it will take the value of that function which is comming
  from the function like 30 here

*/
let countdownValue = 30;
let scheduledTime = new Date().getTime(); // Initialize the time before the first setTimeout call

function updateCountdown() {
    const actualExecutionTime = new Date().getTime(); // Capture the time when the function runs
    console.log(`Countdown Value: ${countdownValue}`);
    console.log(`Time since setTimeout was called: ${actualExecutionTime - scheduledTime} ms`);

    countdownValue--;

    if (countdownValue >= 0) {
        scheduledTime = new Date().getTime(); // Update the time before the next setTimeout call
        setTimeout(updateCountdown, 1000); // Schedule the next call
    }
}

updateCountdown(); // Start the countdown
 
// Initial variables
const randomVal = Math.floor(Math.random() * 100) + 1;
let guesses = [];
let attemptsLeft = 10;
let gameActive = true;

// Get DOM elements
const submitBtn = document.querySelector("#sub-btn");
const userGuessInput = document.querySelector(".user-guess");
const guessDisplay = document.querySelector(".guess");
const guessRemainingDisplay = document.querySelector(".guess-remaining");
const messageDisplay = document.querySelector(".LowOrHi");

// Event listener for submitting a guess
submitBtn.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent form submission

    if (!gameActive) return; // If the game has ended, ignore the submit

    // Get the user input
    const guess = parseInt(userGuessInput.value);

    // Validate the user's guess
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    // Process the guess
    processGuess(guess);
});

function processGuess(guess) {
    // Add the guess to the list of previous guesses
    guesses.push(guess);
    attemptsLeft--;

    // Update the display
    displayGuess();
    userGuessInput.value = ""; // Clear the input field

    // Check the guess
    if (guess === randomVal) {
        displayMessage("Congratulations! You guessed the correct number.");
        endGame();
    } else if (attemptsLeft === 0) {
        displayMessage(`Game over. The correct number was ${randomVal}.`);
        endGame();
    } else {
        // Provide feedback on the guess
        displayMessage(guess < randomVal ? "Too low!" : "Too high!");
    }
}

function displayGuess() {
    // Display previous guesses and attempts remaining
    guessDisplay.textContent = guesses.join(", ");
    guessRemainingDisplay.textContent = attemptsLeft;
}

function displayMessage(message) {
    // Update the message display
    messageDisplay.textContent = message;
}

function endGame() {
    // End the game
    gameActive = false;
    submitBtn.disabled = true;
}

function resetGame() {
    // Reset the game state
    guesses = [];
    attemptsLeft = 10;
    gameActive = true;

    // Enable the submit button
    submitBtn.disabled = false;

    // Reset the input field and displays
    userGuessInput.value = "";
    guessDisplay.textContent = "";
    guessRemainingDisplay.textContent = attemptsLeft;
    messageDisplay.textContent = "";

    // Generate a new random number
    randomVal = Math.floor(Math.random() * 100) + 1;
}

// Add an event listener for resetting the game
document.querySelector(".new-game-btn").addEventListener("click", resetGame);









































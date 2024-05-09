// if => return type of if is boolean

const isUserLoggedIn =true;
if( isUserLoggedIn){
    console.log("executed here");
}

//================================================================================================================
//if-else ladder

// Function to determine the grade based on a score
function determineGrade(score) {
    let grade;

    if (score >= 90) {
        grade = 'A'; // If score is 90 or higher, grade is A
    } else if (score >= 80) {
        grade = 'B'; // If score is between 80 and 89, grade is B
    } else if (score >= 70) {
        grade = 'C'; // If score is between 70 and 79, grade is C
    } else if (score >= 60) {
        grade = 'D'; // If score is between 60 and 69, grade is D
    } else {
        grade = 'F'; // If score is below 60, grade is F
    }

    return grade; // Return the determined grade
}
const studentScore = 85; // Example score
const studentGrade = determineGrade(studentScore); // Determine the grade
console.log(`The student's grade is: ${studentGrade}`);

//===============================================================================================================================

// Function to check voting eligibility
function checkVotingEligibility(age) {
    // Check if the person is 18 years old or older
    if (age >= 18) {
        console.log('You are eligible to vote.'); // If age is 18 or older, person is eligible to vote
    } else {
        console.log('You are not eligible to vote.'); // If age is under 18, person is not eligible to vote
    }
}

// Example usage:
const personAge = 20; // Example age
checkVotingEligibility(personAge); // Check voting eligibility

//====================================================================================================================================

// Function to get the day of the week based on an input number
function getDayOfWeek(dayNumber) {
    let dayOfWeek;

    // Use a switch statement to determine the day of the week
    switch (dayNumber) {
        case 1:
            dayOfWeek = 'Monday';
            break;
        case 2:
            dayOfWeek = 'Tuesday';
            break;
        case 3:
            dayOfWeek = 'Wednesday';
            break;
        case 4:
            dayOfWeek = 'Thursday';
            break;
        case 5:
            dayOfWeek = 'Friday';
            break;
        case 6:
            dayOfWeek = 'Saturday';
            break;
        case 7:
            dayOfWeek = 'Sunday';
            break;
        default:
            dayOfWeek = 'Invalid day number';
            break;
    }

    // Return the determined day of the week
    return dayOfWeek;
}

// Example usage:
const dayNumber = 3; // Example day number
const day = getDayOfWeek(dayNumber); // Get the day of the week
console.log(`The day of the week is: ${day}`); // Output the day of the week

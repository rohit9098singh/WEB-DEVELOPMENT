const loggedInFromGoogle = false;
const loggedInFromEmai =true;
const userLoggedIn =true;
const debitCard =true;

if(userLoggedIn && debitCard && 2==3)
{
    console.log("allow him to buy the course");
}
if(loggedInFromGoogle || loggedInFromEmai){
    console.log("user logged in");
}
const accountId=1234;//whoes value doesnot changes....
let accountEmail="rohit123@gamil.com";
var accountPassword="2333";
accountCity="jaipur";

let accountState;//value is undefined if not assigned to any thing


// accountId = 2;cannot be changes since it is a constant

accountEmail="rohit@gmail.com";
accountPassword="11111";
accountCity="bangalore";

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

// insted of using to many (console.log) we have a method called (console.table) to print all the values in one line...
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);


/*  NOTE=> there are two ways of declaring a variable that is let and var 
we genrelaly dont use var because var has a global accesss where as let has a local access....*/

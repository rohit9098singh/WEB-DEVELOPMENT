let myDate = new Date();
console.log(myDate);// a date which is not easily readable comes at here 

console.log(myDate.toString());// a bit readable date comes at here....
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());

console.log(myDate.toLocalString());// converts more better...
console.log(typeof(myDate));// objects


let myCreateddate =new Date(2023,0,23);
console.log(myCreateddate);// a difficult to know
console.log(myCreateddate.toDateString());// a little view

// ****** please note that month starts from 0 in java script


let myCreateddate_1= new Date("2023-01-14");// yy-dd-mm or mm-dd-yy.
console.log(myCreateddate_1.toLocaleString());

let myTimeStamp=Date.now();
console.log(myTimeStamp);// 1st jan se lekar abhi tak ka time ko milli second me deta hai
console.log(myCreateddate.getTime());

console.log(math.floor(Date.now()/1000));

//**************************************************************** */
let dateyours =new Date();
console.log(dateyours);
console.log(newDate.getday());
console.log(newDate.getMonth() + 1);


dateyours.toLocalString('default',{
    weekday:"long",
})
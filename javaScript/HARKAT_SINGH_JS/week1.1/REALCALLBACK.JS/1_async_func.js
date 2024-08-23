/*
  1) what does synchronous means ?
 => togher one after the other, sequentially only one thing is happening at a time..

  2) what are asynchronous means ?
  => opposite of synchronous means happens in parts multiple things are context switching with each other..

*/
function findSum(n){
  let ans=0;
  for(let i=0;i<n;i++){
    ans+=i;
  }
  console.log("hey i am called later executed first");
  return ans;

  
}
function findSumTill100(){
  console.log(findSum(100));
  console.log("hey i am first called eecuted later");
  
}

// now calling the async function at here 
setTimeout(findSumTill100,1000); // here we are running a particulalr function after sometime specified over there 
console.log("hello world");// by the time our programme is waiting for the function to execute because of 1000 time
                           // this cosole.log executes by that time


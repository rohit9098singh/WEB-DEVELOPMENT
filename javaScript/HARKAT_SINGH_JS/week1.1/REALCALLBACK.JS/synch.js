function findSum(n) {
    let ans = 0;
    for (let i = 0; i < n; i++) {
      ans += i;
    }
    return ans;
  }
  
  function findSumTill100() {
    console.log(findSum(100));
  }
  
  // Busy waiting to simulate a delay
  function syncSleep() {
    let a = 1;
    for (let i = 0; i < 100000000; i++) {
      a++;
    }
  }
  
  syncSleep();              // Blocks execution for a while
  findSumTill100();         // Immediately executes and prints 4950
  setTimeout(findSumTill100, 1000);  // Schedules another execution after 1 second
  console.log("hello world");        // Prints immediately after setting the timeout
  
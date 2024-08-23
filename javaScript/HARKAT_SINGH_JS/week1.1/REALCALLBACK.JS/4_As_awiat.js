/**
 *  1) ========================= NORMAL PROMISE METHOD ====================
         * function rohitCome() {
            let p = new Promise(function(resolve, reject) {
                // Simulate some asynchronous logic
                let success = true; // Change this to false to test the reject case

                if (success) {
                    resolve("hi there");
                } else {
                    reject("something went wrong");
                }
            });
            return p;
        }

        function main() {
            rohitCome()
                .then(function(value) {
                    console.log(value); // Logs "hi there" if resolved
                })
                .catch(function(error) {
                    console.log(error); // Logs "something went wrong" if rejected
                });
        }

        main();

*/
// 2========================= async await ========================
/**
                     *  function rohitCome() {
                        return new Promise(function(resolve, reject) { // Fixed the syntax here
                            let success = true; // Change this to false to test the reject case
                            if (success) {
                                setTimeout(function(){
                                    resolve("hi there");
                                },5000)
                            }
                            else {
                                reject("some exception had occurred");
                            }
                        });
                    }

                    async function main() { // Added async keyword here
                        try {
                            const value = await rohitCome(); // Using await to handle the promise
                            console.log("this will be excecuted before");
                            let a=0;
                            for(let i=0;i<10;i++){
                            a=a+i;
                            }
                            console.log(a);
                            
                            console.log(value); // Logs "hi there" if resolved
                        } catch (error) {
                            console.log(error); // Logs "some exception had occurred" if rejected
                        }
                    }

                    main();
 * 
 */

/**
 *note==> agar noraml .then wall method hota to 5 sec ke liye jo timeout wait kar  r tab
 *         tak vo loop excecute hone lagta callstack me or time out web api me hota
 *         5 sec ke baadh jab vo khatam hota to vo execute nhi hota jo loop execute hora tha
 *         uske execute hone ka wait karta or fir chalta
 *
 *         but yaha await kar ke humne vo loop ko chalne se rok diya or bola ke jab tak vo promise
 *         complete nhi hojata tab tak aage mat badho
 *
 *         best example to undrsatnd that is given below
 *
 *  */


 //1==> FIRST WAY OF UNDERSTNADING

/**
             *   function kiratAsyncFunction() {
                return new Promise(function (resolve) {
                    setTimeout(function () {
                        resolve("hi there..");
                    }, 3000);
                });
            }

            function main() {
                kiratAsyncFunction()
                    .then(function (value) {
                        console.log(value); // This will log "hi there.." after 3 seconds
                    })
                    .catch(function (error) {
                        console.log(error); // Handle any potential errors
                    });
                
                console.log("I will be the first one to execute, before the promise resolves.");
            }

            main();
 */

                
// 2ND WAY OF UNDERSTANDING

function kiratAsyncFunction() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("hi there..");
        }, 3000);
    });
}

async function main(){
   let value=await kiratAsyncFunction();
   console.log(value);
   console.log("hi there 1");
   
}

main();
console.log("after main");

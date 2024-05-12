// the promise object represent the eventaul completion of an asynchronous operation and its resulting values

// promise ko ya to consume kiya jata hai ya fir create kiya jata moreoftenly we consume the promise
// but what the thing is when we consume a promse any one might have created it then only we are using it 
// there at first we will see how to create a promise 


//============================================ Promise Creation ======================================================
// takes two parameter 1-->resolve : promise will be resolved ,2--> reject: or promise will be rejected
const promiseOne = new Promise(function(resolve, reject) { 
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function() {
        console.log("Async task is completed");
        resolve(); // unless and untill i write this the .then function is not going to execute... matlab ye resolve or .then ko aapas me connect karta hai
    }, 1000);
});

//============================================ Promise Consumption ======================================================
//.then has a direct connection with resolve
promiseOne.then(function() {
    // This function runs when the promise is resolved
    console.log("Promise consumed");
})

// NOTE-> in the output promise consumed kabhi bhi pehle nhi aayega vo hamesha baadh he me aayega kyuke pehle upper walla task complete hua hai or fir jaise 
//he maine resolve ko call kiya to promise consumed part execute hua


//========================================== ANOTHER METHOD ==============================================================
// it is not neccessary to hold the promise in some of the variable or the other

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve();
    },2000)
}).then(function(){
    console.log("then function executed");
})

// just because i havent applied any kind of a variale assignment i can directly apply it to the functions 

//==========================================THIRD PROMISE=================================================================

// how can i recieve an argument in the promise functions
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
         resolve({username:"chai",email:"love@124"})  

    },1000)
})

promiseThree.then(function(user){
    console.log(user);
});

//=========================================PROMISE 4=======================================================================

//============================================ Promise Creation ======================================================
const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if (!error) {
            resolve({ user: { username: "rohit singh" }, place: "jharkhand" });
        } else {
            reject(`ERROR: something went wrong`);
        }
    }, 1000);
});

//============================================ Promise Consumption ======================================================
promiseFour
    .then((data) => {
        // Logging the resolved data (object with user and place properties)
        console.log(data);
        // Return the username property of the user object but we cannot store it in a varible and print the shit we have to use chaining then concept
        return data.user.username;
    })
    .then((username) => {
        // Due to the chain of .then, the value from the previous .then (username) is passed here as an argument
        console.log(username);
    })
    .catch(function(error) {
        // Catch is used because we are creating the function in such a way that an error might occur
        console.log(error);
    })
    .finally(()=>{

        console.log("dont know what but your promise is either resolved or rejected");
    })


    //=========================================PROMISE FIVE=====================================================================
   
            //====================== PROMISE CREATION ===========================
    const promiseFive = new Promise(function(resolve, reject) {
        setTimeout(function() {
            let error = true;
            if (!error) {
                resolve({ user: { username: "amit singh" }, password: "12345" });
            } else {
                reject(`ERROR: something went wrong`);
            }
        }, 1000);
    });

          //============= PROMISE CONSUMPTION WITH ANOTHER METHOD=============
          // here also we have used catch because we are generating error on our own here if error would have been false then there was no need of catch block
        async function consumePromiseFive(){
            try {
                const reponse=await promiseFive // promiseFive is an object so we cannot handle  it like promiseFive();
                console.log(respose);
        
            } catch (error) {
                console.log(error);
            }
        }
        consumePromiseFive();

        //=============================== ASYNC AWAIT =================================

        async function getAllUsers(){
           try {
            const response= await fetch('https:jsonplaceholder.typicode.com/users');// aab kyuke ye ek network request isliye isme time lagega therefore isko await ke andar dalna hoga
            const data=await response.json();//response.json karne me bhi time lagta hai isliye ise bhi hume await karwana hoga
            console.log(data);
           } catch (error) {
              console.log(error);
           }
        }
        getAllUsers();

        //======================= SAME ABOVE ONE WITH .THEN AND CATCH METHOD==========
        fetch('https:jsonplaceholder.typicode.com/users')
        .then((response)=>{
            return response.json()
        })
        .then((recived_returned_data)=>{
            console.log(recived_returned_data);
        })
        .catch((error)=>{
            console.log("error accoured 404!");
        })
        .finally()
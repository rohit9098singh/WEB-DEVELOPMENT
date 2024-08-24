// here we will how can we promisefy a simple async function 

// function myOwnSetTimeout(callback,duration){
//     setTimeout(function(){
//         callback();
//     },duration);   
// }
  function promisifiedmyOwnSetTimeout(duration){
    const p= new Promise(function(resolve,reject){
        setTimeout(function(){
           resolve();
        },duration)
    })
    return p
  }

  // here above both we are doing the same thing but one with call back and another with promise 
  // in first function there is a call back functio that a user provides
  // in second there is a resolve inbuilt function taht a promise object provides

 const ans=promisifiedmyOwnSetTimeout(1000)
 console.log(ans);
  ans.then(function(){
     console.log("time is done");
     
  })
 





/**
 *    3 just recalled earlier concept at here)
                * function promisfiedmyOwnSetTImeout(duration){// it doesnt take any function or call back can takes the duration
                        
                    const p= new Promise(function(resolve,reject){
                        let success=true;
                        if(success){
                            resolve("hi there")
                        }
                        else{
                            reject(err)
                        }
                    });
                    return p
                }                
                function main(){
                    promisfiedmyOwnSetTImeout()
                    .then(function(value){
                        console.log(value);
                        
                    })
                    .catch(function(err){
                        console.log(err);
                        
                    })
                }
                main();
 */

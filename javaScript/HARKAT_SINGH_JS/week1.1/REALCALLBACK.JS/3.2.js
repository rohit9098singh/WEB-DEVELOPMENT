// i want a async function
// then i want a syncronous task to happen in it 
// want my work which the async return
// some other async task

function someSyncTask_1(){
   console.log("some sync task_1");
   
}
function someSyncTask_2(){
    console.log("some async task 2");
    
}
setTimeout(function(data){
    someSyncTask_2(data);
},1000);
someSyncTask_1();


// other way
function promisifiedtimeOut(duration){
    const p=new Promise(function(resolve,reject){
       setTimeout(resolve,duration)
    });
    return p;
};
// [promise chaining]
promisifiedtimeOut(1000).then(function(){
    console.log("first work is done");
    return promisifiedtimeOut(3000).then(function(){
        console.log("second one is done");
        
    });
    
});
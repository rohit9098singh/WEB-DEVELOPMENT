// write a programme to print all the even numbers in an array

const prompt = require('prompt-sync')();

function findEvenNumber(){
    let size=parseInt(prompt("Enter the size of an array : "));

    let arr=[];

    for(let i=0;i<size;i++){
        arr[i]=parseInt(prompt(`Enter the element number : ${i+1}`));
    }

    console.log("Even numbers in the array :");
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            console.log(arr[i]);
            
        }
    }
    
}

findEvenNumber();
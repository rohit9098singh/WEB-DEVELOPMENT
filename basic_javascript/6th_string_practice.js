const prompt = require("prompt-sync")();
/*function countVowel(str){
    let count=0;
    for(const char of str){
        if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
            console.log(char)
            count++;
        }
    }
    console.log("the number of vowels in the given string is",count);
}
str=prompt("enter a string of your choice :");
countVowel(str);*/

                /* SAME THING WITH AN ARROW FUNCTION*/
const countVowels=(str)=>{
    let count=0;
    for(const char of str){
        if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
            console.log(char)
            count++;
        }
    }
    console.log("the number of vowels in the given string is",count);
}
str=prompt("enter a string of your choice :");
countVowels(str);             
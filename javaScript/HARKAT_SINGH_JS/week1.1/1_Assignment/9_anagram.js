const prompt=require("prompt-sync")();

const size=parseInt(prompt("Enter the size of an array :"));

let stringCollection=[];

for(let i=0;i<size;i++){
    stringCollection[i]=prompt(`enter your string at index ${i+1} :`);
}
console.log("Your strings are as follow at here \n",stringCollection);


function isAnagram(str1,str2){
    return str1.split().sort().join("")===str2.split().sort().join("")
}

let anagram =[]
let notanagram=[...stringCollection];

for (let i = 0; i < stringCollection.length; i++) {
    for (let j = i + 1; j < stringCollection.length; j++) { // Start j from i+1 to avoid comparing the same string
        if (isAnagram(stringCollection[i], stringCollection[j])) {
            anagram.push(stringCollection[i], stringCollection[j]);
            notanagram = notanagram.filter((str) => {
                return str !== stringCollection[i] && str !== stringCollection[j];
            });
        }
    }
}

if (anagram.length === 0) {
    console.log("There are no anagram strings in your provided strings.");
} else {
    console.log("Anagrams found:", anagram);
    console.log("Strings that are not anagrams:", notanagram);
}


const prompt = require("prompt-sync")();

const size = parseInt(prompt("Enter the number of strings you want of which anagram has to be checked: "));

let stringHolder = [];

for (let i = 0; i < size; i++) {
    let str = prompt(`Enter your string at index ${i + 1}: `);
    stringHolder.push(str);
}

console.log("The provided array now has these particular strings in it:");
console.log(stringHolder);


let anagrams=[];
let nonAnagrams=[...stringHolder];

function isAnagram(str1,str2){
  return str1.split('').sort().join('')===str2.split('').sort().join('')
}

for (let i = 0; i < stringHolder.length; i++) {
  for (let j = i + 1; j < stringHolder.length; j++) {
      if (isAnagram(stringHolder[i], stringHolder[j])) {
          anagrams.push([stringHolder[i], stringHolder[j]]);
          // Remove found anagrams from nonAnagrams list
          nonAnagrams = nonAnagrams.filter(str => str !== stringHolder[i] && str !== stringHolder[j]);
      }
  }
}

console.log("The anagram array contains:");
if (anagrams.length > 0) {
    anagrams.forEach((e) => console.log(e));
} else {
    console.log("There are no anagrams in the present list.");
}

console.log("The non-anagram array contains:");
console.log(nonAnagrams);



module.exports = isAnagram;
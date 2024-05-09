const marvel_heros=["thor","ironman","spiderman"];
const dc_heros=["superman","flash","batman"]

marvel_heros.push(dc_heros);
console.log(marvel_heros);// gives an array inside array takes the pushed array as a single element only...["thor","ironman","spiderman",["superman","flash","batman"]]

console.log(marvel_heros[3]);//["superman","flash","batman"]

const allHeros=marvel_heros.concat(dc_heros);// concat returns a new array that is why it need to be stored in another variable..
console.log(marvel_heros);

//=============================== SPREAD OPERATOR =============================

const all_new_heros =[...marvel_heros,...dc_heros];
console.log(all_new_heros);

const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array =anotherArray.flat(Infinity);
console.log(real_another_array);// resolves all 



console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"));// makes it as an array
console.log(Array.from({name:"hitesh"}));// []  becsue bolna padega keys ka array banna ha ke values ka array banana hai

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));//[100,200,300]

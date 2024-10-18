let a={
    name:"rohit"
}
let z={...a}
z.name="adil";
console.log(a.name); // the value doesent changes as it just create a shallow copy and the it is passed by value not by reference 

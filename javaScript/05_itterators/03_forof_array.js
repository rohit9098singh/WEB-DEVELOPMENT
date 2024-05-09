// for(const num of object)// object basicallly says kis object pe aapko loop lagana hai which is arr in down
// {
   
// }
const arr=[1,2,3,4,5]
for(const num of arr) {
   console.log(num);
}

const greeting ="hello world";
for(const i of greeting){
    console.log(`each char is ${i}`);
}

//==================================== MAPS =======================================================

const map=new map();// map is an object that holds a key value pairs...... and remembers the order of the key in which they were inserted
map.set("IN","india");
map.set("US","united states of America");
map.set("FR","france");
map.set("IN","india");// output will  not contain this as it is always there elemenates the dublicate pairs....
console.log(map);

for (const key of map) {
   console.log(key);  // gives the output as a seperate arrays form 
                      //["IN","india"]
                      //["us","unites states of america"]
                      //["fr",france]
}


for (const [key,values] of map) {
    console.log(key,":",values);  
}    


//=================================== OBJECTS =========================================================
const myObject={
   'game1':"nfs",
    'game2':'spiderman'
}
for (const [key,values] of myObject) {// it says my object is not itteratable
    console.log(key,":",values);  
}  
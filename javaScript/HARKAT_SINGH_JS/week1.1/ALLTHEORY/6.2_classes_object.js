class Animal {
    constructor(name, legcount, sound) {  
        this.name = name;
        this.legcount = legcount;
        this.sound = sound;
    }
    speak() {
        console.log("hi there " + this.sound); 
    }

    // we can also have static function they are 
    //actualy not relaed to objects rather realted to class itself
    static myType(){
        console.log("Animal");
        
    }
}

let dog = new Animal("dog", 4, "bhow bhow");
let cat = new Animal("cat", 4, "meow meow"); 

// calling the static function note should be called by the class name not the object name
console.log(Animal.myType());//undefined
console.log(Animal.speak());//Error

/*
  => whenever you are calling a function inside a class it must be called with an object 
     but suppose you want to make a function which u want to call it directly then
     make it as a static method
*/



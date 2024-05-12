let myHeroes=["thor","spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}
Object.prototype.hitesh=function(){
    console.log(`hitesh is present there in all objects`);
}
// ye aisa isliye hora kyuke (string function array) saare object se he bane hai  se hoke he guzarte hai isliye agar object ake andar koi function hoga to vo sabme available rahega
heroPower.hitesh(); 
myHeroes.hitesh();

// supppose the same thing we do in myHeroes taht is an array then that method will not be assebale in heropower
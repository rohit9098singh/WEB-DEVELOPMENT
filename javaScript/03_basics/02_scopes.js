
if(true){
    let a=2;
    const b=20;
    var c=30;
}

console.log(a);//not accesable
console.log(b);//not accesable
console.log(c);// accesable 

//===================================FUNCTION INSIDE A FUNCTION=================================================

function one(){
    const username="hitesh"

    function two(){
        const website="youtube"
        console.log(username);// accesable
    }
    console.log(website);// not accesable 

    two();
}
one()
// works like a child can ask an icecream from the elders but the elders cannot ask to the childerens
// let a =20;

// function x(){
//     var a=2
//     console.log(a)
// }

// x();
// console.log(a)

// closure

// function x(){
//     var a=7;
//     function y(){
//        console.log(a)
//     }
//     return y
// }

// var z=x();
// // console.log(z)
// z()


// console.log(x);
// getName();

// var getName=()=>{
//     console.log("hello world ")
// }

// var x=3

function a(){
    // console.log("first",x);
    function b(){
        // console.log("second",x);
        function c(){
            console.log("third",x);
        }
    }
}
var x=10;
a();

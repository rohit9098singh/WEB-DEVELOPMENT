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
    b();
    function b(){
        c();
        function c(){
            console.log("third", x);
        }
    }
}
a();
let x = 10;


function square(a){
    return a*a;
}
function cube(a){
    return a*a*a;
}

function sumOfSomeFunction(a,b,desiredFunc){
    let value1=desiredFunc(a); // this is only a call back where we are literraly calling one function inside another function
    let value2=desiredFunc(b);
    return value1+value2;
}

console.log(sumOfSomeFunction(2,4,cube));

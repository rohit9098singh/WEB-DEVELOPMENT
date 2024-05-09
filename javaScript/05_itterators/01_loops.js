for (let i  = 0; i  < 10; i ++) {
    const element = i+1;
    console.log(element);
    
}

for (let i  = 0; i  < 10; i ++){
    console.log(`outer loop ${i}`);
    for (let j  = 0; j < 10; j ++){
     //console.log(`inner loop ${j}`);
     console.log(i + "*" + j  +"=" + i*j);
    }
}

//======================BREAK AND CONTINUE=============================
for (let index = 1; index < 20; index++) {
    if(index==5){
        console.log("5 detected");
        break;
    }
       console.log(`value of i is ${index}`);    
}

for (let i= 1; i < 20; i++) {
    if(i==5){
        console.log("5 detected");
        continue;
    }
       console.log(`value of i is ${index}`);    
}
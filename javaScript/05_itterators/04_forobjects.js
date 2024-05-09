const myObjects={
    js: 'javascript',
    cpp:'c++',
    rb:"ruby",
    swift:"swift by apple"
}
for(const key in myObjects){
    console.log(key);// all the keys
    console.log(myObjects[key]);
    console.log(`${key} shortcut is for ${myObjects[key]}`);
}

const programming =["js","rb","py","swift","java"]
for (const key in programming) {
   console.log(key);// ye keys deta hai but point ye hai ke arrrays ke kon se key vahi indexing
   console.log(programming[key]);
}
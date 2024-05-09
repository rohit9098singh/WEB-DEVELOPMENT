function reverseString(string){
    // seperated the string
    const splited_string=string.split('');
    console.log(splited_string);

    // reverse the seperated string
    const reversed=splited_string.reverse();
    console.log(reversed);

    //now joining the string
     let new_string=reversed.join('');
      return new_string;
    
}
let result=reverseString("rohit");
console.log(result,);

//IIFF=> immediately invoked function ecpression

(function chai()
{
    console.log("database conected");
}) (); // colon is compulsary

// syntax==> ()()-> first bracket is for function defination and another is for execution

// global scope ke pollution se problem hote hai kae bar to us global scope ke jo variables hai ya pollution usko hatane ke liye we use iffi

(() =>{
    console.log('db connected twice');
}) ();

//============================================================
((name) =>{
    console.log('db connected twice ${name}');
}) ('hitesh')
const coding=["js","ruby","java","python","cpp"];
codding.forEach( function (item){// for each ek call back function hota hai isliye uska (name nhi hota hai)
    
    console.log(item);// access all the values
})
 //============================= ALSO USE ARRAOW FUNCTION======================

 codding.forEach(  (item)=>{// for each ek call back function hota hai isliye uska (name nhi hota hai)
    
    console.log(item);// access all the values
})

const mycodding =[
  {
    languageName:"javasscript",
    languageFileName:"js"
  },
  {
    languageName:"java",
    languageFileName:"java"
  },
  {
    languageName:"python",
    languageFileName:"py"
  },
]
mycodding.forEach(()=>{
    console.log(item.languageName);
})
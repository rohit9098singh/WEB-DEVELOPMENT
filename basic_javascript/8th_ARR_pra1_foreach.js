let arr=[1,2,3,4];
arr.forEach(function square(num){
   console.log(num*num);
});
         /*for each loop */
let array=[7,8,9,10]
array.forEach((values)=>{
    console.log(values*values); 
})  
         /*ONE ANOTHER METHOD OF DOIND THIS */       
    
let nums=[65,76,88];
let calsquare=(num)=>{
    console.log(num*num);
};
nums.forEach(calsquare);         
const codding=["js","java","python",'cpp'];
const values=codding.forEach(()=>{// for each never returns a value
    console.log(items);

})
console.log(values);

const newNums =myNums.filter((num) => num >4) // filter bhi ek call back function leta hai aapne andar jiska koi name nhi hota hai initially or aise me value ye return bhi karte hai
                                              // isse liye agar hum scope ko hata kar agar usko ek he line me likhe to us case me retrun likhna zaruri nhi hota hai but agar hum scope ke sath like to retun is compulsary
console.log(newNums);
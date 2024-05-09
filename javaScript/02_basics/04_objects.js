//const tinderUser=new object();  declare like this or

const tinderUser={}
console.log(tinderUser);
tinderUser.id="123abc"
tinderUser.name="sammy";
tinderUser.loggedIn=false;
console.log(tinderUser);

// NESTINGS OF AN OBJECTS......
const regularUser ={
    email: "some2GMAIL.com",
    fullname:{
        userfullname:{
           firstname:"hitesh",
           lastname:"singh"
        }
    }
}
console.log(regularUser.fullname);// {id='123abc',name:'sammy',isLoggedIn:false}
console.log(jsUsers_1.fullname.userfullname);//{firstname:"hitesh",lastname:"singh"}
console.log(jsUsers.fullname.userfullname.firstname);// hitesh

// suppose we have nested but that was not present then in that case we use question mark symbol
console.log(jsUsers.fullname?.userfullname.firstname);

//==========================================================================================================

const obj1={1:"a",2:"b"}
const obj2={1:"a",2:"b"}

const obj3={obj1,obj2}// same array walla problem array ke andar array use tarh object ke andar object

const obj4=object.assign({},obj1,obj2);// sabhi value ek naya object ke andar jata hai jo ke { } hai
console.log(obj4);

// one more is spread operator
const obj5={...obj1,...obj2}
console.log(obj5);

//============================================================================================================

console.log(tinderUser);// returns all the value in the form of a string
console.log(object.keys(tinderUser));// returns a array form
console.log(object.values(tinderUser));// returns a array form although it was an string 
console.log(object.entries(tinderUser));// har ek keys or values ko array ke form me convert kar dega like--> [['id','123abc'],['name','hitesh']]

console.log(tinderUser.hasOnnproperty(isLoggedIn));// true

//============================= MORE DETAILS ==================================================================

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"rohit"
}
const {courseInstructor:instructor}=course; // with this  syntax we have just changed the variable name
console.log(instructor);// this is only a synataxticall sugar


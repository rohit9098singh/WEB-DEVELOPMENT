 class user{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`username: &{this.username}`);
    }
    createId(){
        return '123'
    }
 }
 const hitesh =new user("hitesh");
console.log(hitesh.createId());

class teacher extends user{
   constructor(username,email){
    super(username);
         this.email=email;
         console.log("got the email fpr");
         
   }
}

const iphone =new teacher("iphone","i@phone.com")
iphone.logMe();
iphone.createId();
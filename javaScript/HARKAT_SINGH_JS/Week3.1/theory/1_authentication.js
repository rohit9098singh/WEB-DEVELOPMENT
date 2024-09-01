/**
 *                         AUTHRNTICATION:-
 * 
 * 1)HASHING
 * 2)ENCRYPTION
 * 3)JSON WEB TOKEN
 * 4)LOCAL STORAGE
 * 
 * 
 * ==> HASHING- .is one way(hamare password koi ramdom text me convert kar deta hai)
 *              .given the output no one can find out the input
 *              .changing the input a little bit chnages the output(convetred string) drastically
 * 
 * ==>ENCRYPTION- it is two way(given string is converted into gybrish and the gibraish can be converted into proper string till i have password)
 *                .A string is encrypted using a password
 *                .string can be decryptd using the same password 
 * 
 * ==>json web tokens-it is neither encryption nor hashing (its tenchinical a didital signature)
 *                    . anuone can see the oridinal output given te signature
 *                    .signature can be verified only using the password 
 * 
 * ==> local storage-a place in your browser wheer you can store some data using thing that are stored including 
 *                   1. authentication token 
 *                   2. user language performance
 *                   3. user theme performance 
 * 
 */

/**
 *  solve make a post request at 
 post/signin body{
                   username:string
                     passsword:string
                  }
returns a json web token with username encryptred

get/users header Authentication header
 retuens a arrray of all users if user is signed in (toekn is correct) return 403 status code if not 
 */
const express=require("express");
const app=express();
app.use(express.json());

const jwt=require("jsonwebtoken");
const jwtpassword="123456";

const ALL_users=[{
    username:"harikiratsingh@gamil.com",
    password:"123321",
    name:"raman singh",
   },
   {
   username:"rohitsingh@gmail.com",
   password:"123321",
   name:"rohit",
   },
   {
    username:"payal342@gmail.com",
    password:"123321",
    name:"payal agarwal"
   }
];

function userExists(username,password){
    let userExists=false;
    for(let i=0;i<ALL_users.length;i++){
        if(ALL_users[i].username===username&&ALL_users[i].password===password){
            userExists=true;
        }
    }
    return userExists;
};

app.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (!userExists(username, password)) {
        return res.status(403).json({
            msg: "user doesn't exist in our memory database"
        });
    }
    let token=jwt.sign({username:username},jwtpassword);//jwt ko ek password chaheye encrypt or decrypt dono krne keliy screenshot is theree
    return res.json({
        token,
    });
});

app.get("/user",(req,res)=>{
    const token =req.headers.authorization;//better to use req.headers['authorization'];
    try{
        const decoded=jwt.verify(token,jwtpassword);
        const username=decoded.username;
        res.json({
            user:ALL_users.filter(function(value){
                if(value.username===username){
                    return true
                }
                else{
                    return false
                }
            })
        });
    }catch(err){
        return res.status(403).json({
            msg:"invalid token",
        });
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`The app is listening at port ${port}`);
});

/**
 *  CAN ALSO USE THE FIND FUNCTION 
 * 
// Function to check if a user exists using find
function userExists(username, password) {
    const user = ALL_users.find(
        user => user.username === username && user.password === password
    );
    return !!user; // Returns true if user exists, false otherwise
}
 */
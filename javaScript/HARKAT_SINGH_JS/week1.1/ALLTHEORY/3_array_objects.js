// write a programme  to add all the even numbers from an array

/*
  1)this is the simplest way of doing it 
              const personAge=[12,14,13,17,18,9];

              for(let i=0;i<personAge.length;i++){
                    if(personAge[i]%2==0){
                       console.log(personAge[i]);
        
                    }
                }
*/

/*
  // 2) with the help of array

                    let personArray=["Rohit","amit","riya"];
                    let genderArray=["male","male","female"];

                     for(i=0;i<personArray.length;i++){
                          if(genderArray[i]=="male"){

                           cosole.log(personArray[i]);
                         }

   
                     }

*/

/*
   // 3) with the help of objects syntax
                        let users1={
                           firstName:"rohit",
                           age:18
                        }

                        console.log(users1["firstName"]);
*/

// 4) Arrays of objects

/*
                       let allUsers=[
                            {
                              firstName:"Rohit",
                              gender:"male",
                              age:22
                            },
                            {
                              firstName:"amit",
                              gender:"male",
                              age:20
                            },
                            {
                              firstName:"Riya",
                              gender:"female",
                              age:22
                            },
                       ]
                      for (let i=0;i<allUsers.length;i++){
                        if(allUsers[i]["gender"]=="male"){
                           console.log(allUsers[i]["firstName"]);
                           
                        }
                      }
*/
/*
// 5) if i have object which contains arrays and some inside array has another array

                     let allUsers = [
                     {
                        firstName: "Rohit",
                        gender: "male",
                        metaData:{
                           age:25,
                           address:"mosaboni"
                        }
                     },
                     {
                        firstName: "amit",
                        gender: "male",
                        metaData: {
                           age: 20,
                           address: "achitnagar",
                        },
                     },
                     {
                        firstName: "Riya",
                        gender: "female",
                        metaData:{
                           age:15,
                           address:"5th cross"
                        }
                     },
                     ];
                   
                     for (let i = 0; i < allUsers.length; i++) {
                          if ( allUsers[i]["metaData"]["age"] > 18){
                             console.log(allUsers[i]["firstName"]);
                           }
                        }
                      
*/

// more complex for understanding purpose

let allUsers = [   // This is an array (defined with square brackets [])
   {   // This is an object (defined with curly braces {})
       firstName: "Rohit",   // Key-value pair inside the object
       gender: "male",       // Key-value pair inside the object
       metaData: {           // Another object, nested inside the main object
           age: 25,          
           address: "mosaboni",
           contacts: {       // Another nested object inside metaData
               email: "rohit@example.com",
               phoneNumbers: ["123-456-7890", "987-654-3210"], // Array of strings inside the object
               socialMedia: [  // Array of objects inside the contacts object
                   {
                       platform: "Twitter", // Object inside the array
                       handle: "@rohit25",
                   },
                   {
                       platform: "LinkedIn", // Another object inside the array
                       profile: "linkedin.com/in/rohit25",
                   },
               ],
           },
       },
   }, // Closing the object for Rohit

   { // Another object for Amit
       firstName: "Amit",
       gender: "male",
       metaData: {
           age: 20,
           address: "achitnagar",
           contacts: {
               email: "amit@example.com",
               phoneNumbers: ["555-555-5555"],
               socialMedia: [
                   {
                       platform: "Facebook",
                       profile: "facebook.com/amit",
                   },
               ],
           },
       },
   }, // Closing the object for Amit

   { // Another object for Riya
       firstName: "Riya",
       gender: "female",
       metaData: {
           age: 15,
           address: "5th cross",
           contacts: {
               email: "riya@example.com",
               phoneNumbers: ["111-222-3333", "444-555-6666"],
               socialMedia: [
                   {
                       platform: "Instagram",
                       handle: "@riya15",
                   },
                   {
                       platform: "Snapchat",
                       handle: "@riyasnap",
                   },
               ],
           },
       },
   }, // Closing the object for Riya
];

// Retrieving information from the nested structure
for (let i = 0; i < allUsers.length; i++) {
   let user = allUsers[i];
   
   // Check if age is greater than 18
   if (user.metaData.age > 18) {
       console.log(`Name: ${user.firstName}`);
       
       // Retrieve the first phone number
       console.log(`First Phone Number: ${user.metaData.contacts.phoneNumbers[0]}`);
       
       // Retrieve the social media platform names
       for (let j = 0; j < user.metaData.contacts.socialMedia.length; j++) {
           let social = user.metaData.contacts.socialMedia[j];
           console.log(`Platform: ${social.platform}`);
           
           // Retrieve the handle or profile
           if (social.handle) {
               console.log(`Handle: ${social.handle}`);
           } else if (social.profile) {
               console.log(`Profile: ${social.profile}`);
           }
       }
       
       console.log('---'); // Separator for better readability
   }
}

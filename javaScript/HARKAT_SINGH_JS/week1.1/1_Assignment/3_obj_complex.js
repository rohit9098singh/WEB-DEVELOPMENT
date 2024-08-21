const people = [
  {
    firstName: "Rohit ",
    gender: "male",
    metaData: {
      age: 25,
      address: "mosaboni",
      contact: {
        email: "rohit@example.com",
        phoneNumber: ["9572439721"],
        socailMedia: [
          {
            platform: "Twitter",
            handle: "@rohit25",
          },
          {
            platform: "Twitter",
            profile: "linkedin.com/in/rohit25",
          },
        ],
      },
    },
  },
  {
    firstName: "Amit",
    gender: "male",
    metaData: {
      age: 18,
      address: "soladevahalli",
      contact: {
        email: "amit@example.com",
        phoneNumber: ["8210102975"],
        socailMedia: [
          {
            platform: "facebook",
            profile: "facebook.com/amit",
          },
        ],
      },
    },
  },
  {
    firstName: "Riya",
    gender: "female",
    metaData: {
      age: 15,
      address: "5th cross",
      contacts: {
        email: "riya@example.com",
        phoneNumbers: ["111-222-3333"],
        socialMedia: [
          { platform: "Instagram", handle: "@riya15" },
          { platform: "Snapchat", handle: "@riyasnap" },
        ],
      },
    },
  },
];

// function printMaleFirstName() {
//   console.log("male first name :");

//   for (let i = 0; i < people.length; i++) {
//     // let person = people[i];
    
//     if(people[i]["gender"]==="male"){
//         console.log(people[i]["firstName"]);
        
//     }
//   }
// }

//=========================== or ===============
function printMaleFirstNames() {
    console.log("Male first names:");

    // Loop through the array of people
    for (let i = 0; i < people.length; i++) {
        let person = people[i];

        // Check if the person's gender is male
        if (person.gender === "male") {
            console.log(person.firstName); // Print the first name of the male person
        }
    }
}

// Call the function to print male first names
printMaleFirstNames();

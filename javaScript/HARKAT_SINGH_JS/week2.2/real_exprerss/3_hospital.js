/**
 * we need to create 4 routes (4 things that a hospital can do)
 * 1) GET-->user can check how many kidney the hospital has and also their health
 * 2) POST-->user can add a new kidney
 * 3)PUT-->user can replace the kidney suppose unhealthy with the healthy ones 
 * 4) DELETE--> user can remove a kidney
 * ========================== some edge case to be cheked ==========================
 * 5) what should happen if they try to delete when there are no kidneys ?
 * 6) what should happen if they try to make a kidney healthy when all are already healthy
 * 
 * note:: in put and delete both edge cases :
 *  if there are no helathy kimdey then there is no point of surgery at that point of time 
 *   that is a kind of a invalid input so should send 411 staus code stands for wrong input 
 */

const express = require("express");
const app = express();
app.use(express.json()); // since we were getting the error at the post method we are here using this express method to post the data

const users = [
  {
    name: "john",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
];

// get request me humlog input lete hai query parameter ke through jo ke url me humlog (?n=400) aise kar ke dalte hai

app.get("/", function (req, res) {
  // Retrieve John's kidneys
  const johnKidney = users[0].kidneys;

  // Find the total number of kidneys
  const numberOfKidneys = johnKidney.length;

  // Find how many kidneys are healthy
  let numberOfHealthyKidney = 0;
  for (let i = 0; i < numberOfKidneys; i++) {
    if (johnKidney[i].healthy) {
      numberOfHealthyKidney = numberOfHealthyKidney + 1;
    }
  }

  // Calculate the number of unhealthy kidneys
  const numberOfUnhealthyKidney = numberOfKidneys - numberOfHealthyKidney;

  // Send the response with kidney information
  res.json({
    totalKidneys: numberOfKidneys,
    healthyKidneys: numberOfHealthyKidney,
    unhealthyKidneys: numberOfUnhealthyKidney,
  });
});

app.put("/", function (req, res) {
  // Logic to replace an unhealthy kidney with a healthy one
  for(let i=0;i<users[0].kidneys.length;i++){
    users[0].kidneys[i].healthy=true;
  }
  res.json({});

});


// here we send the data in the body now what is body then  as many times we send the post request we will put the data hence the number of kidney count will increase eventually with every post request
app.post("/", function (req, res) {
  // Logic to add a new kidney
  console.log(req.body);
  
  const isHealthy=req.body.isHealthy; // this is saying cannot read the proprty of undefined ishelathy because onloging req.body we get undefined....
  users[0].kidneys.push({
    healthy:isHealthy,
  })
  res.json({
    msg:"done !"
  })
});  

app.delete("/", function (req, res) {
  // Check if there's at least one unhealthy kidney
  let atLeastOneUnhealthyKidney = false;

  // First loop to check for unhealthy kidneys
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      atLeastOneUnhealthyKidney = true;
      break; // Exit the loop once an unhealthy kidney is found
    }
  }

  // If no unhealthy kidney found, return status 411
  if (!atLeastOneUnhealthyKidney) {
    return res.status(411).json({ msg: "No unhealthy kidneys to remove" });
  }

  // Create a new array for healthy kidneys
  const newKidneys = [];

  // Second loop to filter and keep only healthy kidneys
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].healthy) {
      newKidneys.push(users[0].kidneys[i]);
    }
  }

  // Update the kidneys array to keep only healthy ones
  users[0].kidneys = newKidneys;

  // Send the response after updating the array
  res.json({
    msg: "Unhealthy kidneys removed successfully",
    remainingKidneys: users[0].kidneys
  });
});



app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


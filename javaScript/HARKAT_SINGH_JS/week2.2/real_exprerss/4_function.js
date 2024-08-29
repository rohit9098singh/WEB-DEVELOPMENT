const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const users = [
  {
    name: "john",
    age: 30,
    kidneys: [
      {
        healthy: true,
      },
      {
        healthy: false,
      },
    ],
  },
];

app.get("/", function (req, res) {
  const johnKidney = users[0].kidneys;
  const numberOfKidneys = johnKidney.length;

  let noOfhealthyKidneys = 0;
  for (let i = 0; i < numberOfKidneys; i++) {
    if (johnKidney[i].healthy) {
      noOfhealthyKidneys++;
    }
  }
  let unhealthyKidney = numberOfKidneys - noOfhealthyKidneys;
  res.json({
    numberOfKidneys: numberOfKidneys,
    noOfhealthyKidneys: noOfhealthyKidneys,
    unhealthyKidney: unhealthyKidney,
  });
});

app.put("/", function (req, res) {
  const hasAtleastOneUnhealthyKidney = atleastOneUnhealthyKidney();
  if (hasAtleastOneUnhealthyKidney.length > 0) {
    for (let i = 0; i < hasAtleastOneUnhealthyKidney.length; i++) {
      users[0].kidneys[hasAtleastOneUnhealthyKidney[i]].healthy = true;
    }
    res.json({
      msg: "The unhealthy kidneys have been updated.",
      kidneys: users[0].kidneys,
    });
  } else {
    res.status(411).json("Your input is wrong. There are no unhealthy kidneys.");
  }
});

app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;

  // Fixing the incorrect property path from users.kidneys to users[0].kidneys
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Kidney added successfully!",
    kidneys: users[0].kidneys,
  });
});

app.delete("/", function (req, res) {
  const hasAtleastOneUnhealthyKidney = atleastOneUnhealthyKidney();

  // Check if there are unhealthy kidneys
  if (hasAtleastOneUnhealthyKidney.length > 0) {
    // Use a simple for loop to remove unhealthy kidneys
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidneys.push(users[0].kidneys[i]);
      }
    }

    // Update the kidneys with only the healthy ones
    users[0].kidneys = newKidneys;

    res.json({
      msg: "Unhealthy kidneys removed successfully.",
      remainingKidneys: users[0].kidneys,
    });
  } else {
    res.status(411).json("No unhealthy kidneys to remove.");
  }
});

function atleastOneUnhealthyKidney() {
  let unhealthyKidneys = [];
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      unhealthyKidneys.push(i); // Collect indices of unhealthy kidneys
    }
  }
  return unhealthyKidneys; // Return indices of unhealthy kidneys
}

app.listen(port, () => {
  console.log(`The app is listening on port ${port}`);
});

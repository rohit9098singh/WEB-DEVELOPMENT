const express=require("express");
const app=express();
app.use(express.json());


app.post("/health-checkup", function (req, res) {
    // Expecting body as: { "kidneys": [1, 2] }
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("You have " + kidneyLength + " kidneys");
});

//========================= global catches which takes care of aall such error ==============
// Global error handling middleware
// util this what we are seeing is whenever our servre is getting 
// crashed it is showing all the exceptions which we dont want to revel it to the 
// user so for that reson we use the concept of 
app.use(function (err, req, res, next) {
    res.json({
        msg: "Sorry, something is up with our server. Please try again",
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});





const express = require("express");
const app = express();
const port = process.env.PORT || 2000;

// Use express's built-in JSON parser
app.use(express.json());

app.post('/backend-api/conversation', function(req, res) {
    const message = req.query.message;
    console.log(message);

    res.json({
        output: "2+2=4"
    });
});

app.listen(port, function() {
    console.log(`Example app listening on port ${port}`);
});

const express = require("express");
const app = express();

// Ensures that any data passed in the body, which could be in any format such as text or JSON,
// is parsed and available as JSON format in req.body for easy access and manipulation.
app.use(express.json());

const zod = require("zod");

const schema = zod.array(zod.number());

const schema_2 = zod.object({
    email: zod.string(),
    password: zod.string(), // Ensure consistent usage of zod.
    country: zod.literal("IN").or(zod.literal("us")), // z.literal() method is used to define a schema that allows only a specific, fixed value.
    kidneys: zod.array(zod.number()) // When you use z.literal("IN"), for example, it means the value must exactly be the string "IN". No other values are allowed.
});

app.post("/health-checkup", function (req, res) {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    if (!response.success) {
        res.status(400).json({
            msg: "input is invalid"
        });
    } else {
        res.send({
            response
        });
    }
});

app.listen(3000);
console.log("your app is listening at 3000");

/**
 * zod does nothing it gives you all the errors that occur due to invalid input for better understanding.
 */

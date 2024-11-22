require("dotenv").config();
require("./models/db"); // Import your database connection setup

const express = require("express");
const cors = require("cors");
const app = express();

const AuthRouter = require("./routers/AuthRouter");
const ProductRouter = require("./routers/ProductRouter");

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use("/auth", AuthRouter);
app.use("/product", ProductRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

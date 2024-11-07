const User = require("../db").User;
const signupSchema = require("../type").signupSchema;
const jwt=require("jsonwebtoken");
const Secret=process.env.JWT_SECRET;
const bcrypt=require("bcryptjs")

const signupController = async (req, res) => {
    const { email, firstName, lastName, password, confirmPassword, image } = req.body;
    try {

        if(!signupSchema.safeParse(req.body).success) {
            return res.status(400).json({ message: "Invalid data" });
        }
    
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "Email already exists" });
      }
  
      if (password !== confirmPassword) {
        return res.status(400).json({ message: "Passwords do not match" });
      }
      //HASING THE GIVEN PASSWORD 
      const hashedPassword =await bcrypt.hash(password,10)
      const newUser = new User({ firstName, lastName, email, password:hashedPassword, confirmPassword, image });
      await newUser.save();
      // JWT TOKEN CREATED OVER HERE 
      const token = jwt.sign({ email: newUser.email, userId: newUser._id }, Secret, { expiresIn: "24h" });

      res.status(201).json(
        { message: "logged in sucessfully", 
        token:token,
        newUser} );
    } catch (err) {
      console.error("Error during signup:", err);
      res.status(500).json({ message: "Server error" });
    }
}

module.exports = signupController;
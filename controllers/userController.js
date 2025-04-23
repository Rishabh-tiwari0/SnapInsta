const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
async function registerUser(req, res) {
  try {
    // checking if user already exists
    const { name, email, password } = req.body;
    // const userExists = await User.find({ email: email });
    // if (userExists) {
    //   return res.status(400).json({ message: "User already exists" });
    // }
    // creating new user
    const hashedPassword = bcrypt.hashSync(password, 12);

    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: error.message });
  }
}
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please provide email and password" });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "incorrect email or password" });
    }
    const isMatch = await bcrypt.compareSync(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "incorrect email or password" });
    }
    // Generate JWT token
    const payload = {
      id: user._id,
    };
    console.log("user", user);
    console.log("user", user?._id);

    const token = jwt.sign({ user: user }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({
      message: "User logged in successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
};

const mongoose = require("mongoose");

async function connectDB() {
  try {
    // database connection
    await mongoose.connect(process.env.CONNECTION_URI).then(() => {
      console.log("database connected successfully");
    });
  } catch (error) {
    console.log(error);
  }
}
module.exports = { connectDB };

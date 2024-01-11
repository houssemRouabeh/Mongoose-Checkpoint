const mongoose = require("mongoose");
const Person = require("../models/personModel");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database conected ");
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

module.exports = connectDb;

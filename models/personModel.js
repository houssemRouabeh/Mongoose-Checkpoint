const mongoose = require("mongoose");
const validator = require("validator");

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    validate: (value) => {
      return validator.isEmail(value);
    },
  },
  age: {
    type: Number,
    min: 18,
  },
  favouriteFood: {
    type: [String],
  },
});

const personModel = mongoose.model("User", personSchema);

module.exports = personModel;

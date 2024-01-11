const Person = require("../models/personModel");

const person = new Person({
  name: "     Houssem Rouabeh          ",
  email: "houssem@gmail.com",
  age: 34,
  favouriteFood: ["Pizza", "snacks"],
});

const saveOne = async () => {
  try {
    const savedPerson = await person.save();
    console.log(`Data added to the database ${savedPerson}`);
  } catch (err) {
    console.error(err);
  }
};

module.exports = saveOne;

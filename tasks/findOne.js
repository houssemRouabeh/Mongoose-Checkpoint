const Person = require("../models/personModel");

const findOne = async (food) => {
  await Person.find({
    favouriteFood: food, // search query
  })
    .then((doc) => {
      console.log(doc);
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = findOne;

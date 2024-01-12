const Person = require("../models/personModel");

const chainedQuery = async (favouriteFood) => {
  await Person.find({
    favouriteFood: favouriteFood, // search query
  })
    .sort({ name: 1 })
    .limit(2)
    .select({ age: false })
    .exec()
    .then((doc) => {
      console.log(doc);
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = chainedQuery;

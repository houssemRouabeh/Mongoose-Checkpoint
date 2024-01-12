const Person = require("../models/personModel");

const findPersons = async (name) => {
  await Person.find({
    name: { $regex: new RegExp(name, "i") }, // search query
  })
    .then((doc) => {
      console.log(doc);
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = findPersons;

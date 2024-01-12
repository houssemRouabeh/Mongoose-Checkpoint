const Person = require("../models/personModel");

const deleteManyPersons = async (personName) => {
  await Person.deleteMany({
    name: { $regex: new RegExp(personName, "i") },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = deleteManyPersons;

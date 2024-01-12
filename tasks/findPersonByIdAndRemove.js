const Person = require("../models/personModel");

const findPersonByIdAndRemove = async (personId) => {
  await Person.findByIdAndDelete(personId)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = findPersonByIdAndRemove;

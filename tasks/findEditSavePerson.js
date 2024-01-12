const Person = require("../models/personModel");
const findPersonById = require("./findPersonById");

const findEditSavePerson = async (personId, newFood) => {
  await findPersonById(personId).then((data) => {
    data.favouriteFood.push(newFood);
    data.save();
    console.log(data);
  });
};

module.exports = findEditSavePerson;

const Person = require("../models/personModel");
const people = require("../data");

const createMany = async () => {
  try {
    const savedPersons = await Person.create(people);
    console.log(`Data added to the database : ${savedPersons}`);
  } catch (err) {
    console.error(err);
  }
};

module.exports = createMany;

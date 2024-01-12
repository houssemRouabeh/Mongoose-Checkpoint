const Person = require("../models/personModel");

const findByNameAndUpdate = async (personName, newAge) => {
  try {
    const data = await Person.findOneAndUpdate(
      {
        name: personName, // search query
      },
      {
        age: newAge,
      },
      {
        new: true,
      }
    );
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

module.exports = findByNameAndUpdate;

const Person = require("../models/personModel");

const findPersonById = async (personId) => {
  try {
    const data = await Person.findById({
      _id: personId, // search query
    });
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

module.exports = findPersonById;

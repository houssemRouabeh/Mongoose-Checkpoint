const Person = require("../models/personModel");

const people = [
  new Person({
    name: "John Doe",
    email: "john.doe@example.com",
    age: 28,
    favouriteFood: ["Burger", "Ice Cream"],
  }),
  new Person({
    name: "Alice Smith",
    email: "alice.smith@example.com",
    age: 25,
    favouriteFood: ["Sushi", "Chocolate"],
  }),
  new Person({
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    age: 40,
    favouriteFood: ["Steak", "Pasta"],
  }),
  new Person({
    name: "Emily Williams",
    email: "emily.williams@example.com",
    age: 32,
    favouriteFood: ["Salad", "Smoothie"],
  }),
  new Person({
    name: "Bob Doe",
    email: "Bob.doe@example.com",
    age: 54,
    favouriteFood: ["Burger", "Smoothie"],
  }),
  new Person({
    name: "Bob smart",
    email: "bob.smart@example.com",
    age: 18,
    favouriteFood: ["Chocolate", "Ice Cream"],
  }),
];

const createMany = async () => {
  try {
    const savedPerson = await Person.create(people);
    console.log(`Data added to the database ${savedPerson}`);
  } catch (err) {
    console.error(err);
  }
};

module.exports = createMany;

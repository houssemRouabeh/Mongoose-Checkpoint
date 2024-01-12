const Person = require("./models/personModel");
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
    favouriteFood: ["Sushi", "Chocolate", "Burritos"],
  }),
  new Person({
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    age: 40,
    favouriteFood: ["Steak", "Pasta"],
  }),
  new Person({
    name: "Mary Doe",
    email: "Mary.doe@example.com",
    age: 28,
    favouriteFood: ["Burger", "Sushi", "Burritos"],
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
    name: "Bob Smart",
    email: "bob.smart@example.com",
    age: 18,
    favouriteFood: ["Chocolate", "Ice Cream"],
  }),

  new Person({
    name: "Lucy Brown",
    email: "lucy.brown@example.com",
    age: 35,
    favouriteFood: ["Pizza", "Fries"],
  }),
  new Person({
    name: "Mary stone",
    email: "mary.stone@example.com",
    age: 29,
    favouriteFood: ["Salad", "Pasta"],
  }),
];

module.exports = people;

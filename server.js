const express = require("express");
const saveOne = require("./tasks/saveOne");
const connectDb = require("./config/dbConnect");
const createMany = require("./tasks/createMany");
const findOne = require("./tasks/findOne");
const findPersons = require("./tasks/findPersons");
const findPersonById = require("./tasks/findPersonById");
const findEditSavePerson = require("./tasks/findEditSavePerson");
const findByNameAndUpdate = require("./tasks/findByNameAndUpdate");
const findPersonByIdAndRemove = require("./tasks/findPersonByIdAndRemove");
const { deleteMany } = require("./models/personModel");
const deleteManyPersons = require("./tasks/deleteManyPersons");
const chainedQuery = require("./tasks/chainedQuery");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
//Connexion to database
connectDb();

//Save one person
//saveOne();

//Save many persons
//createMany();

//Find persons by name
//findPersons("bob");

//Find one person by favourite food
//findOne("Burger");

//Find one person by ID
//findPersonById("65a0178cd72053cd672a5281");

//Find person By Id, update favourite food and save to database
//findEditSavePerson("65a0178cd72053cd672a527f", "hamburger");

//Find Person by name and update age
//findByNameAndUpdate("Bob smart", 20);

//Find a Person by Id and remove from database
//findPersonByIdAndRemove("65a106835a00548461d175f5");

//Delete many person by name
//deleteManyPersons("Mary");

//Find people by food sort and limit and hide result
chainedQuery("Burritos");

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

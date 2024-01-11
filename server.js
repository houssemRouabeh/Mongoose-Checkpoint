const express = require("express");
const saveOne = require("./tasks/saveOne");
const connectDb = require("./config/dbConnect");
const createMany = require("./tasks/createMany");
const findOne = require("./tasks/findOne");
const findPersons = require("./tasks/findPersons");
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

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});

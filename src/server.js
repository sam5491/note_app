// import express
const express = require("express");

// import helmet
const helmet = require("helmet")

// import cors
const cors = require("cors");
const noteRoute = require("./routes/notesRoutes");
const { sequelize } = require("./database/models");


// import dotenv
require("dotenv").config();

// initializing/invoking/calling express object/function
const app = express();

// use body parser from expres
app.use(express.json())

// use cors
app.use(cors());
// use hemlmet
app.use(helmet())

// root endpoint
// app which is the invocation of express() has
// a properties of all methods (get, post, put/patch and delete)
app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Welcome to the Note App Project APIs",
  });
});

// all routes
app.use("/notes", noteRoute);

// not found
app.get("*", (req, res) => {
  return res.status(404).json({
    message: "Not found",
  });
});

// define your port and host
const port = process.env.PORT;
const host = process.env.HOST;
//const {PORT,HOST}=process.env
//CONNECT TO DB
const dbconnection = async () =>{
  try {
await sequelize.authenticate();
console.log("DB connected successfully");
  
  } catch (error) {
    console.log(error)
  }
}

// listening to server
app.listen(port,async () => {
  await dbconnection();
  console.log(`Server running at ${host}:${port}`);
 

});
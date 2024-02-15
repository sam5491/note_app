//import  express
const express=require('express');
//const { notes, hotels } = require('../utils');
const { getNotesAndHotels, getOneNotesAndHotels } = require('../controllers/notesController');
//define router
const router=express.Router()

//get all notes and hotels
router.get("/",getNotesAndHotels)
//get one notes and hotels
router.get("/:id",getOneNotesAndHotels)
//Create notes and hotels
//router.post("/",addNotesAndHotels)
//export the router
module.exports = router
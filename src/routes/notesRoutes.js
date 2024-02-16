// import express
const express = require('express');
const {
  getNotes,
  addNote,
  delNote,
  getSingleNote,
} = require("../controllers/notesController");

// define router // creating an instance of Router 
const router = express.Router()

// get notes route
router.get("/" , getNotes )

// get one note
router.get("/:noteId", getSingleNote)

// add note
router.post("/", addNote)
// delete one note
router.delete("/:noteId",delNote)
// export the router
module.exports = router 
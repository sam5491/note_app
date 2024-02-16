const { notes } = require("../utils");

// Fetching all notes
const getNotes = (req, res) => {
  return res.status(200).json({
    data: notes,
  
  });
};

// fething a single note
const getSingleNote = (req, res) => {
  // get our note id
  const noteId = parseInt(req.params.noteId)

  // Use the noteId to find a note with that id
  const singleNote =  notes.find((note) => {
    return note.id === noteId
  })

if (!singleNote) { // if it is undefined
  return res.status(404).json({
    message: `Note with id: ${noteId} was not found`
  })
} 

res.status(200).json({
  data: singleNote,
});
}

const addNote = (req, res) => {
  const data = req.body 
  // functionalities of adding
  const newNote = {id: notes.length + 1, ...data}// ...data, ...body => spread operator only works on objects

  notes.push(newNote);

  res.status(201).json({
    message: "Note created successfully"
  })
}
//DELETE 
const delNote = (req, res) => {
  // get id from the params
  const noteId   =parseInt(req.params.noteId) //<=> const { noteId } = parseInt(req.params)
//console.log( noteId+"noteId"+ typeof(noteId))
const singleNote =  notes.find((note) => {
  return note.id === noteId
})

if (!singleNote) { // if it is undefined
return res.status(404).json({
  message: `Note with id: ${noteId} was not found`
})
}
notes.splice(noteId)
res.status(201).json({
  message: `ID: ${noteId} was deleted`
})
}
module.exports = { getNotes, getSingleNote, addNote,delNote };
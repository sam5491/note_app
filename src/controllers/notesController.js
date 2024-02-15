const { notes, hotels } = require("../utils");
//GET ALL NOTES
const getNotesAndHotels=(req,res) => {
    return res.status(200).json({
            Notes: notes,
            Hotels: hotels
        }
    )
};
//GET ONE NOTE
const getOneNotesAndHotels=(req,res) => {
    const id=parseInt(req.params.id) 
    const singleid=notes.find((note) =>{
        return note.id===id
    })
    if(!singleid){
        return res.status(404).json({
            message:`Note with id:${id} was not found`
        })
    }
    // return res.status(200).json({
    //         Notes: notes,
    //         Hotels: hotels
    //     }
    // )
};

module.exports={getNotesAndHotels,getOneNotesAndHotels}
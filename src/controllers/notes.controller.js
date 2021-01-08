const notesController = {};
const Note= require('../models/Note');

notesController.renderNoteForm = (req, res) => {
  res.render('notes/new-note');
};
notesController.createNewNote = async (req, res) => {    
   // const  {title, description} = req.body;
    const newNote = new Note({title: req.body.title, description: req.body.description});
    await newNote.save();
    res.send("New note");
};
notesController.renderAllNotes = async (req, res) => {
  const notesResult = await Note.find().lean();
  res.render('notes/all-notes', {notesResult})
};
notesController.renderEditForm = (req, res) => {
  res.send("Render edit form");
};
notesController.updateNote = (req, res) => {
  res.send("Update Note");
};
notesController.deleteNote = (req, res) => {
  res.send("Delete Note");
};

module.exports = notesController;

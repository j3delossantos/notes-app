const notesController = {};
const Note = require("../models/Note");

notesController.renderNoteForm = (req, res) => {
  res.render("notes/new-note");
};
notesController.createNewNote = async (req, res) => {
  // const  {title, description} = req.body;
  const newNote = new Note({
    title: req.body.title,
    description: req.body.description,
  });
  await newNote.save();
  res.redirect("/notes");
};
notesController.renderAllNotes = async (req, res) => {
  const notesResult = await Note.find().lean();
  res.render("notes/all-notes", { notesResult });
};
notesController.renderEditForm = async (req, res) => {
    const notesResult = await Note.findById(req.params.id).lean();    
    res.render('notes/edit-note', {notesResult});
};
notesController.updateNote = (req, res) => {
    console.log(req.body);
  res.send("Update Note");
};
notesController.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.redirect("/notes");
};

module.exports = notesController;

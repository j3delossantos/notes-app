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
  req.flash("success_msg", "Note Added Succesfully");
  res.redirect("/notes");
};
notesController.renderAllNotes = async (req, res) => {
  const notesResult = await Note.find().lean();
  res.render("notes/all-notes", { notesResult });
};
notesController.renderEditForm = async (req, res) => {
  const notesResult = await Note.findById(req.params.id).lean();
  res.render("notes/edit-note", { notesResult });
};
notesController.updateNote = async (req, res) => {
  const { title, description } = req.body;
  await Note.findByIdAndUpdate(req.params.id, { title, description });
  req.flash("success_msg", "Note Updated Succesfully");
  res.redirect("/notes");
};
notesController.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Note Deletted succesfully");
  res.redirect("/notes");
};

module.exports = notesController;

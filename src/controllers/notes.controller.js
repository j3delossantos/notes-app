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
    user: req.user.id,
    active: true,
  });
  await newNote.save();
  req.flash("success_msg", "Note Added Succesfully");
  res.redirect("/notes");
};
notesController.renderAllNotes = async (req, res) => {
  const notesResult = await Note.find({ user: req.user.id })
    .sort({ createdAt: "desc" })
    .lean();
  res.render("notes/all-notes", { notesResult });
};
notesController.renderEditForm = async (req, res) => {
  const notesResult = await Note.findById(req.params.id).lean();
  if (notesResult.user != req.user.id) {
    req.flash("error", "Not Authorized");
    return res.redirect("/notes");
  }
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

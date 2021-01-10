const { Router } = require("express");
const {
  renderNoteForm,
  createNewNote,
  renderAllNotes,
  renderEditForm,
  updateNote,
  deleteNote,
} = require("../controllers/notes.controller");

const {isAuthenticated}= require('../helpers/sessionVerifyer');
const router = Router();

//New note
router.get('/notes/add',isAuthenticated, renderNoteForm);
router.post("/notes/new-note",isAuthenticated, createNewNote);

//List all notes
router.get("/notes",isAuthenticated, renderAllNotes);

//Edit Note
router.get("/notes/edit/:id",isAuthenticated, renderEditForm);

router.put("/notes/edit/:id",isAuthenticated, updateNote);

//Delete Note
router.delete("/notes/delete/:id",isAuthenticated, deleteNote);

module.exports = router;

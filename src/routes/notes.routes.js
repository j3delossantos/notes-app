const { Router } = require("express");
const {
  renderNoteForm,
  createNewNote,
  renderAllNotes,
  renderEditForm,
  updateNote,
  deleteNote,
} = require("../controllers/notes.controller");
const router = Router();

//New note
router.get('/notes/add', renderNoteForm);
router.post("/notes/new-note", createNewNote);

//List all notes
router.get("/notes", renderAllNotes);

//Edit Note
router.get("/notes/edit/:id", renderEditForm);

router.put("/notes/edit/:id", updateNote);

//Delete Note
router.delete("/notes/delete/:id", deleteNote);

module.exports = router;

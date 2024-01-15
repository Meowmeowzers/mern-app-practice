const express = require("express");
const router = express.Router();
const {getNotes} = require("../controllers/notesController");

router.get("/", getNotes);
router.post("/", createNote);

module.exports = router;
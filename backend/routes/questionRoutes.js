const express = require("express");
const { getQuestions, addQuestion } = require("../controllers/questionController");

const router = express.Router();

router.get("/", getQuestions);  // Fetch all questions
router.post("/", addQuestion);  // Add a new question

module.exports = router;

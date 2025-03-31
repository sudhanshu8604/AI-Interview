const Question = require("../models/Question");

// Get all interview questions
const getQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: "❌ Error fetching questions" });
  }
};

// Add a new question
const addQuestion = async (req, res) => {
  try {
    const { questionText, category, difficulty } = req.body;
    const newQuestion = new Question({ questionText, category, difficulty });
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(500).json({ message: "❌ Error adding question" });
  }
};

module.exports = { getQuestions, addQuestion };

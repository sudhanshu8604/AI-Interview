const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  category: { type: String, required: true }, // e.g., "Technical", "HR"
  difficulty: { type: String, enum: ["Easy", "Medium", "Hard"], required: true },
});

const Question = mongoose.model("Question", questionSchema);
module.exports = Question;

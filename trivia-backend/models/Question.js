const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema(
  {
    categoryID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    difficulty: {
      type: String,
      required: true,
      enum: ["easy", "medium", "hard"],
    },
    questionText: {
      type: String,
      required: true,
    },
    correctAnswer: {
      type: String,
      required: true,
    },
    wrongAnswers: {
      type: [String],
      required: true,
      validate: [arrayLimit, "{PATH} exceeds the limit of 3"],
    },
    explanation: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

function arrayLimit(val) {
  return val.length <= 3;
}

const Question = mongoose.model("Question", QuestionSchema);
module.exports = Question;

const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const Question = require("../models/Question");

router.post("/create", authMiddleware, async (req, res) => {
  try {
    const {
      categoryID,
      difficulty,
      questionText,
      correctAnswer,
      wrongAnswers,
      explanantion,
    } = req.body;

    const allProps = [
      categoryID,
      difficulty,
      questionText,
      correctAnswer,
      wrongAnswers,
    ];

    for (item in allProps) {
      if (!item) {
        return res.status(400).json({ message: `Missing prop value ${item}` });
      }
    }

    const newQuestion = new Question({
      categoryID,
      difficulty,
      questionText,
      correctAnswer,
      wrongAnswers,
      explanantion,
    });

    res.status(201).json({
      message: "Question registered successfully",
      question: newQuestion,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.put("/edit", async (req, res) => {
  // Edit question
});

router.delete("/delete", async (req, res) => {
  // Delete  question
});

module.exports = router;

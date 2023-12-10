const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const Question = require("../models/Question");

router.get("/generate", authMiddleware, async (req, res) => {
  const { category, length } = req.body;
  try {
    const questions = await Question.aggregate([
      { $match: { categoryID: mongoose.ObjectId(category) } },
      { $sample: { size: parseInt(length) } },
    ]);

    res.status(201).json({
      message: "Question registered successfully",
      quiz: questions,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

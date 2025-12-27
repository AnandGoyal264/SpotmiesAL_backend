import express from "express";
import axios from "axios";
import {
  searchSnippets,
  addSnippet,
  rateSnippet
} from "../controllers/snippetController.js";

const router = express.Router();

// 🔍 Search Snippets
router.get("/search", searchSnippets);

// ➕ Add Snippet
router.post("/", addSnippet);

// ⭐ Rate Snippet
router.post("/:id/rate", rateSnippet);


// ================================
//  GEMINI MODEL TEST ROUTE
// ================================
// This helps us see which Gemini models YOUR API key supports
router.get("/models", async (req, res) => {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return res.status(400).json({ message: "GEMINI_API_KEY missing" });
    }

    const response = await axios.get(
      `https://generativelanguage.googleapis.com/v1/models?key=${process.env.GEMINI_API_KEY}`
    );

    res.json(response.data);
  } catch (err) {
    console.log("MODEL FETCH ERROR:", err?.response?.data || err.message);
    res.status(500).json(err?.response?.data || err.message);
  }
});


export default router;

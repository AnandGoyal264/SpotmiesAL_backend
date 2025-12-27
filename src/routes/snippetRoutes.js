import express from "express";
import {
  searchSnippets,
  addSnippet,
  rateSnippet
} from "../controllers/snippetController.js";

const router = express.Router();

router.get("/search", searchSnippets);
router.post("/", addSnippet);
router.post("/:id/rate", rateSnippet);

export default router;

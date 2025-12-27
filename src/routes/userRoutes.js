import express from "express";
import {
  addFavorite,
  getFavorites
} from "../controllers/userController.js";

const router = express.Router();

router.post("/:userId/favorite/:snippetId", addFavorite);
router.get("/:userId/favorites", getFavorites);

export default router;

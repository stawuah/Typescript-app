import express from "express";
const router = express.Router();

import {
  getNotes,
  createNotes,
  getSingleNote,
  updateNote,
  deleteNote,
} from "../controller/noteController";

router.get("/", getNotes);
router.post("/create", createNotes);
router.get("/:id", getSingleNote);
router.patch("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;

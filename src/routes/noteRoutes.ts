import express from "express";
const router = express.Router();

import {
  getNotes,
  createNotes,
  getSingleNote,
  updateNote,
} from "../controller/noteController";

router.get("/", getNotes);
router.post("/create", createNotes);
router.get("/:id", getSingleNote);
router.patch("/:id", updateNote);

export default router;

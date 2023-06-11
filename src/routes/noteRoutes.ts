import express from "express";
const router = express.Router();

import {
  getNotes,
  createNotes,
  getSingleNote,
} from "../controller/noteController";

router.get("/", getNotes);
router.post("/", createNotes);
router.get("/:id", getSingleNote);

export default router;

import express from "express";
const router = express.Router();

import { getNotes } from "../controller/noteController";

router.get("/", getNotes);

export default router;

import "dotenv/config";
import NoteModel from "./model/note";
import express from "express";
const app = express();

app.get("/", async (req, res) => {
  const notes = await NoteModel.find().exec();

  res.status(200).json({ notes });
});

export default app;

import "dotenv/config";
import NoteModel from "./model/note";
import express from "express";
const app = express();

app.get("/", async (req, res) => {
  try {
    throw Error("Bazinga");
    const notes = await NoteModel.find().exec();

    res.status(200).json({ notes });
  } catch (error) {
    console.error(error);
    let errorMassage = " An unknown error has occured ";

    if (error instanceof Error) errorMassage = error.message;
    res.status(500).json({ error: errorMassage });
  }
});

export default app;

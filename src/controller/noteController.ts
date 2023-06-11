import { RequestHandler } from "express";
import NoteModel from "../model/note";

export const getNotes: RequestHandler = async (req, res, next) => {
  try {
    const notes = await NoteModel.find().exec();
    res.status(200).json({ notes });
  } catch (error) {
    next(error);
  }
};

export const createNotes: RequestHandler = async (req, res, next) => {
  try {
    const { title, text } = req.body;

    if (!title || !text) {
      return res.status(400).json({ error: "Title and text are required" });
    }

    const newNote = new NoteModel({
      title: title,
      text: text,
    });

    await newNote.save();

    res.status(201).json({ newNote });
  } catch (error) {
    next(error);
  }
};

export const getSingleNote: RequestHandler = async (req, res, next) => {
  const noteId = req.params.id;
  try {
    const notes = await NoteModel.findById(noteId).exec();
    res.status(200).json({ notes });
  } catch (error) {
    next(error);
  }
};
export default { getNotes, createNotes, getSingleNote };

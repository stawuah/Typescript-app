/* eslint-disable @typescript-eslint/no-unused-vars */
import { RequestHandler } from "express";
import createHttpError from "http-errors";
import NoteModel from "../model/note";
import mongoose from "mongoose";

export const getNotes: RequestHandler = async (req, res, next) => {
  try {
    const notes = await NoteModel.find().exec();

    if (!notes) {
      throw createHttpError(403, "cannot find note");
    }

    res.status(200).json({ notes });
  } catch (error) {
    next(error);
  }
};
interface CreateNotesBody {
  title?: string;
  text?: string;
}

export const createNotes: RequestHandler<
  unknown,
  unknown,
  CreateNotesBody,
  unknown
> = async (req, res, next) => {
  try {
    const { title, text } = req.body;

    if (!title || !text) {
      throw createHttpError(400, "Title and text are required");
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
    if (!mongoose.isValidObjectId(noteId)) {
      throw createHttpError(400, "Invalid not id");
    }
    const notes = await NoteModel.findById(noteId).exec();
    res.status(200).json({ notes });
  } catch (error) {
    next(error);
  }
};

interface UpdateNotesParams {
  id: string;
}
interface UpdateNotesBody {
  title?: string;
  text?: string;
}

export const updateNote: RequestHandler<
  UpdateNotesParams,
  unknown,
  UpdateNotesBody,
  unknown
> = async (req, res, next) => {
  const noteId = req.params.id;
  const update: UpdateNotesBody = req.body; // Use UpdateNotesBody interface

  try {
    const updatedNote = await NoteModel.findByIdAndUpdate(noteId, update, {
      new: true,
    }).exec();
    res.status(201).json(updatedNote);
  } catch (error) {
    next(error);
  }
};

export const deleteNote: RequestHandler = async (req, res, next) => {
  const noteId = req.params.id;

  try {
    if (!mongoose.isValidObjectId(noteId)) {
      throw createHttpError(400, "Invalid not id");
    }

    if (!noteId) {
      throw createHttpError(404, "note not found");
    }

    const note = await NoteModel.findByIdAndDelete(noteId).exec();

    res.status(204).json({ note });
  } catch (error) {
    next(error);
  }
};

export default { getNotes, createNotes, getSingleNote, updateNote, deleteNote };

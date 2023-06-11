/* eslint-disable @typescript-eslint/no-unused-vars */
import "dotenv/config";
import NoteModel from "./model/note";
import express, { NextFunction, Request, Response } from "express";
const app = express();

app.get("/", async (_req, res, next) => {
  try {
    //throw Error("Bazinga");
    const notes = await NoteModel.find().exec();

    res.status(200).json({ notes });
  } catch (error) {
    next(error);
  }
});

app.use((req, res, next) => {
  next(Error("Endpoint not found"));
});

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  let errorMassage = " An unknown error has occured ";
  if (error instanceof Error) errorMassage = error.message;
  res.status(404).json({ error: errorMassage });
});

export default app;

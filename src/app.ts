/* eslint-disable @typescript-eslint/no-unused-vars */
import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import noteRoutes from "./routes/noteRoutes";

const app = express();
app.use("/api/notes", noteRoutes);

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

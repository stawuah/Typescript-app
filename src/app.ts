/* eslint-disable @typescript-eslint/no-unused-vars */
import "dotenv/config";
import morgan from "morgan";
import express, { NextFunction, Request, Response } from "express";
import createHttpError, { isHttpError } from "http-errors";
import noteRoutes from "./routes/noteRoutes";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use("/api/notes", noteRoutes);

app.use("/api/notes", noteRoutes);

app.use("/api/notes/change", noteRoutes);

app.use("/api/notes/delete", noteRoutes);

app.use((req, res, next) => {
  next(createHttpError(404, "Endpoint not found"));
});

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  let errorMassage = " An unknown error has occured ";
  let statusCode = 500;
  if (isHttpError(error)) {
    (statusCode = error.status), (errorMassage = error.message);
  }
  res.status(statusCode).json({ error: errorMassage });
});

export default app;

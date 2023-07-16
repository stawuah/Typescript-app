import mongoose, { Schema, Document } from "mongoose";

interface IForgotPassword extends Document {
  name: string;
  email: string;
  token?: string;
}

const ForgotPasswordSchema: Schema<IForgotPassword> =
  new Schema<IForgotPassword>({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    token: {
      type: String,
    },
  });

export default mongoose.model<IForgotPassword>(
  "ForgotSchema",
  ForgotPasswordSchema
);

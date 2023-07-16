import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
  image: {
    public_id: string[];
    url: string[];
  };
  password: string;
  forgotPassword: mongoose.Schema.Types.ObjectId;
}

const UserSchema: Schema<IUser> = new Schema<IUser>({
  name: {
    type: String,
    required: [true, "Dear customer please add a name"],
  },
  email: {
    type: String,
    required: [true, "Dear customer please add a name"],
    unique: true,
    lowercase: true,
    trim: true,
    match: [
      /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,
      "Please enter a valid email address",
    ],
  },
  image: {
    public_id: {
      type: [String],
    },
    url: {
      type: [String],
    },
  },
  password: {
    type: String,
    required: [true, "Dear customer please use your usual email password"],
  },
  forgotPassword: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ForgotSchema",
  },
});

const User = mongoose.model<IUser>("User", UserSchema);

export default User;

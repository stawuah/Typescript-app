/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ObjectId = mongoose.Types.ObjectId;

const bookingSchema = new Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  property: {
    type: mongoose.Types.ObjectId,
    ref: "Property",
    required: true,
  },

  checkIn: {
    type: Date,
    required: true,
  },
  checkOut: {
    type: Date,
    required: true,
  },
  guests: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "confirmed", "cancelled"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Booking", bookingSchema);

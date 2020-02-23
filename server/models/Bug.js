import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Bug = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    closed: { type: Boolean, default: false },
    reportedBy: { type: String, required: true },
    closedDate: { type: Date, default: null }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Bug;

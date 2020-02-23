import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const Note = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String },
    reportedBy: { type: String, required: true },
    bug: { type: ObjectId, ref: "Bug", required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Note;

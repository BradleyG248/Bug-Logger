import mongoose from "mongoose";
import Note from "../models/Note";

const _repository = mongoose.model("Note", Note);

class NoteService {
  async getNotes(id) {
    return await _repository.find({ bug: id });
  }
  async getAll() {
    return await _repository.find({})
      .populate("bug");
  }
  async findById(id) {
    return await _repository.findById(id)
  }
  async edit(id, update) {
    return await _repository.findByIdAndUpdate(id, update, { new: true })
  }
  async create(body) {
    return await _repository.create(body)
  }
  async delete(id) {
    return await _repository.findByIdAndDelete(id);
  }
}

const noteService = new NoteService();
export default noteService;

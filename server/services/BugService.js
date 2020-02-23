import mongoose from "mongoose";
import Bug from "../models/Bug";

const _repository = mongoose.model("Bug", Bug);

class BugService {
  async getAll() {
    return await _repository.find({});
  }
  async findById(id) {
    return await _repository.findById(id)
  }
  async edit(id, update) {
    let bug = await _repository.findById(id);
    // @ts-ignore
    if (bug.closed) {
      return "This bug is closed!"
    }
    return await _repository.findByIdAndUpdate(id, update, { new: true })
  }
  async create(body) {
    return await _repository.create(body)
  }
  async close(id) {
    let date = new Date();
    let bug = {
      closed: true,
      closedDate: `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`
    }
    //I don't want to code out the if statements to make the date more official, so here it is.
    return await _repository.findByIdAndUpdate(id, bug, { new: true });
  }
}

const bugService = new BugService();
export default bugService;
import mongoose from "mongoose";
import Bug from "../models/Bug";

const _repository = mongoose.model("Bug", Bug);

class BugService {
  async getAll() {
    return await _repository.find({});
  }
  async findById(id) {
    return await _repository.find({ id })
  }
  async edit(id, update) {
    return await _repository.findByIdAndUpdate(id, update, { new: true })
  }
  async create(body) {
    return await _repository.create(body)
  }
  async close(id) {
    let bug = await _repository.find({ id })
    let date = new Date();
    bug["closed"] = true;
    //I don't want to code out the if statements to make the date more official, so here it is.
    bug["closedDate"] = `${date.getMonth}/${date.getDay}/${date.getFullYear}`
    return await _repository.findByIdAndUpdate(id, bug);
  }
}

const bugService = new BugService();
export default bugService;

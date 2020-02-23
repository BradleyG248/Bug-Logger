import express from "express";
import noteService from "../services/NoteService";

export default class NoteController {
  constructor() {
    this.router = express
      .Router()
      //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
      .get("", this.getAll)
      .get("/:id", this.getById)
      .put("/:id", this.edit)
      .post("", this.create)
      .delete("/:id", this.delete)
  }

  async getAll(req, res, next) {
    try {
      let data = await noteService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      await noteService.delete(req.params.id)
      res.send("deleted")
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      let data = await noteService.create(req.body)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      let data = await noteService.edit(req.params.id, req.body)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async getById(req, res, next) {
    try {
      let data = await noteService.findById(req.params.id)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
}

import service from "../services/todoService";
import { handleErrors } from "../errorHandlers/ErrorHandlers";

const controller = {};

//User Create
controller.create = async (req, res) => {
  try {
    //Create new todo
    const todo = await service.create(req._id,req.body);

    res.status(201).json(todo);
  } catch (e) {
    handleErrors(e, res);
  }
};


//Get Todo details
controller.get = async (req, res) => {
  try {
    //Get Todo
    const todo = await service.getTodo(req.params.id);

    res.status(201).json(todo);
  } catch (e) {
    handleErrors(e, res);
  }
};


//Get ALL Todo details
controller.getAll = async (req, res) => {
  try {
    //Get Todo
    const todo = await service.getAllTodo(req._id);

    res.status(201).json(todo);
  } catch (e) {
    handleErrors(e, res);
  }
};

//UPDATE TODO Details
controller.update = async (req, res) => {
  try {
    const todo = await service.updateTodo(req.params.id, req.body);

    res.status(201).json(todo);
  } catch (e) {
    handleErrors(e, res);
  }
};


//Delete the TODO 
controller.delete = async (req, res) => {
  try {
    const message = await service.deleteTodo(req.params.id);

    res.status(200).json(message);
  } catch (e) {
    handleErrors(e, res);
  }
};


export default controller;

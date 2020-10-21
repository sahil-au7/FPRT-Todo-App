import Todo from "../models/todoModel";

const services = {};

//==========================================Create TODO Service==========================================
services.create = (_id,data) =>
  new Promise(async (res, rej) => {
    try {

      const todo = await new Todo({user:_id,...data
      }).save();

      res({
        todo
      });
    } catch (e) {
      console.log(e);
      rej(e);
    }
  });

//==========================================Get TODO Service==========================================
services.getTodo = (_id) =>
  new Promise(async (res, rej) => {
    try {
      const todo = await Todo.findById(_id);

      res(todo);
    } catch (e) {
      console.log(e);
      rej(e);
    }
  });


//==========================================Get ALl TODO Details Service==========================================
services.getAllTodo = (_id) =>
  new Promise(async (res, rej) => {
    try {
        const todo = await Todo.find({ user:_id });

      res(todo);
    } catch (e) {
      console.log(e);
      rej(e);
    }
  });

//==========================================Update TODO Detail Service==========================================
services.updateTodo = (_id, data) =>
  new Promise(async (res, rej) => {
    try {

      const todo = await Todo.findByIdAndUpdate(
        _id,
        {
          ...data
        },
        {
          new: true,
        }
      );

      res(todo);
    } catch (e) {
      console.log(e);
      rej(e);
    }
  });

  
//==========================================DELETE TODO Service==========================================
services.deleteTodo = (_id) =>
  new Promise(async (res, rej) => {
    try {
      const todo = await Todo.findOneAndDelete(_id);

      res(todo);
    } catch (e) {
      console.log(e);
      rej(e);
    }
  });



export default services;

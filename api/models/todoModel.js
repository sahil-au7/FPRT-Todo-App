import { Schema, model } from "mongoose";

const todoModel = new Schema({
  todo: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "todo",
    enums:["todo","progress","complete"]
  },
  user:{
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});


export default new model("todo", todoModel);

import { Schema, model } from "mongoose";

const userModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  login_at: {
    type: Date,
    default: Date.now(),
  },
  isLoggedIn: {
    type: Boolean,
    default: false,
  },
});


export default new model("user", userModel);

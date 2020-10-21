//Validators File it will contain todo validators

import { check, body } from "express-validator";

const validator = {};

//==========================================Signup Validator==========================================
validator.create = [
  //Check todo
  check("todo", "Invalid Name").isString(),

  
];
//==========================================Update Validator==========================================

validator.update = [
  //These fields todo can't update
  check("_id", "Cannot update id").isEmpty(),

  check("created_at", "Cannot update created_at").isEmpty(),

  //Check name
  check("todo", "Invalid Name").isString(),
];

export default validator;

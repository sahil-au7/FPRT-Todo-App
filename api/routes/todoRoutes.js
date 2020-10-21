/**
 * This file contains all the todo routes
 */
import express from "express";
import controller from "../controller/todoController";
import validator from "../validators/todoValidators";
import { handleValidationErrors } from "../errorHandlers/ErrorHandlers";
import authorize from "../middleware/auth";

const router = express.Router();

//POST Todo create
router.post(
  "/",
    validator.create,
  authorize,
  handleValidationErrors,
  controller.create
);


//GET Todo details
router.get("/:id", authorize, controller.get);


//GET Todo details
router.get("/:id", authorize, controller.get);


//GET All Todo details
router.get("/", authorize, controller.getAll);

//UPDATE Todo Details
router.patch(
  "/:id",
  validator.update,
  handleValidationErrors,
  authorize,
  controller.update
);

//Delete the Todo
router.delete("/:id", authorize, controller.delete);


export default router;

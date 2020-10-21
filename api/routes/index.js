/**
 * This is routes index file.
 * It contains all the routes.
 */
import express from "express";

import todoRoutes from "../routes/todoRoutes";
import userRoutes from "../routes/userRoutes";

const routes = express.Router();

//User Routes
routes.use("/user", userRoutes);

//TODO Routes
routes.use("/user/todo", todoRoutes);


export default routes;

import { Router } from "express";
import { UserController } from "../controllers/user.controller.js";

const usersRouter = Router();

const userController = new UserController();

usersRouter.get("/task", userController.getTaskController);
usersRouter.post("/task", userController.addTaskControler);
usersRouter.patch("/task/:id", userController.UpdateTaskCntroller);
usersRouter.delete("/task/:id", userController.deleteTaskController);

export default usersRouter;

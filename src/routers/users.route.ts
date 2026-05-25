import { Router } from "express";
import { TaskController } from "../module/task/controllers/task.controller.js";
import { UserCotroller } from "../module/user/controllers/user.controller.js";

const usersRouter = Router();

const taskController = new TaskController();
const userController = new UserCotroller();

/* Routers of task */

usersRouter.get("/task", taskController.getTaskController);
usersRouter.post("/task", taskController.addTaskControler);
usersRouter.patch("/task/:id", taskController.UpdateTaskCntroller);
usersRouter.delete("/task/:id", taskController.deleteTaskController);

/* Routers of user */

usersRouter.post("/user", userController.getByNameController);
usersRouter.post("/createUser", userController.createNewUserController);

export default usersRouter;

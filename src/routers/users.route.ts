import { Router } from "express";
import { TaskController } from "../module/task/controllers/task.controller.js";
import { UserCotroller } from "../module/user/controllers/user.controller.js";
import { AuthController } from "../module/auth/controllers/auth.controller.js";
import { LoginService } from "../module/auth/services/login.service.js";
import { UserRepositorey } from "../module/user/repository/user.repository.js";
import { Middleware } from "../module/auth/middleware/auth.middleware.js";

const usersRouter = Router();

const taskController = new TaskController();
const userController = new UserCotroller();
const authController = new AuthController(
  new LoginService(new UserRepositorey()),
);
const { authMiddleware } = new Middleware();

/* Routers of task */

usersRouter.get("/task", authMiddleware, taskController.getTaskController);
usersRouter.post("/task", authMiddleware, taskController.addTaskControler);
usersRouter.patch(
  "/task/:id",
  authMiddleware,
  taskController.UpdateTaskCntroller,
);
usersRouter.delete(
  "/task/:id",
  authMiddleware,
  taskController.deleteTaskController,
);

/* Routers of user */

usersRouter.post("/user", userController.getByNameController);
usersRouter.post("/createUser", userController.createNewUserController);

/* Routers of login */
usersRouter.post("/login", authController.login);

export default usersRouter;

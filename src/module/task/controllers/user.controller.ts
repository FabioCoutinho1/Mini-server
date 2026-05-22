import type { Request, Response } from "express";

import { UserService } from "../services/user.service.js";
import { UserRepository } from "../repository/user.repository.js";
import { createTaskSchema } from "../schemas/create-task.schema.js";
import { updateTaskSchema } from "../schemas/update-task.schema.js";

const userService = new UserService(new UserRepository());

export class UserController {
  public getTaskController = async (req: Request, res: Response) => {
    const tasks = await userService.fildAllTaskService();

    return res.status(200).json({ tasks });
  };

  public addTaskControler = async (req: Request, res: Response) => {
    const { data, success, error } = createTaskSchema.safeParse(req.body);

    if (error) {
      return res.status(400).json({ erro: error.flatten() });
    }

    const addTask = await userService.creatTaskService(data);
    return res.status(200).json({ success, addTask });
  };

  public UpdateTaskCntroller = async (req: Request, res: Response) => {
    const id = req.params.id;

    const { data, success, error } = updateTaskSchema.safeParse(req.body);

    if (error) {
      return res.status(400).json({ error: error.flatten() });
    }

    const taskUpdate = await userService.updateTaskService(Number(id), data);
    return res.status(200).json(taskUpdate);
  };

  public deleteTaskController = (req: Request, res: Response): any => {
    const id = req.params.id;

    userService.deleteTaskService(Number(id));

    return res.status(200).json({ message: "Usuario apagado como sucesso" });
  };
}

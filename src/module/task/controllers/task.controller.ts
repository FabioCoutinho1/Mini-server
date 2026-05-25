import type { Request, Response } from "express";

import { TaskService } from "../services/task.service.js";
import { TaskRepository } from "../repository/task.repository.js";
import { createTaskSchema } from "../schemas/create-task.schema.js";
import { updateTaskSchema } from "../schemas/update-task.schema.js";

const taskService = new TaskService(new TaskRepository());

export class TaskController {
  public getTaskController = async (req: Request, res: Response) => {
    const tasks = await taskService.fildAllTaskService();

    return res.status(200).json({ tasks });
  };

  public addTaskControler = async (req: Request, res: Response) => {
    const { data, success, error } = createTaskSchema.safeParse(req.body);

    if (error) {
      return res.status(400).json({ erro: error.flatten() });
    }

    const addTask = await taskService.creatTaskService(data);
    return res.status(200).json({ success, addTask });
  };

  public UpdateTaskCntroller = async (req: Request, res: Response) => {
    const id = req.params.id;

    const { data, success, error } = updateTaskSchema.safeParse(req.body);

    if (error) {
      return res.status(400).json({ error: error.flatten() });
    }

    const taskUpdate = await taskService.updateTaskService(Number(id), data);
    return res.status(200).json(taskUpdate);
  };

  public deleteTaskController = (req: Request, res: Response): any => {
    const id = req.params.id;

    taskService.deleteTaskService(Number(id));

    return res.status(200).json({ message: "Usuario apagado como sucesso" });
  };
}

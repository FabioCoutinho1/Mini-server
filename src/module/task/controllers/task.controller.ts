import type { Request, Response } from "express";

import { TaskService } from "../services/task.service.js";
import { TaskRepository } from "../repository/task.repository.js";
import { createTaskSchema } from "../schemas/create-task.schema.js";
import { updateTaskSchema } from "../schemas/update-task.schema.js";

const taskService = new TaskService(new TaskRepository());

export class TaskController {
  public getTaskController = async (req: Request, res: Response) => {
    const tasks = await taskService.fildAllTaskByUserIdService(req.userId);

    return res.status(200).json({ tasks });
  };

  public addTaskControler = async (req: Request, res: Response) => {
    const { data, error } = createTaskSchema.safeParse({
      ...req.body,
      user_id: req.userId,
    });

    if (error) {
      return res.status(400).json(data);
    }

    const addTask = await taskService.creatTaskService({
      name: data.name,
      user_id: data.user_id,
    });
    return res.status(201).json(addTask);
  };

  public UpdateTaskCntroller = async (req: Request, res: Response) => {
    const id = req.params.id;
    const user_id = req.userId;

    const { data, error } = updateTaskSchema.safeParse(req.body);

    if (error) {
      return res.status(400).json({ error: error.issues });
    }

    const taskUpdate = await taskService.updateTaskService(
      Number(id),
      user_id,
      data,
    );
    return res.status(200).json(taskUpdate);
  };

  public deleteTaskController = (req: Request, res: Response): any => {
    const id = req.params.id;
    const user_id = req.userId;

    taskService.deleteTaskService(Number(id), user_id);

    return res.status(200).json({ message: "Usuario apagado como sucesso" });
  };
}

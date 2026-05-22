import type { CreateTaskDTO } from "../schemas/create-task.schema.js";
import type { UpdateTaskDTO } from "../schemas/update-task.schema.js";
import type { Task } from "../entities/task.entity.js";

export interface ITaskRepository {
  getAllTasks(): Promise<Task[]>;
  addTask(name: CreateTaskDTO): Promise<Task>;
  updateTask(index: number, value: UpdateTaskDTO): Promise<Task>;
  deleteTask(index: number): Promise<Task>;
}

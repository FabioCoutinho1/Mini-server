import type { CreateTaskDTO } from "../schemas/create-task.schema.js";
import type { UpdateTaskDTO } from "../schemas/update-task.schema.js";
import type { Task } from "../entities/task.entity.js";

export interface ITaskRepository {
  getAllByUserIdTasks(userId: number): Promise<Task[]>;
  addTask(data: CreateTaskDTO): Promise<Task>;
  updateTask(id: number, user_id: number, data: UpdateTaskDTO): Promise<Task>;
  deleteTask(id: number, user_id: number): Promise<Task>;
}

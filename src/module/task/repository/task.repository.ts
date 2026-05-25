import type { CreateTaskDTO } from "../schemas/create-task.schema.js";
import type { UpdateTaskDTO } from "../schemas/update-task.schema.js";
import { prisma } from "../../../lib/prisma.js";
import { MapperTask } from "../mappers/task.mapper.js";

export class TaskRepository {
  public getAllTasks = async () => {
    const tasks = await prisma.tasks.findMany();
    return tasks;
  };

  public addTask = async (data: CreateTaskDTO) => {
    const task = await prisma.tasks.create({
      data,
    });

    return MapperTask.toEntity(task);
  };

  public updateTask = async (id: number, data: UpdateTaskDTO) => {
    const updateTask = await prisma.tasks.update({
      where: { id },
      data,
    });

    return MapperTask.toEntity(updateTask);
  };

  public deleteTask = async (id: number) => {
    const deleteTask = await prisma.tasks.delete({
      where: { id },
    });
    return MapperTask.toEntity(deleteTask);
  };
}

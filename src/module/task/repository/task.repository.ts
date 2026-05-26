import type { CreateTaskDTO } from "../schemas/create-task.schema.js";
import type { UpdateTaskDTO } from "../schemas/update-task.schema.js";
import { prisma } from "../../../lib/prisma.js";
import { MapperTask } from "../mappers/task.mapper.js";
import type { Prisma } from "../../../../generated/prisma/index.js";

export class TaskRepository {
  public getAllByUserIdTasks = async (userId: number) => {
    const tasks = await prisma.tasks.findMany({
      where: {
        user_id: userId,
      },
    });
    return tasks;
  };

  public addTask = async (data: CreateTaskDTO) => {
    const task = await prisma.tasks.create({
      data: data,
    });

    return MapperTask.toEntity(task);
  };

  public updateTask = async (
    id: number,
    user_id: number,
    data: UpdateTaskDTO,
  ) => {
    const updateData: Prisma.tasksUpdateInput = {
      ...(data.name !== undefined && { name: data.name }),
      ...(data.done !== undefined && { done: data.done }),
      ...(data.favorite !== undefined && { favorite: data.favorite }),
    };

    const updateTask = await prisma.tasks.update({
      where: { id, user_id },
      data: updateData,
    });

    return updateTask;
  };

  public deleteTask = async (id: number, user_id: number) => {
    const deleteTask = await prisma.tasks.delete({
      where: { id, user_id },
    });
    return MapperTask.toEntity(deleteTask);
  };
}

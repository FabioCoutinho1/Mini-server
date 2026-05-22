
import type { tasks } from "../../generated/prisma/index.js";
import { Task } from "../entities/task.entity.js";

export class MapperTask{
    static toEntity(task: tasks) :Task{
        return new Task(
            task.id,
            task.name,
            task.done,
            task.favorite,
        )
    } 
}
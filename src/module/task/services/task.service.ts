import type { CreateTaskDTO } from "../schemas/create-task.schema.js";
import type { UpdateTaskDTO } from "../schemas/update-task.schema.js";
import type { ITaskRepository } from "../repository/ITaskRepository.js";

export class TaskService {
  private taskRepository: ITaskRepository;

  constructor(taskRepository: ITaskRepository) {
    this.taskRepository = taskRepository;
  }

  private validationTaskIndex = (id: number) => {
    if (!id) {
      throw new Error("Index inválido");
    }
  };

  public fildAllTaskService = () => {
    return this.taskRepository.getAllTasks();
  };

  public creatTaskService = async (data: CreateTaskDTO) => {
    return this.taskRepository.addTask(data);
  };

  public updateTaskService = async (id: number, data: UpdateTaskDTO) => {
    this.validationTaskIndex(id);

    return this.taskRepository.updateTask(id, data);
  };

  public deleteTaskService = async (id: number) => {
    this.validationTaskIndex(id);

    return this.taskRepository.deleteTask(id);
  };
}

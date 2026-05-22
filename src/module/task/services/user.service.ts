import type { CreateTaskDTO } from "../schemas/create-task.schema.js";
import type { UpdateTaskDTO } from "../schemas/update-task.schema.js";
import type { ITaskRepository } from "../repository/ITaskRepository.js";

export class UserService {
  private userRepository: ITaskRepository;

  constructor(userRepository: ITaskRepository) {
    this.userRepository = userRepository;
  }

  private validationTaskIndex = (id: number) => {
    if (!id) {
      throw new Error("Index inválido");
    }
  };

  public fildAllTaskService = () => {
    return this.userRepository.getAllTasks();
  };

  public creatTaskService = async (data: CreateTaskDTO) => {
    return this.userRepository.addTask(data);
  };

  public updateTaskService = async (id: number, data: UpdateTaskDTO) => {
    this.validationTaskIndex(id);

    return this.userRepository.updateTask(id, data);
  };

  public deleteTaskService = async (id: number) => {
    this.validationTaskIndex(id);

    return this.userRepository.deleteTask(id);
  };
}

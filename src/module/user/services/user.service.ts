import type { IUserRepository } from "../repository/IUserRepository.js";
import type { CreateUserDTO } from "../schemas/create-user.schema.js";
import type { FindeByNameUserDTO } from "../schemas/findByName-user.schema.js";

export class UserService {
  private userRepository: IUserRepository;
  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public findByNameService = (payload: FindeByNameUserDTO) => {
    const user = this.userRepository.findByname(payload);
    return user;
  };

  public createUserService = (data: CreateUserDTO) => {
    return this.userRepository.createUser(data);
  };
}

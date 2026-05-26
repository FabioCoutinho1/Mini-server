import bcrypt from "bcryptjs";
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

  public createUserService = async (data: CreateUserDTO) => {
    const passwordHash = await bcrypt.hash(data.password, 10);
    return await this.userRepository.createUser({
      user_name: data.user_name,
      password: passwordHash,
    });
  };
}

import type { User } from "../entities/user.entity.js";
import type { CreateUserDTO } from "../schemas/create-user.schema.js";
import type { FindeByNameUserDTO } from "../schemas/findByName-user.schema.js";

export interface IUserRepository {
  findByname(payload: FindeByNameUserDTO): Promise<User>;
  createUser(data: CreateUserDTO): Promise<User>;
}

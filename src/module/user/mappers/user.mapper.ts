import { User } from "../entities/user.entity.js";

export class MapperUser {
  static toEntity(user: User): User {
    return new User(user.id, user.user_name, user.password, user.create_at);
  }
}

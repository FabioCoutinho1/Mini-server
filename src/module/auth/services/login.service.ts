import "dotenv/config";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import type { IUserRepository } from "../../user/repository/IUserRepository.js";
import type { LoginDTO } from "../schemas/login.schema.js";

export class LoginService {
  constructor(private userRepository: IUserRepository) {}

  public execute = async (data: LoginDTO) => {
    const user = await this.userRepository.findByname(data);
    if (!user) throw new Error("Credencias inválidas");

    const passwordMatch = await bcrypt.compare(data.password, user.password);

    if (!passwordMatch) throw new Error("Credencias inválidas");

    const token = jwt.sign(
      {
        sub: user.id,
      },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" },
    );

    return {
      token, user:{
        id: user.id,
        user_name: user.user_name
      }
    }
  };
}

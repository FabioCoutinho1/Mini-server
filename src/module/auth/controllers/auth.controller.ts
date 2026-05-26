import type { Request, Response } from "express";
import type { LoginService } from "../services/login.service.js";
import { loginSchema } from "../schemas/login.schema.js";

export class AuthController {
  constructor(private loginService: LoginService) {}

  public login = async (req: Request, res: Response) => {
    const { data, error } = loginSchema.safeParse(req.body);

    if (error) {
      return res.status(400).json(error.flatten);
    }

    const login = await this.loginService.execute(data);

    if (!login) {
      return res.status(400).json({ message: "Credencias Invalidas" });
    }

    return res
      .status(200)
      .json({ token: login.token, user: { user_name: login.user.user_name } });
  };
}

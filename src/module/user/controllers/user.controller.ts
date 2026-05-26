import type { Request, Response } from "express";
`
`;
import { UserRepositorey } from "../repository/user.repository.js";
import { findBynameSchema } from "../schemas/findByName-user.schema.js";
import { UserService } from "../services/user.service.js";
import { createUserSchema } from "../schemas/create-user.schema.js";

const userService = new UserService(new UserRepositorey());

export class UserCotroller {
  public getByNameController = async (req: Request, res: Response) => {
    const { data, success, error } = findBynameSchema.safeParse(req.body);

    if (error) {
      return res.status(400).json({ error: error.flatten });
    }

    await userService.findByNameService(data);
    return res.status(200).json(success);
  };

  public createNewUserController = async (req: Request, res: Response) => {
    const { data, success, error } = createUserSchema.safeParse(req.body);

    if (error) {
      return res.status(400).json({ error: error.flatten });
    }

    const userCreated = await userService.createUserService(data);
    return res.status(200).json(userCreated);
  };
}

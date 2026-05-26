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
    const { data, error } = findBynameSchema.safeParse(req.body);

    if (error) {
      return res.status(400).json({ error: error.flatten });
    }

    const userByName = await userService.findByNameService(data);
    return res
      .status(200)
      .json({
        user_name: userByName.user_name,
        create_at: userByName.create_at,
      });
  };

  public createNewUserController = async (req: Request, res: Response) => {
    const { data, error } = createUserSchema.safeParse(req.body);

    if (error) {
      return res.status(400).json({ error: error.flatten });
    }

    const userCreated = await userService.createUserService(data);
    return res.status(200).json(userCreated);
  };
}

import { prisma } from "../../../lib/prisma.js";
import type { CreateUserDTO } from "../schemas/create-user.schema.js";
import type { FindeByNameUserDTO } from "../schemas/findByName-user.schema.js";

export class UserRepositorey {
  public findByname = async (payload: FindeByNameUserDTO) => {
    const user = await prisma.users.findUnique({
      where: {
        user_name: payload.user_name,
      },
    });

    if (!user) throw new Error("Usuário não existe");

    return user;
  };

  public createUser = async (data: CreateUserDTO) => {
    const user = await prisma.users.create({
      data,
    });

    return user;
  };
}

import z, { boolean, string } from "zod";


export const updateTaskSchema = z
  .object({
    name: string().min(3).optional(),
    done: boolean().optional(),
    favorite: boolean().optional(),
  })
  .refine(
    (data) =>
      data.name !== undefined ||
      data.done !== undefined ||
      data.favorite !== undefined,
    { message: "Envie ao menos um campo" },
  );

export type UpdateTaskDTO = Partial<z.infer<typeof updateTaskSchema>>;

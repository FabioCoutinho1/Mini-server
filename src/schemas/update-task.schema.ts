import z, { boolean, string } from "zod";
import { createTaskSchema } from "./create-task.schema.js";

export const updateTaskSchema = createTaskSchema
  .partial()
  .refine(
    (data) =>
      data.name !== undefined ||
      data.done !== undefined ||
      data.favorite !== undefined,
    { message: "Envie ao menos um campo" },
  );

export type UpdateTaskDTO = Partial<z.infer<typeof updateTaskSchema>>;

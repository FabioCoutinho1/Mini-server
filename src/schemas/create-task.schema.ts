import z from "zod";

export const createTaskSchema = z.object({
  name: z.string().min(3),
  done: z.boolean().default(false),
  favorite: z.boolean().default(false),
});

export type CreateTaskDTO = z.infer<typeof createTaskSchema>;


import z from "zod";

export const createTaskSchema = z.object({
  name: z.string().min(3),
  done: z.boolean().default(false),
  favorite: z.boolean().default(false),
  create_at: z.date(),
});

export type CreateTaskDTO = z.infer<typeof createTaskSchema>;

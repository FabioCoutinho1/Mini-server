import z from "zod";

export const createTaskSchema = z.object({
  name: z.string().min(3),
  user_id: z.number(),
});

export type CreateTaskDTO = z.infer<typeof createTaskSchema>;

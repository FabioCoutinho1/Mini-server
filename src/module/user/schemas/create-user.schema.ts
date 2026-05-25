import z from "zod";

export const createUserSchema = z.object({
  user_name: z.string().min(3),
  password: z.string().min(8),
});

export type CreateUserDTO = z.infer<typeof createUserSchema>;

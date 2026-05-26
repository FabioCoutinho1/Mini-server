import z from "zod";

export const loginSchema = z.object({
  user_name: z.string().min(3).max(100),
  password: z.string().min(8),
});

export type LoginDTO = z.infer<typeof loginSchema>;

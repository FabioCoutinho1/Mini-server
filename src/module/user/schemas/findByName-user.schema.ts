import z from "zod";

export const findBynameSchema = z.object({
  user_name: z.string().min(3).max(100),
});

export type FindeByNameUserDTO = z.infer<typeof findBynameSchema>;

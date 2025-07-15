import {z} from "zod";

const todoSchema = z.object({
  todo: z.string(),
  comment: z.optional(z.string()),
  date: z.date(),
  done: z.boolean,
});

export type todo = z.infer<typeof todoSchema>;

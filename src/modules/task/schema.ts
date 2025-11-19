import { z } from "zod";

const statusNameEnum = ["backlog", "done", "todo", "in-progress"] as const;

export const TaskSchema = z.object({
  id: z.number().min(1).positive(),
  title: z.string().min(1).max(100),
  description: z.string().min(1).max(150).optional(),
  status: z.object({
    id: z.number().positive(),
    name: z.enum(statusNameEnum),
  }),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export const TasksSchema = TaskSchema.array();

export type Task = z.infer<typeof TaskSchema>;
export type Tasks = z.infer<typeof TasksSchema>;

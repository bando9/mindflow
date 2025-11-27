import { useState } from "react";
import { dataStatuses, initialDataTasks } from "@/lib/storage";
import { TaskItem } from "./task-item";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { TaskSchema, type Task, type Tasks } from "@/modules/task/schema";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import z from "zod";

export function TaskList() {
  const [tasks, setTasks] = useState(initialDataTasks);

  function handleDelete(id: number) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  function handleCreateTask(event: React.FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);

      const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;

      const statusSlug = formData.get("status-slug") as
        | "backlog"
        | "todo"
        | "in-progress"
        | "done";

      const status = dataStatuses.find((status) => status.slug === statusSlug);

      const newTask: Task = {
        id: newId,
        title: formData.get("title")?.toString().trim() || "",
        description: formData.get("description")?.toString().trim() || "",
        status: status || dataStatuses[0],
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      TaskSchema.parse(newTask);

      const updateTasks: Tasks = [...tasks, newTask];
      setTasks(updateTasks);

      event.currentTarget.reset();
    } catch (error: unknown) {
      if (error instanceof z.ZodError) {
        const messages = error.issues.map((i) => `${i.message}`).join("\n");
        alert(messages);
        console.log(messages);
        return null;
      }
    }
  }

  function handleToggleTaskStatus(id: number) {
    const foundTask = tasks.find((task) => task.id === id);
    if (!foundTask) return null;
    const isTaskDone = foundTask.status.slug === "done";

    const updatedStatusTask = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          status: isTaskDone
            ? { id: 2, slug: "todo", name: "Todo" }
            : { id: 4, slug: "done", name: "Done" },
        };
      } else {
        return task;
      }
    });
    setTasks(updatedStatusTask);
  }

  return (
    <section className="space-y-8 w-3xl">
      <form method="post" className="space-y-2" onSubmit={handleCreateTask}>
        <Label htmlFor="title">Title </Label>
        <Input type="text" name="title" id="title" required />

        <Label htmlFor="description">Description </Label>
        <Input type="text" name="description" id="description" />

        <Select name="status-slug">
          <SelectTrigger className="w-36">
            <SelectValue placeholder="Select Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {dataStatuses.map((status) => {
                return (
                  <SelectItem value={status.slug} key={status.slug}>
                    {status.name}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Button>Create Task</Button>
      </form>

      <ul>
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              task={task}
              handleDelete={() => handleDelete(task.id)}
              handleToggleTaskStatus={() => handleToggleTaskStatus(task.id)}
            />
          );
        })}
      </ul>
    </section>
  );
}

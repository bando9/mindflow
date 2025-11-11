import dayjs from "dayjs";
import type { Task } from "../lib/storage";

interface TaskItemProps {
  task: Task;
  className?: string | undefined;
}

export function TaskItem({ task, className }: TaskItemProps) {
  const formattedCreatedAt = dayjs(task.createdAt).format("MMMM D, YYYY");

  return (
    <li className="mb-3 w-2xl  border-2 border-blue-300 rounded-lg p-2">
      <div className="flex items-center justify-between">
        <h2 className="text-slate-800 text-lg font-semibold">{task.title} </h2>
        <span className={className}>{task.status.name}</span>
      </div>
      <p className="text-slate-700 text-sm ">{task.description}</p>
      <p className="text-slate-600 text-xs mt-4 italic">
        Created {formattedCreatedAt}
      </p>
    </li>
  );
}

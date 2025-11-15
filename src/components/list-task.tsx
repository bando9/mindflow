import { dataTasks } from "../lib/storage";
import { TaskItem } from "./task-item";

export function ListTask() {
  return (
    <ul>
      {dataTasks.map((task) => {
        return <TaskItem key={task.id} task={task} />;
      })}
    </ul>
  );
}

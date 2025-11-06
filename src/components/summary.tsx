import checkIcon from ".././assets/check-circle.svg";
import updatedIcon from ".././assets/refresh-ccw.svg";
import createdIcon from ".././assets/file-plus.svg";
import { dataTasks } from "../lib/storage";
import { CardSummary } from "./card-summary";

function countIsDone() {
  const tasks = dataTasks;
  const updatedTasks = tasks.filter(
    (task) => task.status.statusName === "done"
  );
  const count = updatedTasks.length;
  return count;
}

export function Summary() {
  const countTasks = dataTasks.length;

  return (
    <div className="grid grid-cols-2 gap-5 mb-10">
      <CardSummary
        count={countIsDone()}
        imageSrc={checkIcon}
        colorBackgroundIcon="bg-green-100"
        statusSummary="completed"
      />

      <CardSummary
        count={32}
        imageSrc={updatedIcon}
        colorBackgroundIcon="bg-slate-200"
        statusSummary="updated"
      />

      <CardSummary
        count={countTasks}
        imageSrc={createdIcon}
        colorBackgroundIcon="bg-slate-200"
        statusSummary="created"
      />
    </div>
  );
}

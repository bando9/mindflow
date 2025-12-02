import dayjs from "dayjs";
import { SearchForm } from "@/components/shared/search-form";
import { TaskList } from "@/components/shared/task/task-list";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { RiAddLargeLine } from "@remixicon/react";

function App() {
  const nowDate = new Date();
  const now = dayjs(nowDate).format("MMMM D, YYYY");

  return (
    <section className="space-y-5 pt-10">
      <div className="mt-3">
        <h1 className="text-2xl font-semibold">Today</h1>
        <p className="text-slate-400 mb-4 text-sm">{now}</p>
      </div>
      <div className="flex justify-between items-center mb-6">
        <SearchForm />
        <Button>
          <Link
            to="/create-task"
            className="flex gap-2 justify-center items-center"
          >
            <RiAddLargeLine /> Create Task
          </Link>
        </Button>
      </div>
      <TaskList />
    </section>
  );
}
export default App;

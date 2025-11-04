import "./index.css";
import { dataTasks } from "./lib/storage";

function getStatusBadge(status: string) {
  switch (status.toLowerCase()) {
    case "backlog":
      return `inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 inset-ring inset-ring-gray-400/20`;
    case "todo":
      return `inline-flex items-center rounded-md bg-yellow-400/10 px-2 py-1 text-xs font-medium text-yellow-500 inset-ring inset-ring-yellow-400/20 `;
    case "in-progress":
      return `inline-flex items-center rounded-md bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 inset-ring inset-ring-blue-500/20"`;
    case "done":
      return `inline-flex items-center rounded-md bg-green-400/10 px-2 py-1 text-xs font-medium text-green-400 inset-ring inset-ring-green-500/20`;
  }
}

function sortByPriority() {
  const tasks = dataTasks;
  tasks.sort((a, b) => a.status.id - b.status.id);
  console.log(tasks);
}
sortByPriority();

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-slate-50 flex justify-center ">
      <main className=" bg-slate-100 w-full max-w-3/4 min-h-screen p-10 overflow-hidden transition-all duration-300">
        <section className="mt-10">
          <h1 className="text-2xl font-semibold mb-4">Today</h1>
          <div className="card-task">
            <ul>
              {dataTasks.map((task) => {
                const {
                  id,
                  title,
                  description,
                  status: { statusName },
                } = task;

                if (statusName == "done") {
                  console.log(title, "IS DONE");
                }
                return (
                  <li
                    key={id}
                    className="mb-3 w-2xl  border-2 border-blue-300 rounded-lg p-2"
                  >
                    <div className="flex items-center justify-between">
                      <h2 className="text-slate-800 text-lg font-semibold">
                        {title}{" "}
                      </h2>
                      <span className={getStatusBadge(statusName)}>
                        {statusName}
                      </span>
                    </div>
                    <p className="text-slate-700 text-sm ">{description}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <footer className="p-4 mt-64 text-center text-sm text-gray-600 ">
          &copy; {currentYear}. Mindflow by
          <a
            href="https://bandomega.com"
            className="hover:underline text-blue-600 font-medium"
            target="_blank"
          >
            {" "}
            Bando Mega.{" "}
          </a>
          All Rights Reserved.
        </footer>
      </main>
    </div>
  );
}
export default App;

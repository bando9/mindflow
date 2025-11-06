import { ListTask } from "./components/list-task";
import "./index.css";
import { dataTasks } from "./lib/storage";

function sortByPriority() {
  const tasks = dataTasks;
  tasks.sort((a, b) => a.status.id - b.status.id);
}
sortByPriority();

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <main className="w-3/4 max-w-3/4 min-h-screen p-10 overflow-hidden transition-all duration-300 mx-auto">
        <section className="mt-10 flex justify-center">
          <div>
            <h1 className="text-2xl font-semibold mb-4">Today</h1>
            <div className="card-task">
              <ListTask />
            </div>
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
    </>
  );
}
export default App;

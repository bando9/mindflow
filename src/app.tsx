import dayjs from "dayjs";
import { Footer } from "./components/footer";
import { SearchForm } from "./components/search-form";
import { NavBar } from "./modules/navbar";
import { TaskList } from "./modules/task/task-list";

function App() {
  const nowDate = new Date();
  const now = dayjs(nowDate).format("MMMM D, YYYY");

  return (
    <>
      <main className="flex flex-col items-center w-full min-h-screen p-10 overflow-hidden transition-all duration-300 mx-auto">
        <section className="w-3/4 mx-auto">
          <NavBar />
        </section>

        <section className="space-y-8">
          <div className="mt-3">
            <h1 className="text-2xl font-semibold">Today</h1>
            <p className="text-slate-400 mb-4 text-sm">{now}</p>
          </div>
          <SearchForm />
          <TaskList />
        </section>
        <Footer />
      </main>
    </>
  );
}
export default App;

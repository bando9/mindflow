import { Footer } from "./components/footer";
import { SearchForm } from "./components/search-form";
import { Summary } from "./modules/summary/summary";
import { TaskList } from "./modules/task/task-list";

function App() {
  // TODO: const [tasks, setTasks] = useState(initialDataTasks);

  return (
    <>
      <main className="flex flex-col items-center w-full min-h-screen p-10 overflow-hidden transition-all duration-300 mx-auto">
        <section className="w-3/4 mx-auto">
          <Summary />
        </section>

        <section className="space-y-8">
          <h1 className="text-2xl font-semibold">Today</h1>
          <SearchForm />
          <TaskList />
        </section>
        <Footer />
      </main>
    </>
  );
}
export default App;

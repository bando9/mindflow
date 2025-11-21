import { Footer } from "./components/footer";
import { SearchForm } from "./components/search-form";
import { Navbar } from "./modules/navbar";
import { Summary } from "./modules/summary/summary";
import { TaskList } from "./modules/task/task-list";

function App() {
  return (
    <>
      <main className="w-full min-h-screen p-10 overflow-hidden transition-all duration-300 mx-auto">
        <Navbar />

        <section className="mt-5 w-3/4 mx-auto">
          <Summary />
        </section>
        <section className=" mt-5 flex justify-center">
          <div>
            <h1 className="text-2xl font-semibold mb-4">Today</h1>
            <SearchForm />
            <TaskList />
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
export default App;

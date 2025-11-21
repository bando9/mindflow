import { Footer } from "@/components/footer";
import { NavBar } from "@/modules/navbar";

export function BoardView() {
  return (
    <>
      <main className="w-full min-h-screen p-10 overflow-hidden transition-all duration-300 mx-auto overflow-y-scroll">
        <section className="mt-5 w-3/4 mx-auto">
          <NavBar />
        </section>
        <section className="mt-14 w-3/4 mx-auto">
          <h1>Hello from Board View</h1>
        </section>

        <Footer />
      </main>
    </>
  );
}

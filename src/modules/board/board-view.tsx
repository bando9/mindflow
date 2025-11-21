import { Footer } from "@/components/footer";
import { NavBar } from "@/modules/navbar";

export function BoardView() {
  return (
    <>
      <main className="w-full min-h-screen p-10 overflow-hidden transition-all duration-300 mx-auto overflow-y-scroll">
        <section className="mt-5 w-3/4 mx-auto">
          <NavBar />
        </section>
        <section className="mt-14 ">
          <div className="min-h-screen flex flex-col md:flex-row relative w-full">
            <div className="flex-1 pt-7 p-10 bg-slate-100  min-h-screen overflow-hidden transition-all duration-300">
              <section className="max-h-screen overflow-auto">
                <div className="flex items-start gap-5 py-5 ">
                  <div className="min-w-72 bg-slate-200 min-h-screen rounded-md p-3">
                    <h1 className="text-center mb-4 pb-2 text-slate-900 font-semibold border-b border-slate-400">
                      Backlog
                      <span className="ms-1.5 inline-flex items-center rounded-md bg-slate-600/20 px-2 py-1 text-xs font-medium text-slate-800">
                        10
                      </span>
                    </h1>
                    <CardDummy />

                    <CardDummy />
                  </div>

                  <div className="min-w-72 bg-slate-200 min-h-screen rounded-md p-3">
                    <h1 className="text-center mb-4 pb-2 text-slate-900 font-semibold border-b border-slate-400">
                      To Do
                      <span className="ms-1.5 inline-flex items-center rounded-md bg-slate-600/20 px-2 py-1 text-xs font-medium text-slate-800">
                        10
                      </span>
                    </h1>

                    <CardDummy />

                    <CardDummy />

                    <CardDummy />
                  </div>

                  <div className="min-w-72 bg-slate-200 min-h-screen rounded-md p-3">
                    <h1 className="text-center mb-4 pb-2 text-slate-900 font-semibold border-b border-slate-400">
                      In Progress
                      <span className="ms-1.5 inline-flex items-center rounded-md bg-slate-600/20 px-2 py-1 text-xs font-medium text-slate-800">
                        10
                      </span>
                    </h1>
                    <CardDummy />

                    <CardDummy />

                    <CardDummy />
                  </div>

                  <div className="min-w-72 bg-slate-200 min-h-screen rounded-md p-3">
                    <h1 className="text-center mb-4 pb-2 text-slate-900 font-semibold border-b border-slate-400">
                      Done
                      <span className="ms-1.5 inline-flex items-center rounded-md bg-slate-600/20 px-2 py-1 text-xs font-medium text-slate-800">
                        10
                      </span>
                    </h1>

                    <CardDummy />

                    <CardDummy />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

function CardDummy() {
  return (
    <div className="w-full p-3 bg-slate-50 rounded-md mb-5 cursor-pointer border-2 border-slate-50 hover:border-blue-400 duration-200 transition-all">
      <h2 className="mb-3">
        Setup Mindfloww project dkawjndwadnk awdkawn dwaknd awdlk
      </h2>
      <p className="inline-flex items-center rounded-md bg-slate-950/10 px-2 py-1 text-xs font-medium text-slate-800 inset-ring inset-ring-slate-950/20">
        5
      </p>
    </div>
  );
}

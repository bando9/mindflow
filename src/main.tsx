import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import { Layout } from "@/layouts/layout";
import App from "./app";
import { BoardView } from "@/modules/board/board-view";
import { Summary } from "@/modules/summary/summary";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/board" element={<BoardView />} />
        <Route path="/summary" element={<Summary />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

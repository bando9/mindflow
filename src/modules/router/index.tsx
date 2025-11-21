import { createBrowserRouter } from "react-router";
import App from "@/app";
import { BoardView } from "@/modules/board/board-view";
import { BacklogView } from "@/modules/board/backlog-view";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/board",
    element: <BoardView />,
  },
  {
    path: "/backlog",
    element: <BacklogView />,
  },
]);

export default router;

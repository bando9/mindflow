import { createBrowserRouter } from "react-router";
import App from "@/app";
import { BoardView } from "@/modules/board/board-view";
import { Summary } from "@/modules/summary/summary";
import { TaskDetail } from "@/modules/task/task-detail";

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
    path: "/summary",
    element: <Summary />,
  },
  {
    path: "/task",
    element: <TaskDetail />,
  },
]);

export default router;

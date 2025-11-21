import { RiGlobalFill, RiKanbanView2, RiTableView } from "@remixicon/react";

export function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/" className="flex gap-1 items-center">
            <RiGlobalFill className="w-5" /> Summary
          </a>
        </li>
        <li>
          <a href="/backlog" className="flex gap-1 items-center">
            <RiTableView /> Backlog View
          </a>
        </li>
        <li>
          <a href="/board" className="flex gap-1 items-center">
            <RiKanbanView2 />
            Board View
          </a>
        </li>
      </ul>
    </nav>
  );
}

import { RiInfoI } from "@remixicon/react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { initialDataTasks } from "@/lib/storage";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import dayjs from "dayjs";

export function TaskDetail() {
  const taskId = 2;
  const findTask = initialDataTasks.find((task) => task.id === taskId);

  if (!findTask) {
    return;
  }
  const formattedCreatedAt = dayjs(findTask.createdAt).format("MMMM D, YYYY");
  const formattedUpdatedAt = dayjs(findTask.updatedAt).format("MMMM D, YYYY");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <RiInfoI className="w-4 rounded-2xl text-slate-400 hover:text-slate-900 hover:cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="my-3">
          <DialogTitle className="capitalize flex items-center justify-between mb-2">
            {findTask.title}
            <Badge status={findTask.status.name}>{findTask.status.name}</Badge>
          </DialogTitle>
          <DialogDescription className="flex flex-col">
            {findTask?.description}
            <span className="text-slate-600 text-xs italic mt-2 ">
              Last updated {formattedUpdatedAt}
            </span>

            <span className="text-slate-600 text-xs italic">
              Created {formattedCreatedAt}
            </span>
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="sm:justify-start md:justify-end">
          <DialogClose asChild>
            <Button variant="outline" className="hover:cursor-pointer">
              {" "}
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

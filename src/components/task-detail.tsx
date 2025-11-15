import { Button, Dialog, Flex } from "@radix-ui/themes";
import { RiInfoI } from "@remixicon/react";
import { dataTasks } from "../lib/storage";
import dayjs from "dayjs";

export function TaskDetail() {
  const taskId = 5;
  const foundTaskById = dataTasks.find((task) => task.id === taskId);
  if (!foundTaskById) {
    return;
  }

  const formattedCreatedAt = dayjs(foundTaskById.createdAt).format(
    "MMMM D, YYYY"
  );
  const formattedUpdatedAt = dayjs(foundTaskById.updatedAt).format(
    "MMMM D, YYYY"
  );

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <RiInfoI className="w-4 rounded-2xl text-slate-400 hover:text-slate-900 hover:cursor-pointer" />
      </Dialog.Trigger>

      <Dialog.Content>
        <Dialog.Title className="capitalize">
          [{foundTaskById?.status.name}] {foundTaskById?.title}
        </Dialog.Title>
        <Dialog.Description className="flex flex-col gap-2">
          {foundTaskById?.description}
          <span className="text-slate-600 text-xs italic mt-2 ">
            Last updated {formattedUpdatedAt}
          </span>

          <span className="text-slate-600 text-xs italic">
            Created {formattedCreatedAt}
          </span>
        </Dialog.Description>

        <Flex gap="3" justify="end" className="mt-10">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Close
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}

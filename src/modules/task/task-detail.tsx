import { Footer } from "@/components/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { initialDataTasks } from "@/lib/storage";

export function TaskDetail() {
  const tasks = initialDataTasks;
  const task1 = tasks[0];

  return (
    <>
      <main className="flex flex-col items-center w-full min-h-screen h-screen p-10 transition-all duration-300 mx-auto space-y-5 ">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>{task1.title}</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>{task1.description} </CardContent>
          <CardFooter className="flex-col gap-2"></CardFooter>
        </Card>
      </main>

      <Footer />
    </>
  );
}

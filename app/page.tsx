import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-xl font-medium text-sky-700 text-center pt-4">
        Started work
      </p>
      <Button variant="destructive">Click</Button>
    </div>
  );
}

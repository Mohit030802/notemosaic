import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h2 className="text-4xl text-red-500 font-bold">Hello Mohit</h2>
      <Button variant="link" size="lg">
        CLick me
      </Button>
    </>
  );
}

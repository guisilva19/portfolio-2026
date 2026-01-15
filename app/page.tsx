"use client";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="flex flex-col gap-2 w-full max-w-4xl">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 justify-center sm:justify-start">
          <LayoutTextFlip
            text="Desenvolvedor"
            words={["Full Stack", "Frontend", "Backend"]}
            duration={3000}
          />
        </div>
      </div>
    </div>
  );
}

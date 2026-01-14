import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BackgroundBeamsWithCollision className="min-h-screen w-full">
        {children}
      </BackgroundBeamsWithCollision>
    </>
  );
}
import { BackgroundBeamsWithCollision } from "@/components/ui/background-rain";
import TypeAnimation from "@/components/TypeAnimation";
import TypeAnimationMobile from "@/components/TypeAnimationMobile";
import ThemeToggle from "@/components/ThemeToggle";
import Navigation from "@/components/Navigation";
import { Analytics } from "@vercel/analytics/react";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BackgroundBeamsWithCollision className="w-full">
        <div className="w-screen fixed top-0 left-0 z-1">
          <TypeAnimation />
          <TypeAnimationMobile />
        </div>
        <Navigation />
        <ThemeToggle />
        {children}
      </BackgroundBeamsWithCollision>
      <Analytics />
    </>
  );
}
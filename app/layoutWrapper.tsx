"use client";

import { usePathname } from "next/navigation";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-rain";
import TypeAnimation from "@/components/TypeAnimation";
import TypeAnimationMobile from "@/components/TypeAnimationMobile";
import ThemeToggle from "@/components/ThemeToggle";
import Navigation from "@/components/Navigation";
import { Analytics } from "@vercel/analytics/react";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <>
      <BackgroundBeamsWithCollision className="w-full">
        <div className="w-screen fixed top-0 left-0 z-1">
          <TypeAnimation />
          {isHomePage && <TypeAnimationMobile />}
        </div>
        <Navigation />
        <ThemeToggle />
        {children}
      </BackgroundBeamsWithCollision>
      <Analytics />
    </>
  );
}

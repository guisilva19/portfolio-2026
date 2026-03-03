"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Início", path: "/" },
  { name: "Experiência", path: "/experiencia" },
  { name: "Educação", path: "/educacao" },
  { name: "Projetos", path: "/projetos" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed top-12 left-12 z-[9998] flex-col gap-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              prefetch={false}
              className={`
                group relative text-lg md:text-xl font-extra-black uppercase tracking-[0.2em] 
                transition-all duration-500 ease-out flex items-center gap-3
                ${
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }
              `}
            >
              <span 
                className={`
                  inline-block transition-all duration-500 ease-out font-bold text-xl
                  ${
                    isActive 
                      ? "opacity-100 translate-x-0 scale-110" 
                      : "opacity-0 -translate-x-4 scale-75 group-hover:opacity-60 group-hover:translate-x-0 group-hover:scale-100"
                  }
                `}
              >
                ▸
              </span>
              <span className={`
                transition-all duration-500 ease-out
                ${isActive ? "translate-x-0" : "group-hover:translate-x-2"}
              `}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-[9998] w-11 h-11 flex flex-col items-center justify-center gap-1.5 rounded-full bg-background border border-border/50"
        aria-label="Menu"
      >
        <span 
          className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`} 
        />
        <span 
          className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`} 
        />
        <span 
          className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`} 
        />
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-[9997] bg-background/95 backdrop-blur-sm transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <nav 
          className="flex flex-col items-center justify-center h-full gap-8"
          onClick={(e) => e.stopPropagation()}
        >
          {menuItems.map((item, index) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                prefetch={false}
                onClick={() => setIsOpen(false)}
                className={`
                  text-2xl font-extra-black uppercase tracking-[0.2em] 
                  transition-all duration-300 ease-out
                  ${isActive ? "text-foreground" : "text-muted-foreground"}
                `}
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                  transform: isOpen ? "translateY(0)" : "translateY(20px)",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}

"use client";

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

  return (
    <nav className="fixed top-12 left-12 z-[9999] flex flex-col gap-4">
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
  );
}

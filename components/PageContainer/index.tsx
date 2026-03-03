"use client";

import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
  fullHeight?: boolean;
  centered?: boolean;
}

export default function PageContainer({ 
  children, 
  className = "",
  fullHeight = false,
  centered = false,
}: PageContainerProps) {
  return (
    <div className="relative z-10">
      {/* Gradiente de fade no topo - apenas mobile */}
      <div 
        className="md:hidden fixed top-0 left-0 right-0 h-[110px] z-30 pointer-events-none bg-background"
        style={{
          maskImage: "linear-gradient(to bottom, black 0%, black 30%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 10%, black 30%, black 40%, black 70%, transparent 100%)"
        }}
      />
      
      {/* Conteúdo da página */}
      <div 
        className={`
          ${fullHeight ? "min-h-[100dvh]" : "min-h-screen"}
          ${centered ? "flex items-center justify-center" : ""}
          ${className}
        `}
      >
        {children}
      </div>
    </div>
  );
}

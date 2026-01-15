"use client";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { SocialButtons3D } from "@/components/ui/social-buttons-3d";

export default function Home() {
  return (
    <div className="relative flex items-center justify-center min-h-screen px-4">
      <div className="flex flex-col w-full items-center">
        {/* Nome */}
        <h1 className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-foreground lg:pr-40 mb-2 lg:-mb-2">
          Guilherme
        </h1>
        
        {/* Desenvolvedor com animação */}
        <div className="flex flex-wrap items-center gap-2 justify-center lg:ml-32">
          <LayoutTextFlip
            text="Desenvolvedor"
            words={["Full Stack", "Frontend", "Backend"]}
            duration={3000}
          />
        </div>
      </div>

      {/* Botões de Redes Sociais 3D - Fixo na parte inferior */}
      <div className="fixed bottom-14 left-0 right-0 z-10">
        <SocialButtons3D />
      </div>
    </div>
  );
}

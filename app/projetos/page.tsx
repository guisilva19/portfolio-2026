"use client";

import PageContainer from "@/components/PageContainer";

export default function Projects() {
  return (
    <PageContainer centered className="px-4">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 opacity-0 animate-fade-in-up">
          Projetos
        </h1>
        <p className="text-lg text-muted-foreground opacity-0 animate-scale-in animation-delay-400">
          Em breve
        </p>
      </div>
    </PageContainer>
  );
}

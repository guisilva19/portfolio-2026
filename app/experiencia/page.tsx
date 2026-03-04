"use client";

import { motion } from "motion/react";
import { Download, ExternalLink } from "lucide-react";
import Image from "next/image";
import PageContainer from "@/components/PageContainer";

const CV_URL = "/cv.pdf";

type Experience = {
  role: string;
  company: string;
  website?: string;
  projectLink?: { word: string; url: string };
  period: string;
  highlights: string[];
  stack: string[];
};

const experiences: Experience[] = [
  {
    role: "Desenvolvedor Full Stack",
    company: "Evoé",
    website: "https://www.evoe.cc",
    period: "Abr 2025 — Fev 2026",
    highlights: [
      "Desenvolvi interfaces web altamente responsivas e personalizadas, aprimorando significativamente a usabilidade e a experiência do usuário.",
      "Implementei novas funcionalidades e ajustei rotas e lógica de backend, manipulando dados em MySQL e MongoDB.",
      "Resolvi bugs, otimizei desempenho e garanti estabilidade da aplicação.",
      "Contribuí com melhorias de segurança e boas práticas de desenvolvimento.",
      "Implantei Google Tag Manager para monitoramento e análise de dados.",
      "Atuei em metodologia ágil, com entregas contínuas e decisões técnicas autônomas.",
    ],
    stack: ["TypeScript", "React.js", "Nest.js", "MySQL", "MongoDB", "Docker", "Cloudflare"],
  },
  {
    role: "Desenvolvedor Full Stack",
    company: "The LandDepot",
    website: "https://www.thelanddepot.com",
    period: "Set 2023 — Abr 2025",
    highlights: [
      "Desenvolvi e mantive a plataforma de investidores, implementando novas funcionalidades e garantindo experiência sólida para usuários ativos nos EUA.",
      "Resolvi bugs e otimizei continuamente a performance da plataforma.",
    ],
    stack: ["Node.js", "TypeScript", "Next.js", "Nest.js", "PostgreSQL", "MongoDB", "Docker"],
  },
  {
    role: "Desenvolvedor Mobile",
    company: "Grupo SEJA",
    website: "https://gruposeja.com.br",
    projectLink: { word: "Gerenciow", url: "https://apps.apple.com/br/app/gerenciow/id6612035580" },
    period: "Jul 2024 — Ago 2024",
    highlights: [
      "Desenvolvi o front-end completo do app Gerenciow.",
      "Otimizei usabilidade e performance da aplicação.",
    ],
    stack: ["React Native", "Expo", "TypeScript", "API REST"],
  },
  {
    role: "Desenvolvedor Full Stack Junior",
    company: "Freelancer",
    period: "Fev 2023 — Set 2023",
    highlights: [
      "Atuei em projetos freelancer, desenvolvendo interfaces web modernas e APIs REST.",
      "Participei de todo o ciclo de desenvolvimento, levantamento de requisitos à entrega das funcionalidades.",
      "Garanti integração eficiente entre sistemas, aplicando boas práticas de código.",
    ],
    stack: ["React.js", "TypeScript", "Node.js", "PostgreSQL", "Next.js", "Nest.js", "TailwindCSS", "API REST"],
  },
  {
    role: "Monitor de Ensino",
    company: "Kenzie Academy Brasil",
    website: "https://kenzie.com.br",
    period: "Mai 2022 — Out 2022",
    highlights: [
      "Responsável por auxiliar alunos com dificuldades no Desenvolvimento Web.",
      "Acompanhamento contínuo no desenvolvimento dos alunos.",
      "Semanalmente correção de entregas acadêmicas.",
      "Assistências aos alunos sobre dúvidas acadêmicas.",
      "Relatório sobre desenvolvimento dos alunos.",
      "Aplicação de testes para criação de algoritmos.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "React.js", "Styled-components"],
  },
];

export default function Experience() {
  return (
    <PageContainer className="px-6 sm:px-8 pt-32 md:pt-28 pb-20">
      <div className="max-w-[700px] md:max-w-[700px] xl:max-w-4xl mx-auto md:ml-64 xl:ml-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12 md:mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground opacity-0 animate-fade-in-up">
            Experiência
          </h1>
          <a
            href={CV_URL}
            download
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg
                       bg-[oklch(0.145_0.025_250)] text-white
                       dark:bg-white dark:text-[oklch(0.145_0.025_250)]
                       text-sm font-medium hover:opacity-90
                       transition-all duration-300 opacity-0 animate-fade-in animation-delay-400"
          >
            <span>Baixar CV</span>
            <Download className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
        </div>

        <div className="flex flex-col gap-6 md:gap-8">
          {experiences.map((exp, index) => (
            <motion.article
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.15,
                ease: "easeOut",
              }}
              className="relative"
            >
              <div className="flex gap-3 mb-2">
                {exp.website && (
                  <div className="relative w-10 h-10 shrink-0 rounded-lg overflow-hidden bg-muted/50 border border-border/60">
                    <Image
                      src={`https://logo.clearbit.com/${new URL(exp.website).hostname}`}
                      alt={exp.company}
                      fill
                      className="object-contain p-1"
                      sizes="40px"
                      onError={(e) => {
                        const parent = e.currentTarget.parentElement;
                        if (parent) parent.style.display = "none";
                      }}
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h2 className="text-xl md:text-2xl font-bold text-foreground">
                      {exp.role} ·{" "}
                      {exp.website ? (
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 hover:underline hover:text-foreground/80 transition-colors"
                        >
                          {exp.company}
                          <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                        </a>
                      ) : (
                        exp.company
                      )}
                    </h2>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider shrink-0">
                      {exp.period}
                    </span>
                  </div>
                </div>
              </div>

              <ul className="space-y-1.5 mb-3">
                {exp.highlights.map((highlight, i) => {
                  if (exp.projectLink && highlight.includes(exp.projectLink.word)) {
                    const parts = highlight.split(exp.projectLink.word);
                    return (
                      <li key={i} className="text-sm text-foreground/80 leading-relaxed pl-4 border-l-2 border-border/60">
                        {parts[0]}
                        <a
                          href={exp.projectLink.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground underline hover:opacity-80 transition-opacity"
                        >
                          {exp.projectLink.word}
                        </a>
                        {parts[1]}
                      </li>
                    );
                  }
                  return (
                    <li key={i} className="text-sm text-foreground/80 leading-relaxed pl-4 border-l-2 border-border/60">
                      {highlight}
                    </li>
                  );
                })}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] px-2 py-0.5 rounded-full bg-muted/80 text-muted-foreground border border-border/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}

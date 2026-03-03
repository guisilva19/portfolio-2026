"use client";

import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import PageContainer from "@/components/PageContainer";

const mainEducation = [
  {
    title: "Ciência da Computação",
    degree: "Bacharelado",
    institution: "UniFG Centro Universitário",
    period: "Jan 2023 — Dez 2027",
    status: "cursando" as const,
    description:
      "Bacharelado em Ciência da Computação, com formação em desenvolvimento de software, algoritmos, estruturas de dados, banco de dados e redes de computadores.",
  },
  {
    title: "Desenvolvedor Web Full Stack",
    degree: "Formação Intensiva",
    institution: "Kenzie Academy Brasil",
    period: "Mar 2022 — Mar 2023",
    duration: "2.000 horas",
    status: "concluído" as const,
    description:
      "Curso de 2.000 horas de Desenvolvimento Full Stack que abrange tecnologias Front End e Back End além de soft skills necessárias para o mercado de trabalho. Entre as linguagens e tecnologias aprendidas, estão HTML5, CSS3, JavaScript (ES6+), React, Node.js, Python (Django) e SQL.",
  },
];

const certificates = [
  {
    title: "Angular 19: estruture componentes com signals e controle de fluxo",
    subtitle: "Componentes com signals e controle de fluxo",
    issuer: "Alura",
    date: "Fev 2026",
    skills: ["Angular", "Signals", "TypeScript", "Control Flow"],
    url: "https://cursos.alura.com.br/certificate/5e5bfbb6-b64a-4798-9319-0bc296b11801?lang=pt_BR",
  },
  {
    title: "SOLID com TypeScript",
    subtitle: "Aplicando boas práticas em orientação a objetos",
    issuer: "Alura",
    date: "Fev 2026",
    skills: ["Programação orientada a objetos (POO)"],
    url: "https://cursos.alura.com.br/certificate/5c353302-74f6-4e7b-bfef-d675726a116e?lang=pt_BR",
  },
  {
    title: "Java Foundations",
    issuer: "Oracle",
    date: "Abr 2023",
    skills: ["Programação orientada a objetos (POO)"],
    url: "https://drive.google.com/file/d/1zonbXCfhoaWhSoKH2ABXj7mRBFxplHn_/view",
  },
];

const ALURA_PROFILE_URL = "https://cursos.alura.com.br/user/2003silvagui";

export default function Education() {
  return (
    <PageContainer className="px-6 sm:px-8 pt-32 md:pt-28 pb-20">
      <div className="max-w-[700px] md:max-w-[700px] xl:max-w-4xl mx-auto md:ml-64 xl:ml-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12 md:mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground opacity-0 animate-fade-in-up">
            Educação
          </h1>
          <a
            href={ALURA_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg
                       bg-[oklch(0.145_0.025_250)] text-white
                       dark:bg-white dark:text-[oklch(0.145_0.025_250)]
                       text-sm font-medium hover:opacity-90
                       transition-all duration-300 opacity-0 animate-fade-in animation-delay-400"
          >
            <span>Perfil Alura</span>
            <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Formação acadêmica */}
        <div className="space-y-12 md:space-y-16 mb-16 md:mb-20">
          {mainEducation.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.3,
                ease: "easeOut",
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="font-extra-black text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {item.period}
                </span>
                <div className="flex-1 h-px bg-border" />
                <span
                  className={`
                    inline-flex items-center gap-2 font-extra-black text-xs uppercase tracking-[0.2em]
                    ${
                      item.status === "cursando"
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-muted-foreground"
                    }
                  `}
                >
                  {item.status === "cursando" && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                  )}
                  {item.status}
                </span>
              </div>

              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-2">
                {item.title}
              </h2>

              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
                <span>{item.institution}</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                <span>{item.degree}</span>
                {item.duration && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                    <span>{item.duration}</span>
                  </>
                )}
              </div>

              <p className="text-sm md:text-base text-foreground/50 leading-relaxed max-w-2xl">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Licenças e certificados */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="font-extra-black text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Licenças e Certificados
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.map((cert, index) => {
              const hasLink = cert.url && cert.url !== "#";
              const CardWrapper = hasLink ? motion.a : motion.div;
              const linkProps = hasLink
                ? { href: cert.url, target: "_blank", rel: "noopener noreferrer" }
                : {};

              return (
                <CardWrapper
                  key={cert.title + cert.issuer}
                  {...linkProps}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 1.0 + index * 0.1,
                    ease: "easeOut",
                  }}
                  className="group p-5 rounded-xl border border-border/60 bg-muted/20 backdrop-blur-sm
                             hover:border-foreground/25 hover:bg-muted/30 hover:shadow-lg
                             transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                      {cert.issuer}
                    </span>
                    <span className="text-muted-foreground/30">·</span>
                    <span className="text-[10px] text-muted-foreground/60">
                      {cert.date}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h3 className="text-sm font-semibold text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                      {cert.title}
                    </h3>
                    {hasLink && (
                      <ExternalLink className="w-3.5 h-3.5 shrink-0 mt-0.5 text-muted-foreground/30 group-hover:text-foreground/50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    )}
                  </div>
                
                {cert.subtitle && (
                  <p className="text-xs text-muted-foreground/60 mb-3">
                    {cert.subtitle}
                  </p>
                )}

                <div className="flex flex-wrap gap-1.5 mt-auto pt-3">
                  {cert.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-foreground/[0.06] border border-border/40 text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="text-[10px] px-2 py-0.5 text-muted-foreground/50">
                      +{cert.skills.length - 3}
                    </span>
                  )}
                </div>
              </CardWrapper>
              );
            })}
          </div>

        </motion.div>
      </div>
    </PageContainer>
  );
}

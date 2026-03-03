"use client";

import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

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
    title: "SOLID com TypeScript",
    subtitle: "Aplicando boas práticas em orientação a objetos",
    issuer: "Alura",
    date: "Fev 2026",
    skills: ["Programação orientada a objetos (POO)"],
    url: "#",
  },
  {
    title: "Java Foundations",
    issuer: "Oracle",
    date: "Abr 2023",
    skills: ["Programação orientada a objetos (POO)"],
    url: "#",
  },
  {
    title: "Desenvolvimento Full Stack",
    issuer: "Kenzie Academy Brasil",
    date: "Mar 2023",
    skills: ["TypeScript", "React.js", "Node.js", "SQL", "Git", "API REST", "POO", "Testes"],
    url: "#",
  },
];

const ALURA_PROFILE_URL = "https://cursos.alura.com.br/user/guisilva19";

export default function Education() {
  return (
    <div className="relative min-h-screen px-6 sm:px-8 pt-24 md:pt-32 pb-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-12 md:mb-16 opacity-0 animate-fade-in-up">
          Educação
        </h1>

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
          <div className="flex items-center justify-between gap-4">
            <span className="font-extra-black text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Licenças e Certificados
            </span>
            <a
              href={ALURA_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-muted-foreground
                         hover:text-foreground transition-colors duration-300"
            >
              <span className="font-extra-black text-[10px] uppercase tracking-[0.15em]">
                Perfil Alura
              </span>
              <ExternalLink className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
          <div className="h-px bg-border mt-4 mb-6" />

          <div className="space-y-0">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title + cert.issuer}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 1.0 + index * 0.08,
                  ease: "easeOut",
                }}
                className="group py-5 border-b border-border/30 hover:border-border/60 transition-colors duration-300"
              >
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start justify-between gap-4"
                >
                  <div className="min-w-0">
                    <span className="inline-flex items-center gap-1.5 text-sm md:text-base font-medium text-foreground/70 group-hover:text-foreground transition-colors duration-300">
                      {cert.title}
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0" />
                    </span>
                    {cert.subtitle && (
                      <p className="text-xs text-muted-foreground/60 mt-0.5">
                        {cert.subtitle}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[10px] px-2 py-0.5 rounded-full border border-border/50 text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground shrink-0 mt-0.5">
                    {cert.issuer} · {cert.date}
                  </span>
                </a>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </div>
  );
}

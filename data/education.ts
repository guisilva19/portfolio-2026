import type { StaticImageData } from "next/image";

import angularCert from "@/assets/certificados/angular.png";
import solidCert from "@/assets/certificados/solid.png";
import javaCert from "@/assets/certificados/java.png";
import kenzieCert from "@/assets/certificados/kenzie.png";

export type EducationItem = {
  title: string;
  degree: string;
  institution: string;
  period: string;
  duration?: string;
  status: "cursando" | "concluído";
  description: string;
};

export type CertificateItem = {
  title: string;
  subtitle?: string;
  issuer: string;
  date: string;
  skills: string[];
  url: string;
  image: StaticImageData;
};

export const mainEducation: EducationItem[] = [
  {
    title: "Ciência da Computação",
    degree: "Bacharelado",
    institution: "UniFG Centro Universitário",
    period: "Jan 2023 — Dez 2027",
    status: "cursando",
    description:
      "Bacharelado em Ciência da Computação, com formação em desenvolvimento de software, algoritmos, estruturas de dados, banco de dados e redes de computadores.",
  },
  {
    title: "Desenvolvedor Full Stack",
    degree: "Formação Intensiva",
    institution: "Kenzie Academy Brasil",
    period: "Mar 2022 — Mar 2023",
    duration: "2.000 horas",
    status: "concluído",
    description:
      "Curso de 2.000 horas de Desenvolvimento Full Stack que abrange tecnologias Front End e Back End além de soft skills necessárias para o mercado de trabalho. Entre as linguagens e tecnologias aprendidas, estão HTML5, CSS3, JavaScript (ES6+), React, Node.js, Python (Django) e SQL.",
  },
];

export const certificates: CertificateItem[] = [
  {
    title: "Angular 19: estruture componentes com signals e controle de fluxo",
    subtitle: "Componentes com signals e controle de fluxo",
    issuer: "Alura",
    date: "Fev 2026",
    skills: ["Angular", "TypeScript"],
    url: "https://cursos.alura.com.br/certificate/5e5bfbb6-b64a-4798-9319-0bc296b11801?lang=pt_BR",
    image: angularCert,
  },
  {
    title: "SOLID com TypeScript",
    subtitle: "Aplicando boas práticas em orientação a objetos",
    issuer: "Alura",
    date: "Fev 2026",
    skills: ["SOLID", "Programação orientada a objetos (POO)"],
    url: "https://cursos.alura.com.br/certificate/5c353302-74f6-4e7b-bfef-d675726a116e?lang=pt_BR",
    image: solidCert,
  },
  {
    title: "Java Foundations",
    subtitle: "Fundamentos de programação Java e orientação a objetos",
    issuer: "Oracle",
    date: "Abr 2023",
    skills: ["Java", "Programação orientada a objetos (POO)"],
    url: "https://drive.google.com/file/d/1zonbXCfhoaWhSoKH2ABXj7mRBFxplHn_/view",
    image: javaCert,
  },
  {
    title: "Desenvolvedor Full Stack",
    subtitle: "Formação intensiva em desenvolvimento web",
    issuer: "Kenzie Academy Brasil",
    date: "Mar 2023",
    skills: ["React", "Node.js", "JavaScript", "Python", "SQL"],
    url: "#",
    image: kenzieCert,
  },
];

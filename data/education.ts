import type { StaticImageData } from "next/image";

import angularCert from "@/assets/certificados/angular.png";
import dockerCert from "@/assets/certificados/docker.png";
import estruturasDadosCert from "@/assets/certificados/dados.png";
import iaCert from "@/assets/certificados/ia.png";
import javaCert from "@/assets/certificados/java.png";
import kenzieCert from "@/assets/certificados/kenzie.png";
import modelagemCert from "@/assets/certificados/modelagem.png";
import solidCert from "@/assets/certificados/solid.png";

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
    title: "Desenvolvedor Full Stack",
    subtitle: "Formação intensiva em desenvolvimento web",
    issuer: "Kenzie Academy Brasil",
    date: "Mar 2023",
    skills: ["React", "Node.js", "JavaScript", "Python", "SQL"],
    url: "https://drive.google.com/file/d/1UxFQfMo8JkrDsnMHmjO_ZQyuZQkjF3dM/view?usp=sharing",
    image: kenzieCert,
  },
  {
    title: "Estruturas de dados e análise de algoritmos",
    subtitle: "160 horas",
    issuer: "UniFG Centro Universitário",
    date: "Dez 2025",
    skills: ["Estruturas de dados", "Algoritmos"],
    url: "https://drive.google.com/file/d/1NuVn38Gets9rxry_-GLvV8JpxejTk6_d/view?usp=sharing",
    image: estruturasDadosCert,
  },
  {
    title: "Docker: criando e gerenciando",
    subtitle: "Criando e gerenciando imagens",
    issuer: "Alura",
    date: "Mar 2026",
    skills: ["Docker", "Containers"],
    url: "https://cursos.alura.com.br/certificate/c30ab662-a479-469e-af11-4bbd47e6940c?lang=pt_BR",
    image: dockerCert,
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
    title: "Modelagem de software",
    subtitle: "160 horas",
    issuer: "UniFG Centro Universitário",
    date: "Jul 2023",
    skills: ["Modelagem", "UML", "Engenharia de software"],
    url: "https://drive.google.com/file/d/1qWu5OQFFVnuVK-cMCTY1V-NtftAinJ13/view?usp=sharing",
    image: modelagemCert,
  },
  {
    title: "Inteligência artificial",
    subtitle: "160 horas",
    issuer: "UniFG Centro Universitário",
    date: "Jul 2025",
    skills: ["Inteligência artificial", "Machine Learning"],
    url: "https://drive.google.com/file/d/13aQmaL_JWQgvy_VnKYIr_iSU7hmYk1VR/view?usp=sharing",
    image: iaCert,
  },
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
    title: "Java Foundations",
    subtitle: "Fundamentos de programação Java e orientação a objetos",
    issuer: "Oracle",
    date: "Abr 2023",
    skills: ["Java", "Programação orientada a objetos (POO)"],
    url: "https://drive.google.com/file/d/1zonbXCfhoaWhSoKH2ABXj7mRBFxplHn_/view",
    image: javaCert,
  },
];

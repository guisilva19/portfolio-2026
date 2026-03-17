import type { BlogPost } from "./types";

export const sqlVsNosql: BlogPost = {
  slug: "sql-vs-nosql-quando-usar-cada-um",
  title: "SQL vs NoSQL: quando usar cada um (de verdade)",
  summary:
    "A resposta honesta para essa discussão eterna. Não existe 'melhor' — existe o certo para o seu contexto. Aqui como eu decido no dia a dia.",
  date: "2025-01-30",
  readTime: "6 min",
  tags: ["Database", "SQL", "NoSQL", "Backend"],
  coverImage: "https://picsum.photos/seed/sql-nosql/1200/630",
  linkedinUrl: "https://www.linkedin.com/in/guilhermesilvafernandes/",
  content: [
    {
      type: "paragraph",
      text: "Toda vez que aparece essa discussão, vejo dois extremos: quem defende SQL pra tudo e quem acha que banco relacional é coisa do passado. A realidade é bem mais pragmática.",
    },
    {
      type: "heading",
      text: "Quando escolho SQL (PostgreSQL, MySQL)",
    },
    {
      type: "list",
      items: [
        "Dados com relacionamentos claros e que mudam pouco em estrutura",
        "Preciso de transações ACID (financeiro, e-commerce, inventário)",
        "Queries complexas com JOINs, agregações, filtros combinados",
        "Time já conhece SQL — produtividade importa mais que perfeição técnica",
      ],
    },
    {
      type: "paragraph",
      text: "PostgreSQL especificamente virou meu padrão. Ele suporta JSON nativamente, full-text search, extensões como pgvector para embeddings, e tem performance excelente para a maioria dos casos.",
    },
    {
      type: "heading",
      text: "Quando escolho NoSQL (MongoDB, Redis, DynamoDB)",
    },
    {
      type: "list",
      items: [
        "Schema muito flexível ou que muda frequentemente (fase inicial de produto)",
        "Cache e dados temporários → Redis",
        "Dados hierárquicos/aninhados que não fazem sentido em tabelas",
        "Escala horizontal massiva e latência ultra-baixa → DynamoDB",
      ],
    },
    {
      type: "heading",
      text: "O padrão que mais uso hoje",
    },
    {
      type: "paragraph",
      text: "PostgreSQL como banco principal + Redis para cache e sessões. Cobre 95% dos casos de uso de uma aplicação web moderna com performance sólida.",
    },
    {
      type: "code",
      language: "ts",
      text: `// Busca no Redis primeiro, cai no PostgreSQL se não tiver
async function getUserById(id: string) {
  const cached = await redis.get(\`user:\${id}\`);
  if (cached) return JSON.parse(cached);

  const user = await db.user.findUnique({ where: { id } });
  await redis.setex(\`user:\${id}\`, 300, JSON.stringify(user));
  return user;
}`,
    },
    {
      type: "heading",
      text: "O que evito",
    },
    {
      type: "image",
      src: "https://picsum.photos/seed/database-arch/900/450",
      alt: "Diagrama de arquitetura PostgreSQL + Redis",
      caption: "PostgreSQL + Redis — o padrão que uso em 95% dos projetos.",
    },
    {
      type: "paragraph",
      text: "Evito usar MongoDB para dados que claramente têm relacionamentos fortes. JOINs em NoSQL são dolorosos. Se você está fazendo lookup manual entre coleções com frequência, provavelmente deveria estar usando SQL.",
    },
    { type: "divider" },
    {
      type: "paragraph",
      text: "A melhor pergunta não é 'SQL ou NoSQL?' — é 'qual é a forma natural dos meus dados?'. Se eles são relacionais, use SQL. Se são documentos independentes, use NoSQL. Se precisar dos dois, use os dois.",
    },
  ],
};

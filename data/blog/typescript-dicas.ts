import type { BlogPost } from "./types";

export const typescriptDicas: BlogPost = {
  slug: "typescript-dicas-que-uso-todo-dia",
  title: "5 features de TypeScript que uso todo dia",
  summary:
    "Além dos tipos básicos, o TypeScript tem utilitários e padrões que economizam muito tempo. Aqui estão os que mais uso no meu trabalho como dev Full Stack.",
  date: "2025-02-18",
  readTime: "4 min",
  tags: ["TypeScript", "JavaScript", "Dev"],
  coverImage: "https://picsum.photos/seed/typescript-feat/1200/630",
  linkedinUrl: "https://www.linkedin.com/in/guilhermesilvafernandes/",
  content: [
    {
      type: "paragraph",
      text: "TypeScript vai muito além de 'JavaScript com tipos'. Depois de trabalhar com ele por anos, tenho um conjunto de features que uso quase todos os dias e que fazem diferença real na qualidade do código.",
    },
    {
      type: "heading",
      text: "1. Utility Types: Partial, Required, Pick, Omit",
    },
    {
      type: "code",
      language: "ts",
      text: `type User = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
};

// Apenas campos que quero atualizar
type UpdateUser = Partial<Pick<User, "name" | "email">>;

// Para criar um usuário, ID é gerado automaticamente
type CreateUser = Omit<User, "id">;`,
    },
    {
      type: "heading",
      text: "2. Discriminated Unions",
    },
    {
      type: "paragraph",
      text: "Em vez de um monte de booleanos opcionais, discriminated unions deixam o estado impossível de ser inválido.",
    },
    {
      type: "code",
      language: "ts",
      text: `type FetchState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; message: string };

// O TypeScript sabe exatamente o que está disponível
function render(state: FetchState<User>) {
  if (state.status === "success") {
    console.log(state.data.name); // ✅ tipado corretamente
  }
}`,
    },
    {
      type: "heading",
      text: "3. Template Literal Types",
    },
    {
      type: "code",
      language: "ts",
      text: `type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
type Endpoint = "/users" | "/posts" | "/comments";
type Route = \`\${HttpMethod} \${Endpoint}\`;
// "GET /users" | "POST /users" | "GET /posts" | ...`,
    },
    {
      type: "heading",
      text: "4. satisfies operator",
    },
    {
      type: "code",
      language: "ts",
      text: `const config = {
  port: 3000,
  host: "localhost",
  timeout: 5000,
} satisfies Record<string, string | number>;

// port ainda é number (não widened para string | number)
const doubled = config.port * 2; // ✅`,
    },
    {
      type: "heading",
      text: "5. infer em tipos condicionais",
    },
    {
      type: "code",
      language: "ts",
      text: `type ReturnType<T> = T extends (...args: unknown[]) => infer R ? R : never;
type AsyncReturn<T> = T extends Promise<infer R> ? R : T;

type Result = AsyncReturn<Promise<User>>; // User`,
    },
    {
      type: "image",
      src: "https://picsum.photos/seed/typescript-cheatsheet/900/450",
      alt: "Cheatsheet visual dos utility types do TypeScript",
      caption: "Utility types mais usados no dia a dia.",
    },
    { type: "divider" },
    {
      type: "paragraph",
      text: "TypeScript bem usado não é sobre adicionar tipos em tudo — é sobre usar o sistema de tipos para tornar estados inválidos irrepresentáveis. Essas features ajudam muito nisso.",
    },
  ],
};

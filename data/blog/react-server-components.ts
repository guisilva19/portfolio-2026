import type { BlogPost } from "./types";
import capaImg from "../server-components/capa.jpg";
import useeffectImg from "../server-components/useeffect.jpg";
import waterfallImg from "../server-components/waterfall.jpg";
import bundleImg from "../server-components/bundle.jpg";
import hydrationImg from "../server-components/hydration.jpg";

export const reactServerComponents: BlogPost = {
  slug: "por-que-voce-deveria-usar-react-server-components",
  title: "Por que você deveria usar React Server Components",
  summary:
    "RSC mudaram completamente a forma como penso sobre renderização. Menos JavaScript no cliente, dados mais perto do servidor — e tudo sem sacrificar a experiência do usuário.",
  date: "2026-04-02",
  readTime: "5 min",
  tags: ["React Server Components", "Performance", "App Router"],
  coverImage: capaImg,
  linkedinUrl: "https://www.linkedin.com/in/guilhermesilvafernandes/",
  content: [
    {
      type: "paragraph",
      text: "Quando o React anunciou os Server Components, minha primeira reação foi: 'mais uma abstração pra aprender'. Depois de alguns meses usando no dia a dia com Next.js App Router, preciso dizer — mudou minha forma de pensar sobre arquitetura front-end.",
    },
    {
      type: "heading",
      text: "O problema que RSC resolve",
    },
    {
      type: "paragraph",
      text: "Antes, buscar dados no front-end significava: componente monta → useEffect dispara → loading state → dado chega → renderiza. Isso gera waterfalls, flicker na tela e JavaScript desnecessário no bundle do cliente.",
    },
    {
      type: "paragraph",
      text: "Com Server Components, o componente roda no servidor, busca os dados diretamente (banco, API interna, filesystem), e envia o HTML final para o cliente. Zero JS de hidratação pra esse componente.",
    },
    {
      type: "heading",
      text: "Na prática",
    },
    {
      type: "code",
      language: "tsx",
      text: `// Server Component — roda no servidor
async function UserProfile({ id }: { id: string }) {
  const user = await db.user.findUnique({ where: { id } });
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
    </div>
  );
}`,
    },
    {
      type: "paragraph",
      text: "Nenhum useEffect, nenhum loading state, nenhum JS no cliente. O dado já vem pronto do servidor.",
    },
    {
      type: "gallery",
      images: [
        { src: useeffectImg, alt: "Sem useEffect — dados buscados direto no servidor" },
        { src: waterfallImg, alt: "Zero waterfall — fetches em paralelo no servidor" },
        { src: bundleImg, alt: "Bundle menor — dependências ficam no servidor" },
        { src: hydrationImg, alt: "Hydration seletiva — só o que precisa hidrata" },
      ],
      caption: "Client Component vs Server Component — comparativo visual.",
    },
    {
      type: "heading",
      text: "Quando NÃO usar",
    },
    {
      type: "list",
      items: [
        "Componentes com interatividade (onClick, useState, useEffect)",
        "Acesso a APIs do browser (localStorage, window)",
        "Componentes que precisam de WebSockets ou estado em tempo real",
      ],
    },
    {
      type: "paragraph",
      text: "A regra é simples: tudo que precisa de interatividade continua sendo Client Component. O restante pode — e deve — virar Server Component.",
    },
    { type: "divider" },
    {
      type: "paragraph",
      text: "A grande virada mental é perceber que agora você tem granularidade: não é 'a página é SSR ou CSR', é 'cada componente decide onde roda'. Isso muda tudo.",
    },
  ],
};

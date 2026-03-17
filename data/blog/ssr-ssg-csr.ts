import type { BlogPost } from "./types";
import capaImg from "../seo/capa.jpeg";
import ssrImg from "../seo/ssr.jpeg";
import ssgImg from "../seo/ssg.jpeg";
import csrImg from "../seo/csr.jpeg";

export const ssrSsgCsr: BlogPost = {
  slug: "ssr-ssg-csr-decisao-tecnica-e-trade-offs",
  title: "SSR, SSG ou CSR? Não é sobre a stack. É sobre decisão técnica e trade-offs.",
  summary:
    "A escolha não é sobre framework. É sobre TTL dos dados, padrão de acesso, quem renderiza e quem paga o custo.",
  date: "2026-03-03",
  readTime: "5 min",
  tags: ["Next.js", "React", "Frontend", "Performance", "SEO"],
  coverImage: capaImg,
  linkedinUrl: "https://www.linkedin.com/posts/guilhermesilvafernandes_nextjs-react-frontend-activity-7432899774015492096-tGuX?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnY0ysBaRAzCzIMNZApDeyb_G7vq__sxE0",
  content: [
    {
      type: "paragraph",
      text: "Sempre que aparece uma discussão sobre Next.js, alguém pergunta: 'mas você usa SSR ou SSG?' Como se a resposta fosse uma só. Na prática, uma mesma aplicação pode — e geralmente deve — usar as três estratégias ao mesmo tempo, cada uma onde faz sentido.",
    },
    {
      type: "paragraph",
      text: "A decisão certa não é sobre tecnologia. É sobre TTL dos dados, padrão de acesso, quem renderiza e quem paga o custo.",
    },
    {
      type: "heading",
      text: "SSR — quando o servidor precisa saber quem está pedindo",
    },
    {
      type: "image",
      src: ssrImg,
      alt: "SSR — quando o servidor precisa saber quem está pedindo",
    },
    {
      type: "list",
      items: [
        "Dado com TTL próximo de zero — preço em tempo real, feed personalizado, estoque. Cache inválido antes de sair do servidor.",
        "SEO em conteúdo dinâmico — crawlers leem HTML completo no primeiro byte. TTFB maior, mas FCP com conteúdo real.",
        "Dados que não podem tocar o cliente — tokens, chaves de API e lógica de negócio sensível ficam no server boundary.",
      ],
    },
    {
      type: "heading",
      text: "SSG — HTML gerado uma vez, servido infinitas vezes",
    },
    {
      type: "image",
      src: ssgImg,
      alt: "SSG — HTML gerado uma vez, servido infinitas vezes",
    },
    {
      type: "list",
      items: [
        "Dado estático com TTL alto — docs, blog, landing page. CDN entrega o HTML sem tocar o servidor de origem.",
        "Core Web Vitals máximos — LCP vem de arquivo estático, zero hydration blocking no critical path.",
        "Escala: 100k páginas = 100k arquivos. Build vira gargalo. ISR resolve com revalidação por rota — mas introduz stale window.",
      ],
    },
    {
      type: "heading",
      text: "CSR — o cliente monta tudo. Você paga o bundle.",
    },
    {
      type: "image",
      src: csrImg,
      alt: "CSR — o cliente monta tudo. Você paga o bundle.",
    },
    {
      type: "list",
      items: [
        "SEO não é requisito — dashboards, SPAs internas, ferramentas logadas. Crawler irrelevante aqui.",
        "Estado complexo e alta interatividade — real-time, drag-and-drop, UX que depende de ações encadeadas do usuário.",
        "FCP é HTML vazio até o JS hidratar. Bundle size e device do usuário definem a percepção de performance — INP e TBT sofrem em devices fracos.",
      ],
    },
    { type: "divider" },
    {
      type: "heading",
      text: "Como decido na prática",
    },
    {
      type: "list",
      items: [
        "Landing pages, blog, documentação → SSG",
        "E-commerce com preço/estoque em tempo real → SSR",
        "Dashboard, área logada, dados do usuário → CSR",
        "Página de produto com dados semi-estáticos → SSG + ISR (revalidação incremental)",
      ],
    },
    {
      type: "paragraph",
      text: "O Next.js App Router facilita muito isso: cada página e cada componente podem ter estratégias diferentes. Um layout pode ser estático enquanto um componente filho busca dados frescos no servidor.",
    },
    {
      type: "paragraph",
      text: "A decisão certa não é a que usa a tecnologia mais nova. É a que entrega a melhor experiência pro usuário com o menor custo de infraestrutura e manutenção.",
    },
  ],
};

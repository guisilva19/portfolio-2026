import type { BlogPost } from "./types";
import capaImg from "../solid/capa.jpg";
import sImg from "../solid/s.jpg";
import oImg from "../solid/o.jpg";
import lImg from "../solid/l.jpg";
import iImg from "../solid/i.jpg";
import dImg from "../solid/d.jpg";

export const solidPrinciples: BlogPost = {
  slug: "solid-principios-que-todo-dev-deveria-conhecer",
  title: "SOLID — Princípios que todo dev deveria conhecer",
  summary:
    "Sem SOLID, o sistema não é escalável — é apenas acumulativo. Adicionar uma feature simples vira um épico de três sprints.",
  date: "2026-03-18",
  readTime: "6 min",
  tags: ["Arquitetura", "SOLID", "Programação Orientada a Objetos"],
  coverImage: capaImg,
  linkedinUrl: "https://www.linkedin.com/in/guilhermesilvafernandes/",
  content: [
    {
      type: "paragraph",
      text: "SOLID é um acrônimo para cinco princípios de design orientado a objetos que, juntos, tornam o código mais fácil de manter, estender e testar. Eles não são regras rígidas — são guias para tomar decisões melhores de arquitetura.",
    },
    {
      type: "heading",
      text: "S — Single Responsibility",
    },
    {
      type: "paragraph",
      text: "Uma classe deve ter um único motivo para mudar. God Classes acumulam responsabilidades e, com elas, acumulam bugs. Quanto mais responsabilidades, mais difícil isolar onde está o problema.",
    },
    {
      type: "image",
      src: sImg,
      alt: "S — Single Responsibility Principle",
    },
    {
      type: "code",
      language: "typescript",
      text: `class EmailService    { send() {} }
class UserRepository { save() {} }
// separados. claros. testáveis.`,
    },
    {
      type: "heading",
      text: "O — Open/Closed",
    },
    {
      type: "paragraph",
      text: "Aberto para extensão, fechado para modificação. O problema do if/else infinito: a cada nova regra, você abre o mesmo arquivo e arrisca quebrar o que já funciona. Com OCP, você adiciona o Pix sem tocar no código do Cartão de Crédito.",
    },
    {
      type: "image",
      src: oImg,
      alt: "O — Open/Closed Principle",
    },
    {
      type: "code",
      language: "typescript",
      text: `class PixPayment  implements Payment {}
class CardPayment implements Payment {}
// Payment nunca muda. você só adiciona.`,
    },
    {
      type: "heading",
      text: "L — Liskov Substitution",
    },
    {
      type: "paragraph",
      text: "Subclasses devem honrar o contrato da classe pai. Sobrescrever métodos de forma inesperada gera erros silenciosos em runtime. Se a classe pai promete um comportamento, a filha entrega o mesmo — ou mais.",
    },
    {
      type: "image",
      src: lImg,
      alt: "L — Liskov Substitution Principle",
    },
    {
      type: "code",
      language: "typescript",
      text: `function process(payment: Payment) {}
process(new PixPayment())  // ✓
process(new CardPayment()) // ✓`,
    },
    {
      type: "heading",
      text: "I — Interface Segregation",
    },
    {
      type: "paragraph",
      text: "Interfaces pequenas, sem bagagem desnecessária. Fat interfaces geram acoplamento falso — você implementa métodos que não usa só para satisfazer um contrato gigante. Granularidade é poder.",
    },
    {
      type: "image",
      src: iImg,
      alt: "I — Interface Segregation Principle",
    },
    {
      type: "code",
      language: "typescript",
      text: `interface Printable { print() }
interface Saveable  { save() }
// não: interface GodInterface { print(); save(); send(); }`,
    },
    {
      type: "heading",
      text: "D — Dependency Inversion",
    },
    {
      type: "paragraph",
      text: "Dependa de abstrações, não de implementações. Quando o repositório muda, a regra de negócio não deve quebrar junto. Sua lógica depende de uma interface — o banco, a API, o mock são detalhes.",
    },
    {
      type: "image",
      src: dImg,
      alt: "D — Dependency Inversion Principle",
    },
    {
      type: "code",
      language: "typescript",
      text: `class OrderService {
  constructor(private repo: IOrderRepo) {}
}
// repo pode ser Postgres, Mongo ou Mock
// a regra não sabe e não precisa saber.`,
    },
    { type: "divider" },
    {
      type: "paragraph",
      text: "SOLID não é sobre seguir regras à risca — é sobre construir sistemas onde adicionar uma feature não significa reescrever o que já funciona. Quando você internaliza esses princípios, a arquitetura começa a emergir naturalmente.",
    },
    {
      type: "list",
      items: [
        "S: Uma classe, um motivo para mudar",
        "O: Extensível sem modificar o núcleo",
        "L: Subclasses honram o contrato da pai",
        "I: Interfaces pequenas e focadas",
        "D: Dependa de abstrações, não de concreto",
      ],
    },
  ],
};

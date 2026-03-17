export type { ImageSrc, BlogSection, BlogPost } from "./types";

import { ssrSsgCsr } from "./ssr-ssg-csr";
import { reactServerComponents } from "./react-server-components";
import { solidPrinciples } from "./solid";
import { typescriptDicas } from "./typescript-dicas";
import { sqlVsNosql } from "./sql-vs-nosql";

export const blogPosts = [
  ssrSsgCsr,
  solidPrinciples,
  // reactServerComponents,
  // typescriptDicas,
  // sqlVsNosql,
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export type { ImageSrc, BlogSection, BlogPost } from "./types";

import { ssrSsgCsr } from "./ssr-ssg-csr";
import { reactServerComponents } from "./react-server-components";
import { typescriptDicas } from "./typescript-dicas";
import { sqlVsNosql } from "./sql-vs-nosql";

export const blogPosts = [
  ssrSsgCsr,
  reactServerComponents,
  typescriptDicas,
  sqlVsNosql,
];

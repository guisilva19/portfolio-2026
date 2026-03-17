import type { StaticImageData } from "next/image";

export type ImageSrc = string | StaticImageData;

export type BlogSection =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "code"; language: string; text: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: ImageSrc; alt: string; caption?: string }
  | { type: "gallery"; images: { src: ImageSrc; alt: string }[]; caption?: string }
  | { type: "divider" };

export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  tags: string[];
  coverImage?: ImageSrc;
  linkedinUrl?: string;
  content: BlogSection[];
};

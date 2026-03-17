"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { motion } from "motion/react";
import { ArrowLeft, Clock, Calendar, Linkedin } from "lucide-react";
import PageContainer from "@/components/PageContainer";
import { blogPosts, type BlogSection } from "@/data/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

function renderSection(section: BlogSection, index: number) {
  switch (section.type) {
    case "paragraph":
      return (
        <p key={index} className="text-base md:text-lg text-foreground/75 leading-relaxed">
          {section.text}
        </p>
      );
    case "heading":
      return (
        <h2
          key={index}
          className="text-xl md:text-2xl font-bold text-foreground mt-2"
        >
          {section.text}
        </h2>
      );
    case "code":
      return (
        <div key={index} className="relative group">
          <span className="absolute top-3 right-4 text-xs text-muted-foreground/60 font-mono">
            {section.language}
          </span>
          <pre className="overflow-x-auto rounded-xl bg-muted/60 border border-border/60 p-5 text-sm font-mono text-foreground/80 leading-relaxed">
            <code>{section.text}</code>
          </pre>
        </div>
      );
    case "list":
      return (
        <ul key={index} className="flex flex-col gap-2 pl-1">
          {section.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-base text-foreground/75 leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground/40 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "image":
      return (
        <figure key={index} className="my-2">
          <div className="relative w-full rounded-xl overflow-hidden border border-border/50 aspect-square">
            <Image
              src={section.src}
              alt={section.alt}
              fill
              quality={100}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 700px"
            />
          </div>
          {section.caption && (
            <figcaption className="mt-3 text-center text-xs text-muted-foreground italic">
              {section.caption}
            </figcaption>
          )}
        </figure>
      );
    case "gallery": {
      const count = section.images.length;
      const gridClass =
        count === 1
          ? "grid-cols-1"
          : count === 2
          ? "grid-cols-2"
          : count === 3
          ? "grid-cols-2"
          : "grid-cols-2";

      return (
        <figure key={index} className="my-2">
          <div className={`grid ${gridClass} gap-1.5`}>
            {section.images.map((img, i) => {
              const isOddLast = count === 3 && i === 0;
              return (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-xl border border-border/50 ${
                    isOddLast ? "col-span-2" : ""
                  } aspect-square`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    quality={100}
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 350px"
                  />
                </div>
              );
            })}
          </div>
          {section.caption && (
            <figcaption className="mt-3 text-center text-xs text-muted-foreground italic">
              {section.caption}
            </figcaption>
          )}
        </figure>
      );
    }
    case "divider":
      return <hr key={index} className="border-border/40" />;
    default:
      return null;
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = use(params);
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <PageContainer className="px-6 sm:px-8 pt-32 md:pt-28 pb-20">
      <div className="max-w-[700px] md:max-w-[700px] xl:max-w-2xl mx-auto md:ml-64 xl:ml-auto">

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Todos os posts
          </Link>
        </motion.div>

        {/* Cover image */}
        {post.coverImage && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative w-full rounded-2xl overflow-hidden border border-border/50 aspect-square mb-10"
          >
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              quality={100}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 700px"
            />
          </motion.div>
        )}

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: post.coverImage ? 0.2 : 0.1 }}
          className="mb-10"
        >
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-foreground/8 text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            {post.title}
          </h1>

          <p className="text-base md:text-lg text-foreground/50 leading-relaxed mb-6">
            {post.summary}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-5 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {formattedDate}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime} leitura
              </span>
            </div>

            {post.linkedinUrl && (
              <a
                href={post.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border/60 text-xs text-muted-foreground hover:text-foreground hover:border-border transition-all duration-200"
              >
                <Linkedin className="w-3.5 h-3.5" />
                Ver no LinkedIn
              </a>
            )}
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="h-px bg-border mb-10 origin-left"
        />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col gap-6"
        >
          {post.content.map((section, i) => renderSection(section, i))}
        </motion.div>

        {/* Footer navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-16 pt-8 border-t border-border/40"
        >
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Voltar para o Blog
          </Link>
        </motion.div>
      </div>
    </PageContainer>
  );
}

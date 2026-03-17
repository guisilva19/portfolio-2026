"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import type { BlogPost, ImageSrc } from "@/data/blog";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.1, ease: "easeOut" }}
    >
      <Link href={`/blog/${post.slug}`} className="group block">
        <article className="relative rounded-2xl border border-border/60 bg-muted/20 hover:bg-muted/40 hover:border-border transition-all duration-300 overflow-hidden">
          {/* Cover image */}
          {post.coverImage && (
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src={post.coverImage as ImageSrc}
                alt={post.title}
                fill
                quality={100}
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 500px"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
            </div>
          )}

          <div className="p-4">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-foreground/8 text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h2 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-foreground/80 transition-colors leading-snug">
              {post.title}
            </h2>

            {/* Summary */}
            <p className="text-xs text-foreground/50 leading-relaxed mb-4 line-clamp-2">
              {post.summary}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {formattedDate}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime} leitura
                </span>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                Ler
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}

"use client";

import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { Linkedin, Search } from "lucide-react";
import PageContainer from "@/components/PageContainer";
import { BlogCard } from "@/components/blog/BlogCard";
import { blogPosts } from "@/data/blog";

const ALL_TAG = "Todos";

export default function Blog() {
  const [activeTag, setActiveTag] = useState<string>(ALL_TAG);
  const [query, setQuery] = useState("");

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    blogPosts.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return [ALL_TAG, ...Array.from(tags).sort()];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return blogPosts.filter((p) => {
      const matchesTag = activeTag === ALL_TAG || p.tags.includes(activeTag);
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q);
      return matchesTag && matchesQuery;
    });
  }, [activeTag, query]);

  return (
    <PageContainer className="px-6 sm:px-8 pt-32 md:pt-28 pb-20">
      <div className="max-w-[700px] md:max-w-[700px] xl:max-w-4xl mx-auto md:ml-64 xl:ml-auto">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12 md:mb-16">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground opacity-0 animate-fade-in-up">
              Blog
            </h1>
            <p className="mt-3 text-sm md:text-base text-foreground/50 opacity-0 animate-fade-in animation-delay-200">
              Posts técnicos sobre o que aprendo, uso e discuto no dia a dia.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/guilhermesilvafernandes/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg
                       bg-[oklch(0.145_0.025_250)] text-white
                       dark:bg-white dark:text-[oklch(0.145_0.025_250)]
                       text-sm font-medium hover:opacity-90
                       transition-all duration-300 opacity-0 animate-fade-in animation-delay-400"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Search input */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="relative mb-4"
        >
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          <input
            type="text"
            placeholder="Buscar post..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm bg-muted/40 border border-border/60 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-border transition-all"
          />
        </motion.div>

        {/* Tag filter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {allTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={`cursor-pointer px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                activeTag === tag
                  ? "bg-foreground text-background"
                  : "bg-muted/80 text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Posts grid */}
        {filtered.length === 0 ? (
          <p className="text-sm text-muted-foreground py-12 text-center">
            Nenhum post encontrado.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {filtered.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        )}
      </div>
    </PageContainer>
  );
}

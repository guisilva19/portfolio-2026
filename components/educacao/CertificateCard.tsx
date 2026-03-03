"use client";

import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

type CertificateCardProps = {
  title: string;
  subtitle?: string;
  issuer: string;
  date: string;
  skills: string[];
  url: string;
  image: StaticImageData | null;
  index: number;
};

export function CertificateCard({
  title,
  subtitle,
  issuer,
  date,
  skills,
  url,
  image,
  index,
}: CertificateCardProps) {
  const hasLink = url && url !== "#";
  const CardWrapper = hasLink ? motion.a : motion.div;
  const linkProps = hasLink
    ? { href: url, target: "_blank", rel: "noopener noreferrer" as const }
    : {};

  return (
    <CardWrapper
      {...linkProps}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.25,
        delay: index * 0.03,
        ease: "easeOut",
      }}
      className="group relative overflow-hidden rounded-xl border border-border/60 aspect-4/3 min-h-[180px]"
    >
      <div className="absolute inset-0 bg-muted/30 rounded-xl overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-linear-to-br from-muted to-muted/50 flex items-center justify-center">
            <span className="text-4xl font-bold text-muted-foreground/30">
              {issuer[0]}
            </span>
          </div>
        )}
      </div>

      <div className="absolute -inset-px rounded-xl overflow-hidden bg-foreground/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col p-5 justify-between text-background">
        <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col justify-between flex-1 min-h-0 gap-3">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-medium uppercase tracking-wider text-background/70">
                {issuer}
              </span>
              <span className="text-background/40">·</span>
              <span className="text-[10px] text-background/60">{date}</span>
            </div>
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="text-sm font-semibold text-background line-clamp-2">
                {title}
              </h3>
              {hasLink && (
                <ExternalLink className="w-3.5 h-3.5 shrink-0 mt-0.5 text-background/60 group-hover:text-background transition-colors" />
              )}
            </div>
            {subtitle && (
              <p className="text-xs text-background/80 line-clamp-2">
                {subtitle}
              </p>
            )}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {skills.slice(0, 3).map((skill) => (
              <span
                key={skill}
                className="text-[10px] px-2 py-0.5 rounded-full bg-background/20 border border-background/30 text-background/90"
              >
                {skill}
              </span>
            ))}
            {skills.length > 3 && (
              <span className="text-[10px] px-2 py-0.5 text-background/60">
                +{skills.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </CardWrapper>
  );
}

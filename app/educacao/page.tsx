"use client";

import { useCallback } from "react";
import { motion } from "motion/react";
import { ExternalLink, Search } from "lucide-react";
import PageContainer from "@/components/PageContainer";
import { CertificateCard } from "@/components/educacao/CertificateCard";
import { mainEducation, certificates } from "@/data/education";
import { useFilteredCertificates } from "@/hooks/use-filtered-certificates";
import { useInView } from "@/hooks/use-in-view";

const ALURA_PROFILE_URL = "https://cursos.alura.com.br/user/guisilva19";

export default function Education() {
  const {
    search,
    setSearch,
    sortOrder,
    setSortOrder,
    issuerFilter,
    setIssuerFilter,
    issuerOptions,
    filteredAndSortedCertificates,
  } = useFilteredCertificates(certificates);

  const { ref: certificatesRef, isInView } = useInView();

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value),
    [setSearch]
  );

  const handleSortChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) =>
      setSortOrder(e.target.value as "recentes" | "antigos"),
    [setSortOrder]
  );

  const handleIssuerClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const value = e.currentTarget.dataset.value;
      if (value) setIssuerFilter(value);
    },
    [setIssuerFilter]
  );

  return (
    <PageContainer className="px-6 sm:px-8 pt-32 md:pt-28 pb-20">
      <div className="max-w-[700px] md:max-w-[700px] xl:max-w-4xl mx-auto md:ml-64 xl:ml-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12 md:mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground opacity-0 animate-fade-in-up">
            Educação
          </h1>
          <a
            href={ALURA_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg
                       bg-[oklch(0.145_0.025_250)] text-white
                       dark:bg-white dark:text-[oklch(0.145_0.025_250)]
                       text-sm font-medium hover:opacity-90
                       transition-all duration-300 opacity-0 animate-fade-in animation-delay-400"
          >
            <span>Perfil Alura</span>
            <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Formação acadêmica */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 xl:gap-12 mb-16 md:mb-[50px]">
          {mainEducation.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.3,
                ease: "easeOut",
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="font-extra-black text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {item.period}
                </span>
                <div className="flex-1 h-px bg-border" />
                <span
                  className={`
                    inline-flex items-center gap-2 font-extra-black text-xs uppercase tracking-[0.2em]
                    ${
                      item.status === "cursando"
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-muted-foreground"
                    }
                  `}
                >
                  {item.status === "cursando" && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                  )}
                  {item.status}
                </span>
              </div>

              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-2">
                {item.title}
              </h2>

              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
                <span>{item.institution}</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                <span>{item.degree}</span>
                {item.duration && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                    <span>{item.duration}</span>
                  </>
                )}
              </div>

              <p className="text-sm md:text-base text-foreground/50 leading-relaxed max-w-2xl">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Licenças e certificados */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-extra-black text-xs uppercase tracking-[0.25em] text-muted-foreground shrink-0">
              Licenças e Certificados
            </span>
            <div className="flex-1 h-px bg-border min-w-0" />
          </div>

          <div className="flex flex-col gap-4 mb-8 p-4 rounded-xl bg-muted/40 border border-border/50">
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <div className="relative flex-1 min-w-0">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                <input
                  type="search"
                  placeholder="Buscar..."
                  value={search}
                  onChange={handleSearchChange}
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-border/60 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50"
                />
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <label htmlFor="sort-cert" className="text-xs text-muted-foreground whitespace-nowrap">
                  Ordenar:
                </label>
                <select
                  id="sort-cert"
                  value={sortOrder}
                  onChange={handleSortChange}
                  className="px-3 py-2 text-sm rounded-lg border border-border/60 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring/50"
                >
                  <option value="recentes">Mais recentes</option>
                  <option value="antigos">Menos recentes</option>
                </select>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {issuerOptions.map(({ value, label }) => (
                <button
                  key={value}
                  type="button"
                  data-value={value}
                  onClick={handleIssuerClick}
                  className={`cursor-pointer px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                    issuerFilter === value
                      ? "bg-foreground text-background"
                      : "bg-muted/80 text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {filteredAndSortedCertificates.length === 0 ? (
            <p className="text-sm text-muted-foreground py-8 text-center">
              Nenhum certificado encontrado.
            </p>
          ) : (
          <div
            ref={certificatesRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 min-h-[360px]"
          >
            {isInView
              ? filteredAndSortedCertificates.map((cert, index) => (
                  <CertificateCard
                    key={`${cert.title}-${cert.issuer}`}
                    title={cert.title}
                    subtitle={cert.subtitle}
                    issuer={cert.issuer}
                    date={cert.date}
                    skills={cert.skills}
                    url={cert.url}
                    image={cert.image}
                    index={index}
                  />
                ))
              : Array.from({ length: filteredAndSortedCertificates.length }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-border/60 aspect-4/3 min-h-[180px] bg-muted/30 animate-pulse"
                  />
                ))}
          </div>
          )}

        </motion.div>
      </div>
    </PageContainer>
  );
}

import { useMemo, useState } from "react";

const MES_PARA_NUM: Record<string, number> = {
  Jan: 1, Fev: 2, Mar: 3, Abr: 4, Mai: 5, Jun: 6,
  Jul: 7, Ago: 8, Set: 9, Out: 10, Nov: 11, Dez: 12,
};

function parseDateForSort(dateStr: string): number {
  const [mes, ano] = dateStr.split(" ");
  const mesNum = MES_PARA_NUM[mes] ?? 0;
  const anoNum = parseInt(ano ?? "0", 10);
  return anoNum * 12 + mesNum;
}

export type Certificate = {
  title: string;
  subtitle?: string;
  issuer: string;
  date: string;
  skills: string[];
  url: string;
  image: unknown;
};

export function useFilteredCertificates<T extends Certificate>(
  certificates: T[]
) {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState<"recentes" | "antigos">("recentes");
  const [issuerFilter, setIssuerFilter] = useState<string>("Todos");

  const issuerOptions = useMemo(() => {
    const issuers = [...new Set(certificates.map((c) => c.issuer))].sort();
    return [
      { value: "Todos", label: "Todos" },
      ...issuers.map((issuer) => ({
        value: issuer,
        label: issuer === "Kenzie Academy Brasil" ? "Kenzie" : issuer,
      })),
    ];
  }, [certificates]);

  const filteredAndSortedCertificates = useMemo((): T[] => {
    const q = search.trim().toLowerCase();
    let list = certificates;

    if (issuerFilter !== "Todos") {
      list = list.filter((cert) => cert.issuer === issuerFilter);
    }

    if (q) {
      list = list.filter(
        (cert) =>
          cert.title.toLowerCase().includes(q) ||
          cert.subtitle?.toLowerCase().includes(q) ||
          cert.issuer.toLowerCase().includes(q) ||
          cert.skills.some((s) => s.toLowerCase().includes(q))
      );
    }

    return [...list].sort((a, b) => {
      const dateA = parseDateForSort(a.date);
      const dateB = parseDateForSort(b.date);
      return sortOrder === "recentes" ? dateB - dateA : dateA - dateB;
    });
  }, [certificates, search, sortOrder, issuerFilter]);

  return {
    search,
    setSearch,
    sortOrder,
    setSortOrder,
    issuerFilter,
    setIssuerFilter,
    issuerOptions,
    filteredAndSortedCertificates,
  };
}

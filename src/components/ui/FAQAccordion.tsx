"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Search, ArrowRight, HelpCircle } from "lucide-react";
import { faqData, FAQItem } from "@/config/faq";

interface FAQAccordionProps {
  initialCategory?: string;
  limit?: number;
  showCategoryFilters?: boolean;
}

export function FAQAccordion({
  initialCategory = "all",
  limit,
  showCategoryFilters = true,
}: FAQAccordionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [openIds, setOpenIds] = useState<string[]>(["price-aed-100"]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "pricing", label: "Pricing & AED 100" },
    { id: "psychometric", label: "Psychometric Assessment" },
    { id: "counselling", label: "Curricula & Subjects" },
    { id: "admissions", label: "Study Abroad Admissions" },
    { id: "parents", label: "Parents & Privacy" },
  ];

  const filteredItems = faqData.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  return (
    <div className="space-y-6">
      {/* Category filters & search */}
      {showCategoryFilters && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`py-2 px-3.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? "bg-ink text-white shadow-sm"
                    : "bg-white text-ink/75 hover:bg-teal-light/50 border border-border"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative max-w-md">
            <Search className="w-4 h-4 text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search frequently asked questions..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border text-xs text-ink bg-white focus:outline-none focus:ring-2 focus:ring-teal/40"
            />
          </div>
        </div>
      )}

      {/* Accordion list */}
      <div className="space-y-3">
        {displayedItems.map((item) => {
          const isOpen = openIds.includes(item.id);
          return (
            <div
              key={item.id}
              className={`rounded-2xl border transition-all ${
                isOpen
                  ? "bg-white border-teal/40 shadow-sm"
                  : "bg-white/80 border-border hover:border-teal/30"
              }`}
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-4 focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-lg bg-teal-light text-teal flex items-center justify-center flex-shrink-0 text-xs mt-0.5">
                    <HelpCircle className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-teal font-extrabold block mb-1">
                      {item.categoryLabel}
                    </span>
                    <h4 className="font-display font-bold text-sm sm:text-base text-ink">
                      {item.question}
                    </h4>
                  </div>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-muted transition-transform flex-shrink-0 mt-1 ${
                    isOpen ? "rotate-180 text-teal" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 pl-14 text-xs sm:text-sm text-muted leading-relaxed border-t border-border/40 mt-1 animate-in fade-in duration-150">
                  <p>{item.answer}</p>
                  {item.relevantLinks && item.relevantLinks.length > 0 && (
                    <div className="pt-3 flex flex-wrap gap-2">
                      {item.relevantLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="inline-flex items-center gap-1 text-xs font-bold text-teal hover:text-teal-dark hover:underline"
                        >
                          <span>{link.label}</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}

        {displayedItems.length === 0 && (
          <div className="p-8 text-center bg-white rounded-2xl border border-border text-xs text-muted">
            No questions matching your search. Browse all categories or contact our team directly.
          </div>
        )}
      </div>
    </div>
  );
}

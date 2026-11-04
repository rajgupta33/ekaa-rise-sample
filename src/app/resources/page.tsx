import { ResourceLibrary } from "@/components/interior/ResourceLibrary";
import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { BookOpen, Sparkles, ArrowRight, Clock, Search } from "lucide-react";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { articlesData } from "@/config/articles";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Career & Study Abroad Guides for Dubai Students | EKAA Rise",
  description: "Read practical guides on psychometric testing, Dubai school subject choices and international university applications.",
  canonicalPath: "/resources",
  keywords: [
    "career guidance resources Dubai",
    "study abroad guides Dubai",
    "high school education articles UAE",
  ],
});

export default function ResourcesHubPage() { return <ResourceLibrary/>; }

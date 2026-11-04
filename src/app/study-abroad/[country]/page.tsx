import { CountryExperience } from "@/components/interior/CountryExperience";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { 
  Compass, 
  ArrowRight, 
  Check, 
  Calendar, 
  GraduationCap, 
  BookOpen, 
  AlertCircle,
  HelpCircle,
  FileCheck2,
  CheckCircle2
} from "lucide-react";
import { destinations, Destination } from "@/config/destinations";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { constructMetadata } from "@/lib/seo";

interface DestinationPageProps {
  params: {
    country: string;
  };
}

export function generateStaticParams() {
  return Object.keys(destinations).map((country) => ({
    country,
  }));
}

export function generateMetadata({ params }: DestinationPageProps): Metadata {
  const dest = destinations[params.country];
  if (!dest) return {};

  return constructMetadata({
    title: dest.metaTitle,
    description: dest.metaDescription,
    canonicalPath: `/study-abroad/${dest.slug}`,
    keywords: [
      `study in ${dest.name} from Dubai`,
      `${dest.name} university admissions Dubai`,
      `study abroad ${dest.name} consultant`,
    ],
    ogImage: dest.heroImage,
  });
}

export default function DestinationDetailPage({ params }: DestinationPageProps) {
 const dest = destinations[params.country];
 if (!dest) notFound();
 return <CountryExperience destination={dest}/>;
}

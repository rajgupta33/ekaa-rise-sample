"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { siteConfig } from "@/config/site";

export function PreviewBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed || !siteConfig.features.previewMode) {
    return null;
  }

  return (
    <div className="border-b border-white/10 bg-[#10242B] px-4 py-1.5 text-[#E4ECE9]">
      <div className="shell flex items-center justify-between gap-3 text-[10px] leading-tight sm:text-[11px]">
        <div className="flex min-w-0 items-center gap-2">
          <span className="h-1.5 w-1.5 flex-none rounded-full bg-[#B87955]" aria-hidden="true" />
          <span className="truncate font-medium">Preview site · forms are demos; no payment is taken</span>
        </div>
        <div className="flex flex-shrink-0 items-center gap-3">
          <Link
            href="/faq"
            className="hidden text-[#D7A982] hover:underline sm:inline"
          >
            Learn more
          </Link>
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss banner"
            className="text-ivory/60 hover:text-white p-1 rounded hover:bg-white/10 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

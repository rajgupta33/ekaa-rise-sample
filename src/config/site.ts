export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  subline: string;
  description: string;
  location: string;
  primaryPrice: {
    amount: number;
    currency: string;
    formatted: string;
    label: string;
    priceNotice: string;
  };
  contact: {
    locationServed: string;
    verifiedNote: string;
    officialHours: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
  };
  features: {
    previewMode: boolean;
    showApprovalPlaceholders: boolean;
    enableLivePayment: boolean;
    enableCounsellorProfiles: boolean;
    enableStudentStories: boolean;
  };
}

export const siteConfig: SiteConfig = {
  name: "EKAA Rise",
  shortName: "EKAA",
  tagline: "Discover Your Strengths. Design Your Future.",
  subline: "Psychometric assessment and personalised education pathways for students in Dubai — from finding academic direction to exploring universities abroad.",
  description: "Dubai-focused psychometric assessment (AED 100), career counselling, subject-selection guidance and overseas university admissions for IB, British, American and CBSE students.",
  location: "Dubai, United Arab Emirates",
  primaryPrice: {
    amount: 100,
    currency: "AED",
    formatted: "AED 100",
    label: "EKAA Rise Psychometric Test",
    priceNotice: "Confirmed public price. Exact assessment scope, format, and reporting details will be confirmed directly prior to live processing.",
  },
  contact: {
    locationServed: "Serving students and families across Dubai, UAE",
    verifiedNote: "Physical premises, official telephone and trade licence details to be published upon final regulatory verification.",
    officialHours: "Sunday to Thursday: 9:00 AM – 6:00 PM (Gulf Standard Time)",
    emailPlaceholder: "advisory@ekaarise.ae (pending domain activation)",
    phonePlaceholder: "+971 (Dubai enquiry line pending activation)",
  },
  features: {
    previewMode: true,
    showApprovalPlaceholders: true,
    enableLivePayment: false,
    enableCounsellorProfiles: false,
    enableStudentStories: false,
  },
};

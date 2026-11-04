import type { Metadata } from 'next';
import { AssessmentCatalogue } from '@/components/assessment/AssessmentCatalogue';
export const metadata: Metadata = {
  title: 'Grade-Specific Student Assessments | EKAA Rise',
  description: 'Choose your own assessment for Grades 4 through 12, with grade-specific questions, personal results and next steps.',
};
export default function AssessmentCataloguePage() { return <AssessmentCatalogue />; }

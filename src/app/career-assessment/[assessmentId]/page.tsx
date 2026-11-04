import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Assessment } from '@/components/assessment/Assessment';
import { getGradeAssessment, gradeAssessments } from '@/lib/grade-assessments';

type PageProps = { params: { assessmentId: string } };

export function generateStaticParams() {
  return [...gradeAssessments.map(assessment => ({ assessmentId: assessment.id })), { assessmentId: 'general' }];
}

export function generateMetadata({ params }: PageProps): Metadata {
  const assessment = getGradeAssessment(params.assessmentId);
  return {
    title: assessment ? `Grade ${assessment.grade} Assessment | EKAA Rise` : 'General Assessment | EKAA Rise',
    description: assessment?.description,
    robots: { index: false, follow: true },
  };
}

export default function GradeAssessmentPage({ params }: PageProps) {
  if (params.assessmentId === 'general') return <Assessment key="general" />;
  const assessment = getGradeAssessment(params.assessmentId);
  if (!assessment) notFound();
  return <Assessment key={assessment.id} assessment={assessment} />;
}

"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, BookOpen, Compass, GraduationCap, Sparkles } from 'lucide-react';
import { gradeAssessments } from '@/lib/grade-assessments';
import { readAttempt, STORAGE_KEY } from '@/lib/assessment';
import './catalogue.css';

export function AssessmentCatalogue() {
  const [filter, setFilter] = useState('All grades');
  const [legacySaved, setLegacySaved] = useState(false);
  const [savedGrades, setSavedGrades] = useState<Record<string, string>>({});

  useEffect(() => {
    try {
      const previous = localStorage.getItem(STORAGE_KEY);
      setLegacySaved(Boolean(previous && readAttempt(previous)));
      const saved: Record<string, string> = {};
      for (const assessment of gradeAssessments) {
        const raw = localStorage.getItem(`ekaa-assessment-${assessment.id}-v1`);
        const attempt = raw && readAttempt(raw, assessment.questions, assessment.id, assessment.grade);
        if (attempt) saved[assessment.id] = attempt.completed ? 'Report ready' : 'Continue your progress';
      }
      setSavedGrades(saved);
    } catch {
      // Students can still choose and complete an assessment when browser storage is unavailable.
    }
  }, []);

  const visible = gradeAssessments.filter(assessment => {
    const grade = Number(assessment.grade);
    if (filter === 'Grades 4–7') return grade <= 7;
    if (filter === 'Grades 8–10') return grade >= 8 && grade <= 10;
    if (filter === 'Grades 11–12') return grade >= 11;
    return true;
  });

  return <div className="assessment-catalogue">
    <section className="catalogue-hero">
      <div className="shell">
        <span className="catalogue-eyebrow">EKAA STUDENT ASSESSMENTS</span>
        <h1>Every grade is a new chapter.<br /><em>Find the test for yours.</em></h1>
        <p>Separate assessments for Grades 4–12. Choose your current grade to explore questions, activities and next steps created for your stage.</p>
        <div className="catalogue-facts"><span><BookOpen size={17} /> Grade-specific questions</span><span><Compass size={17} /> Personal results</span><span><GraduationCap size={17} /> A plan for your stage</span></div>
      </div>
    </section>
    <section className="shell catalogue-content">
      {legacySaved && <div className="catalogue-resume"><span>You have a saved attempt from the earlier general assessment.</span><Link href="/career-assessment/general">Continue earlier attempt →</Link></div>}
      <div className="catalogue-toolbar"><div><span className="catalogue-eyebrow">CHOOSE YOUR CURRENT GRADE</span><h2>Your journey starts here.</h2></div><div className="catalogue-filters" aria-label="Filter assessments by school stage">{['All grades', 'Grades 4–7', 'Grades 8–10', 'Grades 11–12'].map(stage => <button key={stage} aria-pressed={filter === stage} onClick={() => setFilter(stage)}>{stage}</button>)}</div></div>
      <p className="catalogue-count" role="status">{visible.length} assessments · Each grade opens its own test</p>
      <div className="catalogue-grid">
        {visible.map(assessment => <article className={`catalogue-card ${assessment.junior ? 'junior' : Number(assessment.grade) <= 10 ? 'middle' : 'senior'}`} key={assessment.id}>
          <div className="catalogue-art" aria-hidden="true"><span className="catalogue-orbit" /><strong>{assessment.grade}</strong><Sparkles className="catalogue-spark" size={27} /><span className="catalogue-art-label">YOUR GRADE. YOUR DISCOVERY.</span></div>
          <div className="catalogue-card-body"><span className="catalogue-eyebrow">GRADE {assessment.grade}</span><h3>{assessment.title}</h3><p>{assessment.description}</p><div className="catalogue-meta"><span>{assessment.questions.length} questions</span><span>{assessment.minutes} min</span></div><p className="catalogue-outcome">{assessment.focus}</p><Link href={`/career-assessment/${assessment.id}`} aria-label={`${savedGrades[assessment.id] ?? 'Start'} Grade ${assessment.grade} assessment`}>{savedGrades[assessment.id] ?? `Start Grade ${assessment.grade} test`}<ArrowUpRight size={18} /></Link></div>
        </article>)}
      </div>
      <div className="catalogue-explanation"><div><h2>Designed around your stage.</h2><p>Grades 4–7 focus on curiosity and activities. Grades 8–10 explore subject direction. Grades 11–12 connect interests with courses and future study.</p></div><div><h3>Before you begin</h3><p>These original exploratory questionnaires have not undergone psychometric validation. Use the results alongside experience and a conversation with a parent, teacher or adviser. Younger students can ask an adult to help read the instructions while choosing their own answers.</p><p>Progress stays in this browser. You can download your report when you finish.</p></div></div>
    </section>
  </div>;
}

import Link from 'next/link';
import { ArrowUpRight, Compass } from 'lucide-react';
export function PriceCard({className = ''}: {className?:string}) {
 return <div className={`rounded-3xl p-8 sm:p-10 bg-[#153e35] text-white ${className}`}>
  <Compass className="text-[#d5edb1] mb-8" size={42} strokeWidth={1}/>
  <span className="text-[10px] tracking-[.2em] text-[#c4dab4]">YOUR NEXT CHAPTER</span>
  <h3 className="text-3xl sm:text-4xl font-medium tracking-tight my-4">Start with<br/><em className="font-serif text-[#d5edb1]">understanding you.</em></h3>
  <p className="text-sm leading-relaxed text-white/70 max-w-sm">Explore your interests, reflect on your strengths, and make your next educational choice with more clarity.</p>
  <Link className="inline-flex items-center gap-5 bg-[#d5edb1] text-[#153e35] px-6 py-4 rounded-full text-sm font-semibold mt-8" href="/book-psychometric-test">Begin my journey <ArrowUpRight size={18}/></Link>
  <p className="text-xs text-white/60 mt-5">Assessment details and fee are shown after your profile, before checkout.</p>
 </div>;
}

import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { ArrowUpRight } from 'lucide-react';
const groups = [
 { title:'Discover', links:[['Student assessment','/psychometric-test-dubai'],['Career guidance','/career-counselling-dubai'],['Subject choices','/subject-selection-counselling-dubai']] },
 { title:'Go further', links:[['Study abroad','/study-abroad-consultants-dubai'],['Undergraduate','/study-abroad/undergraduate-admissions'],['Postgraduate','/study-abroad/masters-admissions']] },
 { title:'Get to know us', links:[['Our story','/about'],['For parents','/for-parents'],['Resources & FAQs','/resources'],['Talk to Ekaa','/contact']] },
];
export function SiteFooter(){return <footer className="bg-[#0d2e29] text-[#d3e1d5] border-t border-white/10 pt-12 pb-24 lg:pb-7">
 <div className="shell"><div className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-8 pb-9">
 <div className="col-span-2 space-y-4"><div className="inline-block bg-[#f6f5ef] p-2 rounded-xl"><Logo variant="header"/></div><p className="text-sm leading-relaxed max-w-[270px]">A little self-discovery.<br/>A world of possibilities.</p><span className="text-[10px] tracking-[.15em] text-[#9db9aa] block">DUBAI, UNITED ARAB EMIRATES</span></div>
 {groups.map(g=><div key={g.title}><h2 className="text-[10px] font-semibold tracking-widest uppercase text-[#d5edb1] mb-4">{g.title}</h2><ul className="space-y-3 text-xs">{g.links.map(([label,href])=><li key={href}><Link href={href} className="hover:text-white inline-flex gap-1 items-center">{label}{href==='/contact'&&<ArrowUpRight size={12}/>}</Link></li>)}</ul></div>)}
 </div><div className="border-t border-white/10 pt-5 flex flex-col sm:flex-row gap-5 justify-between text-[10px] text-[#9db9aa]"><span>© {new Date().getFullYear()} EKAA Rise. Your future, your own way.</span><div className="flex gap-x-5 gap-y-3 flex-wrap"><Link href="/privacy-policy">Privacy</Link><Link href="/terms-and-conditions">Terms</Link><Link href="/refund-and-cancellation-policy">Refunds</Link><Link href="/assessment-disclaimer">Assessment limitations</Link></div></div></div>
 </footer>;}

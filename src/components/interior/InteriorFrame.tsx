"use client";
import {usePathname} from 'next/navigation';
import type {ReactNode} from 'react';
import './interior.css';
export function InteriorFrame({children}:{children:ReactNode}){const path=usePathname();const excluded=['/','/career-assessment','/psychometric-test-dubai'];return <div className={(excluded.includes(path) || path.startsWith('/career-assessment/'))?'':'interior-frame'}>{children}</div>;}

'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { C } from './constants';

export function FadeIn({
	children,
	delay = 0,
	className = '',
	y = 28,
}: {
	children: React.ReactNode;
	delay?: number;
	className?: string;
	y?: number;
}) {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true, margin: '-60px' });

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y }}
			animate={inView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
			className={className}
		>
			{children}
		</motion.div>
	);
}

export function Label({ children }: { children: React.ReactNode }) {
	return (
		<p
			className='text-[11px] font-[700] tracking-[0.2em] uppercase mb-3'
			style={{ color: C.muted }}
		>
			{children}
		</p>
	);
}

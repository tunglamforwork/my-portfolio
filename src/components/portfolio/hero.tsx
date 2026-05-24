'use client';

import { motion } from 'framer-motion';
import { C } from './constants';

const STAT_CARDS = [
	{ label: '3+ Years', sub: 'Experience', bg: C.coral },
	{ label: 'TypeScript', sub: 'Primary Lang', bg: C.sky },
	{ label: 'Applied AI', sub: 'Specialization', bg: C.yellow },
	{ label: 'Full-Stack', sub: 'Engineering', bg: C.mint },
];

export function Hero() {
	return (
		<section className='pt-36 pb-24 px-6'>
			<div className='max-w-7xl mx-auto'>
				<div className='grid grid-cols-1 lg:grid-cols-5 gap-14 items-center'>
					{/* Left */}
					<div className='lg:col-span-3 space-y-7'>
						<motion.div
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
						>
							<span
								className='inline-block text-[11px] font-[700] tracking-[0.18em] uppercase px-4 py-2 border-[3px] border-[var(--neo-border)] rounded-full'
								style={{ backgroundColor: C.sky }}
							>
								✦ Software Engineer · Applied AI
							</span>
						</motion.div>

						<motion.p
							className='text-[15px] font-[500] tracking-wide'
							style={{ color: C.muted }}
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
						>
							Hi, I&apos;m{' '}
							<span className='font-[700]' style={{ color: C.text }}>
								Lam Tran
							</span>{' '}
							👋
						</motion.p>

						<motion.h1
							className='text-5xl md:text-6xl xl:text-[70px] font-[700] leading-[1.04] tracking-tight'
							initial={{ opacity: 0, y: 24 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
						>
							Building{' '}
							<span style={{ color: C.coral }}>AI-powered</span> products that{' '}
							<span style={{ color: C.blue }}>scale</span> and feel effortless.
						</motion.h1>

						<motion.p
							className='text-[17px] font-[500] leading-relaxed max-w-lg'
							style={{ color: C.muted }}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
						>
							Software Engineer with 3+ years of experience building full-stack applications and
							integrating AI into production systems. Focused on modern web architecture,
							intelligent automation, and products users actually enjoy using.
						</motion.p>

						<motion.div
							className='flex flex-wrap gap-4 pt-1'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
						>
							<a
								href='#work'
								className='px-7 py-3.5 font-[700] border-[3px] border-[var(--neo-border)] rounded-full shadow-[4px_4px_0_var(--neo-border)] transition-all duration-[250ms] hover:-translate-x-1 hover:-translate-y-1'
								style={{ backgroundColor: C.coral }}
							>
								See My Work
							</a>
							<a
								href='#contact'
								className='px-7 py-3.5 font-[700] border-[3px] border-[var(--neo-border)] rounded-full shadow-[4px_4px_0_var(--neo-border)] transition-all duration-[250ms] hover:-translate-x-1 hover:-translate-y-1 bg-background'
							>
								Contact Me
							</a>
						</motion.div>
					</div>

					{/* Right — stat cards */}
					<div className='lg:col-span-2 grid grid-cols-2 gap-4'>
						{STAT_CARDS.map((card, i) => (
							<motion.div
								key={card.label}
								className='p-6 border-[3px] border-[var(--neo-border)] rounded-[24px] shadow-[6px_6px_0_var(--neo-border)] transition-all duration-[250ms] hover:-translate-x-1 hover:-translate-y-1 cursor-default'
								style={{ backgroundColor: card.bg }}
								initial={{ opacity: 0, scale: 0.88, y: 16 }}
								animate={{ opacity: 1, scale: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.32 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
							>
								<div className='text-xl font-[700] text-[#0B0B0B] leading-tight'>{card.label}</div>
								<div className='text-sm font-[500] mt-1' style={{ color: '#0B0B0B99' }}>
									{card.sub}
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

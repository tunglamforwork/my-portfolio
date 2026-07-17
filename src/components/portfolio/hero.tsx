'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { SITE } from '@/data/portfolio';

export function Hero() {
	const { scrollY } = useScroll();
	const y = useTransform(scrollY, [0, 500], [0, 150]);
	const opacity = useTransform(scrollY, [0, 300], [1, 0]);

	return (
		<section className='relative h-screen w-full overflow-hidden bg-zinc-100 flex items-center justify-center border-b border-zinc-200'>
			<motion.div style={{ y }} className='absolute inset-0 z-0'>
				<div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2400&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-20"></div>
			</motion.div>

			<div className='z-10 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-end pb-24'>
				<motion.div style={{ opacity }} className='lg:col-span-8'>
					<h1 className='text-[12vw] leading-[0.85] font-medium tracking-tighter text-zinc-900 uppercase mix-blend-overlay'>
						Code <br /> Follows <br /> <span className='italic font-serif font-light'>Intent</span>
					</h1>
				</motion.div>

				<motion.div style={{ opacity }} className='lg:col-span-4 flex flex-col justify-end items-start lg:items-end'>
					<p className='text-sm md:text-base max-w-xs leading-relaxed text-zinc-600 text-left lg:text-right mb-12'>
						{SITE.heroIntro}
					</p>
					<div className='flex flex-wrap gap-4 justify-start lg:justify-end'>
						<a
							href='/Lam%20Tran%20Resume%202026.pdf'
							download='Lam Tran Resume 2026.pdf'
							className='group flex items-center gap-4 text-xs uppercase tracking-widest border border-zinc-900 bg-zinc-900 px-6 py-3 text-white hover:bg-transparent hover:text-zinc-900 transition-colors duration-300'
						>
							Download CV
							<Download size={16} className='group-hover:translate-y-1 transition-transform' />
						</a>
						<a
							href='#projects'
							className='group flex items-center gap-4 text-xs uppercase tracking-widest border border-zinc-900 px-6 py-3 text-zinc-900 hover:bg-zinc-900 hover:text-white transition-colors duration-300'
						>
							Explore Projects
							<ArrowDown size={16} className='group-hover:translate-y-1 transition-transform' />
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

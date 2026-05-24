'use client';

import { C } from './constants';
import { FadeIn, Label } from './fade-in';

const EXPERIMENTS = [
	{
		title: 'Agentic Systems',
		icon: '🤖',
		desc: 'Multi-agent coordination and autonomous task workflows.',
		accent: C.coral,
	},
	{
		title: 'AI UX Patterns',
		icon: '✨',
		desc: 'Designing interfaces that make AI feel natural and intuitive.',
		accent: C.blue,
	},
	{
		title: 'Type-Safe Architecture',
		icon: '🔐',
		desc: 'End-to-end type safety from database schemas to UI components.',
		accent: C.yellow,
	},
	{
		title: 'High-Velocity Product Development',
		icon: '🚀',
		desc: 'Systems and processes that help small teams ship exceptionally fast.',
		accent: C.mint,
	},
] as const;

export function Experiments() {
	return (
		<section id='experiments' className='py-24 px-6 bg-[#0B0B0B]'>
			<div className='max-w-7xl mx-auto'>
				<FadeIn>
					<Label>Exploring</Label>
					<h2 className='text-4xl md:text-5xl font-[700] text-white mb-12 leading-tight'>
						Things I&apos;m currently exploring
					</h2>
				</FadeIn>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
					{EXPERIMENTS.map((exp, i) => (
						<FadeIn key={exp.title} delay={i * 0.09}>
							<div
								className='p-6 border-[3px] border-[#2A2A2A] rounded-[24px] transition-all duration-[250ms] hover:-translate-x-1 hover:-translate-y-1 h-full'
								style={{ boxShadow: `6px 6px 0 ${exp.accent}` }}
							>
								<span className='text-3xl block mb-4 leading-none'>{exp.icon}</span>
								<h3 className='text-[16px] font-[700] text-white mb-2 leading-snug'>
									{exp.title}
								</h3>
								<p
									className='text-[14px] font-[500] leading-relaxed'
									style={{ color: '#5B5B5B' }}
								>
									{exp.desc}
								</p>
							</div>
						</FadeIn>
					))}
				</div>
			</div>
		</section>
	);
}

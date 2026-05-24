'use client';

import { C } from './constants';
import { FadeIn, Label } from './fade-in';

const CATEGORIES = [
	{
		name: 'Frontend',
		items: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Redux'],
		color: C.coral,
	},
	{
		name: 'Backend',
		items: ['Node.js', 'NestJS', 'Fastify', 'LoopBack 4', 'FastAPI'],
		color: C.blue,
	},
	{
		name: 'AI',
		items: ['OpenAI', 'Gemini', 'LangGraph', 'AutoGen', 'LLM Integration'],
		color: C.yellow,
	},
	{
		name: 'Infrastructure',
		items: ['Docker', 'AWS', 'Redis', 'BullMQ', 'CI/CD'],
		color: C.mint,
	},
] as const;

export function Skills() {
	return (
		<section id='skills' className='py-24 px-6 bg-[var(--c-section-alt)]'>
			<div className='max-w-7xl mx-auto'>
				<FadeIn>
					<Label>Skills</Label>
					<h2 className='text-4xl md:text-5xl font-[700] mb-12 leading-tight'>Tech Stack</h2>
				</FadeIn>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
					{CATEGORIES.map((cat, i) => (
						<FadeIn key={cat.name} delay={i * 0.09}>
							<div className='border-[3px] border-[var(--neo-border)] rounded-[24px] shadow-[6px_6px_0_var(--neo-border)] bg-background h-full overflow-hidden transition-all duration-[250ms] hover:-translate-x-1 hover:-translate-y-1'>
								<div className='h-2 w-full' style={{ backgroundColor: cat.color }} />
								<div className='p-6'>
									<h3 className='text-[18px] font-[700] mb-4' style={{ color: cat.color }}>
										{cat.name}
									</h3>
									<div className='flex flex-wrap gap-2'>
										{cat.items.map((skill) => (
											<span
												key={skill}
												className='text-[12px] font-[700] px-3 py-1.5 border-[2px] border-[var(--neo-border)] rounded-full'
												style={{ backgroundColor: cat.color + '22' }}
											>
												{skill}
											</span>
										))}
									</div>
								</div>
							</div>
						</FadeIn>
					))}
				</div>
			</div>
		</section>
	);
}

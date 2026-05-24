'use client';

import { C, NEO_CARD } from './constants';
import { FadeIn, Label } from './fade-in';

const PROJECTS = [
	{
		title: 'Udeffy',
		type: 'Personal Project · AI Learning Platform',
		desc: 'Personalized learning paths with AI-generated lessons, quizzes, assignments, and video content.',
		stack: ['Next.js', 'NestJS', 'BullMQ', 'PostgreSQL', 'OpenAI'],
		result: '↓ 10–12% faster skill acquisition',
		bg: C.coral,
	},
	{
		title: 'AI Game Production Platform',
		type: 'Personal Project · Zapy Studio',
		desc: 'AI desktop tooling that accelerated game creation workflows with design assistance and content generation.',
		stack: ['Electron', 'Fastify', 'Gemini', 'OpenAI', 'ComfyUI'],
		bg: C.blue,
		textLight: true,
	},
	{
		title: 'LinkAI',
		type: 'Work Project · Link Brokerages',
		desc: 'Real estate intelligence platform powered by conversational AI and intelligent document processing.',
		stack: ['Next.js', 'LLM', 'Redis', 'Document Processing'],
		result: '↓ 20% operational effort',
		bg: C.yellow,
	},
	{
		title: 'Wiring Diagram Intelligence',
		type: 'Work Project · TecAlliance',
		desc: 'Engineering automation with graph-based AI workflows for wiring diagram analysis and processing.',
		stack: ['Python', 'React', 'LangGraph', 'Neo4j'],
		bg: C.mint,
	},
];

export function FeaturedWork() {
	return (
		<section id='work' className='py-24 px-6 bg-[var(--c-section-alt)]'>
			<div className='max-w-7xl mx-auto'>
				<FadeIn>
					<Label>Featured Work</Label>
					<h2 className='text-4xl md:text-5xl font-[700] mb-12 leading-tight'>Selected Projects</h2>
				</FadeIn>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					{PROJECTS.map((proj, i) => (
						<FadeIn key={proj.title} delay={i * 0.09}>
							<div
								className={`${NEO_CARD} p-8 h-full flex flex-col gap-5`}
								style={{ backgroundColor: proj.bg }}
							>
								<div className='flex-1'>
									<span
										className='text-[11px] font-[700] tracking-[0.15em] uppercase block mb-2'
										style={{ color: proj.textLight ? 'rgba(255,255,255,0.6)' : '#0B0B0B70' }}
									>
										{proj.type}
									</span>
									<h3
										className='text-2xl font-[700] mb-3 leading-snug'
										style={{ color: proj.textLight ? 'white' : C.text }}
									>
										{proj.title}
									</h3>
									<p
										className='font-[500] leading-relaxed text-[15px]'
										style={{ color: proj.textLight ? 'rgba(255,255,255,0.72)' : '#0B0B0BAA' }}
									>
										{proj.desc}
									</p>
								</div>

								<div>
									<div className='flex flex-wrap gap-2 mb-4'>
										{proj.stack.map((s) => (
											<span
												key={s}
												className='text-[12px] font-[700] px-3 py-1 border-[2px] border-[var(--neo-border)] rounded-full'
												style={{
													backgroundColor: proj.textLight
														? 'rgba(255,255,255,0.18)'
														: 'rgba(255,255,255,0.55)',
													color: proj.textLight ? 'white' : C.text,
												}}
											>
												{s}
											</span>
										))}
									</div>
									{'result' in proj && proj.result && (
										<div
											className='inline-block px-4 py-2 rounded-full text-sm font-[700] bg-foreground text-background'
										>
											{proj.result}
										</div>
									)}
								</div>
							</div>
						</FadeIn>
					))}
				</div>
			</div>
		</section>
	);
}

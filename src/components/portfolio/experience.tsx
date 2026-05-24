'use client';

import { C, NEO_CARD_SM } from './constants';
import { FadeIn, Label } from './fade-in';

const JOBS = [
	{
		role: 'Software Engineer',
		company: 'Netcompany Vietnam',
		period: 'May 2026 — Present',
		desc: 'Building enterprise-grade software and contributing to scalable product delivery across modern engineering environments.',
		color: C.blue,
	},
	{
		role: 'Full-Stack Developer',
		company: 'Link Brokerages',
		period: 'Nov 2024 — Apr 2026',
		desc: 'Developed internal platforms and AI-powered experiences.',
		color: C.coral,
	},
	{
		role: 'Software Engineering Intern',
		company: 'TecAlliance Vietnam',
		period: 'Jun 2024 — Aug 2024',
		desc: 'Automation, graph pipelines, and AI engineering for automotive data systems.',
		color: C.mint,
	},
] as const;

export function Experience() {
	return (
		<section id='experience' className='py-24 px-6'>
			<div className='max-w-7xl mx-auto'>
				<FadeIn>
					<Label>Experience</Label>
					<h2 className='text-4xl md:text-5xl font-[700] mb-12 leading-tight'>
						Where I&apos;ve Worked
					</h2>
				</FadeIn>

				<div className='space-y-4'>
					{JOBS.map((job, i) => (
						<FadeIn key={job.company} delay={i * 0.09}>
							<div className={`${NEO_CARD_SM} p-6 bg-background flex gap-5 items-stretch`}>
								<div
									className='w-1.5 flex-shrink-0 rounded-full self-stretch'
									style={{ backgroundColor: job.color }}
								/>
								<div className='flex-1 min-w-0'>
									<div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2'>
										<div>
											<h3 className='text-[19px] font-[700] leading-tight'>{job.role}</h3>
											<span className='font-[700] text-[15px]' style={{ color: job.color }}>
												{job.company}
											</span>
										</div>
										<span
											className='text-[12px] font-[700] px-3 py-1.5 border-[2px] border-[var(--neo-border)] rounded-full whitespace-nowrap self-start'
											style={{ backgroundColor: job.color + '22' }}
										>
											{job.period}
										</span>
									</div>
									<p
										className='font-[500] text-[15px] leading-relaxed'
										style={{ color: C.muted }}
									>
										{job.desc}
									</p>
								</div>
							</div>
						</FadeIn>
					))}
				</div>
			</div>
		</section>
	);
}

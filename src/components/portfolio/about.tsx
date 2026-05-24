'use client';

import { C } from './constants';
import { FadeIn, Label } from './fade-in';

const STATS = [
	{ value: '3+', label: 'Years of Experience' },
	{ value: '10–12%', label: 'Learning Efficiency Improvement' },
	{ value: '20%', label: 'Operational Reduction' },
	{ value: 'AI × Web', label: '× Product' },
];

export function About() {
	return (
		<section id='about' className='py-24 px-6 bg-[#0B0B0B]'>
			<div className='max-w-7xl mx-auto'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
					<div>
						<FadeIn>
							<Label>About</Label>
							<h2 className='text-4xl md:text-5xl font-[700] text-white mb-8 leading-tight'>
								Engineering products with intelligence built in.
							</h2>
						</FadeIn>
						<FadeIn delay={0.1}>
							<div
								className='space-y-4 font-[500] leading-relaxed text-[17px]'
								style={{ color: '#5B5B5B' }}
							>
								<p>
									<span className='text-white font-[700]'>Hi, I&apos;m Lam.</span>
								</p>
								<p>
									I&apos;m a Software Engineer focused on applied AI and full-stack product
									development.
								</p>
								<p>
									Over the past few years, I&apos;ve worked across learning platforms, AI
									automation, intelligent document processing, multi-agent systems, and modern
									web applications.
								</p>
								<p>
									I enjoy building systems that stay simple on the surface while solving
									difficult problems underneath.
								</p>
								<p>
									Outside coding, I care about clean developer experience, product thinking,
									and turning ambitious ideas into software people actually use.
								</p>
							</div>
						</FadeIn>
					</div>

					<div className='grid grid-cols-2 gap-4'>
						{STATS.map((stat, i) => (
							<FadeIn key={stat.value + i} delay={i * 0.09}>
								<div
									className='p-6 border-[3px] border-[#2A2A2A] rounded-[24px] transition-all duration-[250ms] hover:-translate-x-1 hover:-translate-y-1 cursor-default'
									style={{ boxShadow: `6px 6px 0 ${C.coral}` }}
								>
									<div className='text-3xl font-[700] text-white mb-2 leading-tight'>
										{stat.value}
									</div>
									<div className='text-sm font-[500]' style={{ color: '#5B5B5B' }}>
										{stat.label}
									</div>
								</div>
							</FadeIn>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

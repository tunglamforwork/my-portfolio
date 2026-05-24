'use client';

import { C, NEO_CARD } from './constants';
import { FadeIn, Label } from './fade-in';

const SERVICES = [
	{
		title: 'AI Product Engineering',
		desc: 'Building production-ready AI experiences using LLMs, automation pipelines, and agent architectures.',
		icon: '⚡',
		bg: C.coral,
	},
	{
		title: 'Full-Stack Development',
		desc: 'Modern web systems with Next.js, NestJS, Fastify, scalable APIs, and thoughtful UX.',
		icon: '🏗',
		bg: C.blue,
		textLight: true,
	},
	{
		title: 'Platform Architecture',
		desc: 'Background processing, caching, cloud deployment, and maintainable system design.',
		icon: '☁️',
		bg: C.yellow,
	},
	{
		title: 'Developer Experience',
		desc: 'Tools and internal platforms that reduce friction and accelerate teams.',
		icon: '🛠',
		bg: C.mint,
	},
];

export function Services() {
	return (
		<section id='services' className='py-24 px-6'>
			<div className='max-w-7xl mx-auto'>
				<FadeIn>
					<Label>What I Do</Label>
					<h2 className='text-4xl md:text-5xl font-[700] mb-12 leading-tight'>Services</h2>
				</FadeIn>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					{SERVICES.map((svc, i) => (
						<FadeIn key={svc.title} delay={i * 0.09}>
							<div className={`${NEO_CARD} p-8 h-full`} style={{ backgroundColor: svc.bg }}>
								<span className='text-4xl block mb-5 leading-none'>{svc.icon}</span>
								<h3
									className='text-[22px] font-[700] mb-3 leading-snug'
									style={{ color: svc.textLight ? 'white' : C.text }}
								>
									{svc.title}
								</h3>
								<p
									className='font-[500] leading-relaxed text-[15px]'
									style={{ color: svc.textLight ? 'rgba(255,255,255,0.75)' : '#0B0B0BBB' }}
								>
									{svc.desc}
								</p>
							</div>
						</FadeIn>
					))}
				</div>
			</div>
		</section>
	);
}

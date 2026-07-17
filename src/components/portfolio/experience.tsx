import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { EXPERIENCES } from '@/data/portfolio';

export function Experience() {
	return (
		<section id='experience' className='py-32 bg-white text-zinc-900'>
			<div className='container mx-auto px-6'>
				<div className='flex justify-between items-end mb-16'>
					<h2 className='text-4xl md:text-6xl font-light tracking-tighter uppercase'>Experience</h2>
					<span className='text-xs tracking-widest hidden md:block'>2024 — Present</span>
				</div>

				<div className='flex flex-col'>
					{EXPERIENCES.map(job => (
						<Link
							key={job.slug}
							href={`/experience/${job.slug}`}
							className='group py-10 border-t border-zinc-200 grid grid-cols-1 md:grid-cols-12 gap-6 md:items-center hover:bg-zinc-50 transition-colors'
						>
							<div className='md:col-span-2 text-xs tracking-widest text-zinc-500 uppercase'>
								{job.start} — {job.end}
							</div>
							<div className='md:col-span-4'>
								<h3 className='text-2xl md:text-3xl font-light tracking-tight group-hover:pl-4 transition-all duration-300'>
									{job.company}
								</h3>
								<p className='text-sm text-zinc-500 mt-1'>
									{job.role} · {job.location}
								</p>
							</div>
							<div className='md:col-span-5 text-sm leading-relaxed text-zinc-600'>{job.summary}</div>
							<div className='md:col-span-1 flex md:justify-end'>
								<ArrowUpRight size={20} className='opacity-0 group-hover:opacity-100 transition-opacity' />
							</div>
						</Link>
					))}
					<div className='w-full border-b border-zinc-200'></div>
				</div>
			</div>
		</section>
	);
}

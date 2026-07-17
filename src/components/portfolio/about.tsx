import { ABOUT, EDUCATION } from '@/data/portfolio';

export function About() {
	return (
		<section id='about' className='py-32 bg-zinc-100 text-zinc-900'>
			<div className='container mx-auto px-6'>
				<div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
					<div className='lg:col-span-4'>
						<h2 className='text-xs font-bold uppercase tracking-widest mb-8 sticky top-32'>About Me</h2>
					</div>
					<div className='lg:col-span-8'>
						<p className='text-3xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight mb-12'>
							{ABOUT.statement}
						</p>

						<div className='grid grid-cols-1 md:grid-cols-2 gap-12 text-sm leading-relaxed text-zinc-600'>
							{ABOUT.paragraphs.map(paragraph => (
								<p key={paragraph.slice(0, 24)}>{paragraph}</p>
							))}
						</div>

						<div className='mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-zinc-300 pt-8'>
							{ABOUT.stats.map(stat => (
								<div key={stat.label}>
									<span className='block text-3xl font-medium mb-1'>{stat.value}</span>
									<span className='text-xs uppercase tracking-widest text-zinc-500'>{stat.label}</span>
								</div>
							))}
						</div>

						<div className='mt-16 border-t border-zinc-300 pt-8'>
							<p className='text-xs uppercase tracking-widest text-zinc-500 mb-6'>Education</p>
							<div className='flex flex-col md:flex-row md:items-baseline md:justify-between gap-2'>
								<div>
									<a
										href={EDUCATION.href}
										target='_blank'
										rel='noopener noreferrer'
										className='text-xl font-medium tracking-tight hover:text-zinc-500 transition-colors'
									>
										{EDUCATION.school}
									</a>
									<p className='text-sm text-zinc-500 mt-1'>{EDUCATION.degree}</p>
								</div>
								<div className='md:text-right'>
									<p className='text-sm'>{EDUCATION.period}</p>
									<p className='text-sm text-zinc-500'>{EDUCATION.gpa}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

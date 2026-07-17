import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { CustomCursor } from '@/components/portfolio/custom-cursor';
import { Footer } from '@/components/portfolio/footer';
import { Nav } from '@/components/portfolio/nav';
import { EXPERIENCES, getExperience, getProject } from '@/data/portfolio';

export function generateStaticParams() {
	return EXPERIENCES.map(experience => ({ slug: experience.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
	const experience = getExperience(params.slug);
	if (!experience) return {};
	return {
		title: `${experience.company} — ${experience.role}`,
		description: experience.summary,
	};
}

export default function ExperiencePage({ params }: { params: { slug: string } }) {
	const experience = getExperience(params.slug);
	if (!experience) notFound();

	const relatedProjects = experience.relatedProjects
		.map(slug => getProject(slug))
		.filter((project): project is NonNullable<typeof project> => project !== undefined);

	return (
		<div className='font-[family-name:var(--font-onest)] bg-white text-zinc-900 min-h-screen w-full selection:bg-zinc-200 selection:text-black'>
			<CustomCursor />
			<Nav />
			<main className='pt-36 pb-32'>
				<div className='container mx-auto px-6'>
					<Link
						href='/#experience'
						className='group inline-flex items-center gap-2 text-xs uppercase tracking-widest mb-16 hover:text-zinc-500 transition-colors'
					>
						<ArrowLeft size={14} className='group-hover:-translate-x-1 transition-transform' />
						All Experience
					</Link>

					{/* Header */}
					<div className='mb-20'>
						<p className='text-xs tracking-widest text-zinc-500 uppercase mb-6'>{experience.role}</p>
						<h1 className='text-5xl md:text-8xl font-light tracking-tighter uppercase leading-[0.9]'>
							{experience.company}
						</h1>
						<div className='mt-6 flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-sm text-zinc-500'>
							<span className='text-xs tracking-widest uppercase'>
								{experience.start} — {experience.end}
							</span>
							<span className='hidden md:block text-zinc-300'>/</span>
							<span>{experience.location}</span>
							<span className='hidden md:block text-zinc-300'>/</span>
							<a
								href={experience.website}
								target='_blank'
								rel='noopener noreferrer'
								className='group inline-flex items-center gap-1 hover:text-zinc-900 transition-colors'
							>
								Visit company
								<ArrowUpRight size={14} className='group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform' />
							</a>
						</div>
					</div>

					{/* Statement */}
					<div className='mb-32 border-t border-zinc-200 pt-12'>
						<p className='text-3xl md:text-5xl font-light leading-[1.15] tracking-tight max-w-4xl'>
							{experience.statement}
						</p>
					</div>

					{/* Storybook timeline */}
					<div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
						<div className='lg:col-span-4'>
							<h2 className='text-xs font-bold uppercase tracking-widest sticky top-32'>The Journey</h2>
						</div>
						<div className='lg:col-span-8'>
							<ol className='relative border-l border-zinc-200'>
								{experience.timeline.map((chapter, i) => (
									<li key={chapter.title} className='relative pl-10 md:pl-16 pb-20 last:pb-0'>
										<span className='absolute -left-[5px] top-1.5 w-[9px] h-[9px] bg-zinc-900'></span>
										<p className='text-xs tracking-widest text-zinc-400 uppercase mb-1'>
											Chapter 0{i + 1}
										</p>
										<p className='text-xs tracking-widest text-zinc-500 uppercase mb-4'>{chapter.date}</p>
										<h3 className='text-2xl md:text-4xl font-light tracking-tight mb-4'>
											<span className='italic font-serif'>{chapter.title}</span>
										</h3>
										<p className='text-sm md:text-base leading-relaxed text-zinc-600 max-w-2xl'>
											{chapter.description}
										</p>
									</li>
								))}
							</ol>
						</div>
					</div>

					{/* Related projects */}
					{relatedProjects.length > 0 && (
						<div className='mt-32 border-t border-zinc-200 pt-12'>
							<h2 className='text-xs font-bold uppercase tracking-widest mb-8'>From this chapter</h2>
							<div className='flex flex-col'>
								{relatedProjects.map(project => (
									<Link
										key={project.slug}
										href={`/projects/${project.slug}`}
										className='group py-8 border-t border-zinc-200 grid grid-cols-1 md:grid-cols-12 gap-4 md:items-center hover:bg-zinc-50 transition-colors'
									>
										<span className='md:col-span-2 text-xs tracking-widest text-zinc-500 uppercase'>
											{project.year}
										</span>
										<span className='md:col-span-7 text-2xl md:text-3xl font-light tracking-tight group-hover:pl-4 transition-all duration-300'>
											{project.title}
										</span>
										<span className='md:col-span-2 text-sm text-zinc-500'>{project.category}</span>
										<span className='md:col-span-1 flex md:justify-end'>
											<ArrowUpRight size={20} className='opacity-0 group-hover:opacity-100 transition-opacity' />
										</span>
									</Link>
								))}
								<div className='w-full border-b border-zinc-200'></div>
							</div>
						</div>
					)}
				</div>
			</main>
			<Footer />
		</div>
	);
}

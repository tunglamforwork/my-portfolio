import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { CustomCursor } from '@/components/portfolio/custom-cursor';
import { Footer } from '@/components/portfolio/footer';
import { Nav } from '@/components/portfolio/nav';
import { PROJECTS, getNextProject, getProject } from '@/data/portfolio';

export function generateStaticParams() {
	return PROJECTS.map(project => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
	const project = getProject(params.slug);
	if (!project) return {};
	return {
		title: `${project.title} — ${project.category}`,
		description: project.overview[0],
	};
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
	const project = getProject(params.slug);
	if (!project) notFound();
	const nextProject = getNextProject(project.slug);

	const links = [
		project.website ? { label: 'Live Site', href: project.website } : null,
		project.repo ? { label: 'Source Code', href: project.repo } : null,
	].filter((link): link is { label: string; href: string } => link !== null);

	return (
		<div className='font-[family-name:var(--font-onest)] bg-white text-zinc-900 min-h-screen w-full selection:bg-zinc-200 selection:text-black'>
			<CustomCursor />
			<Nav />
			<main className='pt-36 pb-32'>
				<div className='container mx-auto px-6'>
					<Link
						href='/#projects'
						className='group inline-flex items-center gap-2 text-xs uppercase tracking-widest mb-16 hover:text-zinc-500 transition-colors'
					>
						<ArrowLeft size={14} className='group-hover:-translate-x-1 transition-transform' />
						All Projects
					</Link>

					{/* Header */}
					<div className='mb-16'>
						<p className='text-xs tracking-widest text-zinc-500 uppercase mb-6'>
							{project.category} · {project.year}
						</p>
						<h1 className='text-5xl md:text-8xl font-light tracking-tighter uppercase leading-[0.9]'>
							{project.title}
						</h1>
						<p className='mt-6 text-lg md:text-xl font-light text-zinc-600 max-w-xl'>
							{project.descriptor}
						</p>
					</div>

					{/* Hero image */}
					<div className='relative overflow-hidden aspect-[16/9] bg-zinc-100 mb-16'>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src={project.image}
							alt={project.title}
							className='w-full h-full object-cover grayscale'
						/>
					</div>

					{/* Meta */}
					<div className='grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-zinc-200 pt-8 mb-24'>
						<div>
							<p className='text-xs uppercase tracking-widest text-zinc-500 mb-2'>Timeline</p>
							<p className='text-sm'>{project.dates}</p>
						</div>
						<div>
							<p className='text-xs uppercase tracking-widest text-zinc-500 mb-2'>Category</p>
							<p className='text-sm'>{project.category}</p>
						</div>
						<div>
							<p className='text-xs uppercase tracking-widest text-zinc-500 mb-2'>Role</p>
							<p className='text-sm'>{project.role}</p>
						</div>
						<div>
							<p className='text-xs uppercase tracking-widest text-zinc-500 mb-2'>Links</p>
							{links.length === 0 ? (
								<p className='text-sm text-zinc-500'>Private / offline</p>
							) : (
								<div className='flex flex-col gap-1'>
									{links.map(link => (
										<a
											key={link.label}
											href={link.href}
											target='_blank'
											rel='noopener noreferrer'
											className='group inline-flex items-center gap-1 text-sm hover:text-zinc-500 transition-colors'
										>
											{link.label}
											<ArrowUpRight size={14} className='group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform' />
										</a>
									))}
								</div>
							)}
						</div>
					</div>

					{/* Overview */}
					<div className='grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24'>
						<div className='lg:col-span-4'>
							<h2 className='text-xs font-bold uppercase tracking-widest sticky top-32'>Overview</h2>
						</div>
						<div className='lg:col-span-8 flex flex-col gap-6'>
							{project.overview.map(paragraph => (
								<p key={paragraph.slice(0, 32)} className='text-lg md:text-xl font-light leading-relaxed text-zinc-700'>
									{paragraph}
								</p>
							))}
						</div>
					</div>

					{/* Highlights */}
					<div className='grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24'>
						<div className='lg:col-span-4'>
							<h2 className='text-xs font-bold uppercase tracking-widest sticky top-32'>Highlights</h2>
						</div>
						<div className='lg:col-span-8 flex flex-col'>
							{project.highlights.map((highlight, i) => (
								<div key={highlight.title} className='py-8 border-t border-zinc-200 grid grid-cols-1 md:grid-cols-12 gap-4'>
									<span className='md:col-span-1 text-xs tracking-widest text-zinc-400 pt-1'>
										0{i + 1}
									</span>
									<h3 className='md:col-span-4 text-xl font-light tracking-tight'>{highlight.title}</h3>
									<p className='md:col-span-7 text-sm leading-relaxed text-zinc-600'>
										{highlight.description}
									</p>
								</div>
							))}
							<div className='w-full border-b border-zinc-200'></div>
						</div>
					</div>

					{/* Technologies */}
					{project.technologies && (
						<div className='grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24'>
							<div className='lg:col-span-4'>
								<h2 className='text-xs font-bold uppercase tracking-widest'>Technologies</h2>
							</div>
							<div className='lg:col-span-8 flex flex-wrap gap-3'>
								{project.technologies.map(tech => (
									<span
										key={tech}
										className='text-xs uppercase tracking-widest border border-zinc-200 px-4 py-2'
									>
										{tech}
									</span>
								))}
							</div>
						</div>
					)}

					{/* Next project */}
					{nextProject && nextProject.slug !== project.slug && (
						<Link
							href={`/projects/${nextProject.slug}`}
							className='group block border-t border-zinc-200 pt-12'
						>
							<p className='text-xs uppercase tracking-widest text-zinc-500 mb-4'>Next Project</p>
							<div className='flex justify-between items-center'>
								<span className='text-4xl md:text-6xl font-light tracking-tighter uppercase group-hover:pl-4 transition-all duration-300'>
									{nextProject.title}
								</span>
								<ArrowRight size={32} strokeWidth={1} className='group-hover:translate-x-2 transition-transform' />
							</div>
						</Link>
					)}
				</div>
			</main>
			<Footer />
		</div>
	);
}

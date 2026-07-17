import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PROJECTS, type Project } from '@/data/portfolio';

function ProjectCard({ project, index }: { project: Project; index: number }) {
	return (
		<Link
			href={`/projects/${project.slug}`}
			className={`group flex flex-col ${index % 2 === 1 ? 'md:mt-32' : ''}`}
		>
			<div className='relative overflow-hidden aspect-[4/5] mb-6 bg-zinc-100'>
				<div className='absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/10 transition-colors duration-500 z-10'></div>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src={project.image}
					alt={project.title}
					className='w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105'
				/>
			</div>

			<div className='flex justify-between items-start border-t border-zinc-200 pt-4'>
				<div>
					<h3 className='text-2xl font-medium tracking-tight mb-1'>{project.title}</h3>
					<p className='text-sm text-zinc-500'>{project.descriptor}</p>
				</div>
				<div className='text-right hidden md:block'>
					<p className='text-sm'>{project.year}</p>
					<p className='text-sm text-zinc-500'>{project.category}</p>
				</div>
			</div>
		</Link>
	);
}

export function Projects() {
	return (
		<section id='projects' className='py-32 bg-white text-zinc-900'>
			<div className='container mx-auto px-6'>
				<div className='flex justify-between items-end mb-20 border-b border-zinc-200 pb-6'>
					<h2 className='text-4xl md:text-6xl font-light tracking-tighter uppercase'>Selected Works</h2>
					<span className='text-xs tracking-widest hidden md:block'>2024 — 2026</span>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-24'>
					{PROJECTS.map((project, index) => (
						<ProjectCard key={project.slug} project={project} index={index} />
					))}
				</div>

				<div className='mt-32 flex justify-center'>
					<a
						href='https://github.com/tunglamforwork'
						target='_blank'
						rel='noopener noreferrer'
						className='group flex items-center gap-3 text-sm uppercase tracking-widest hover:text-zinc-500 transition-colors'
					>
						All Projects
						<ArrowRight size={16} className='group-hover:translate-x-2 transition-transform' />
					</a>
				</div>
			</div>
		</section>
	);
}

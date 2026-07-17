import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { BLOG_URL } from '@/data/portfolio';
import { formatShortDate } from '@/lib/utils';

export type JournalPost = {
	slug: string;
	title: string;
	publishedAt: string;
};

export function Journal({ posts }: { posts: JournalPost[] }) {
	return (
		<section id='journal' className='py-32 bg-white text-zinc-900 border-t border-zinc-200'>
			<div className='container mx-auto px-6'>
				<div className='flex justify-between items-end mb-16'>
					<h2 className='text-4xl md:text-6xl font-light tracking-tighter uppercase'>Journal</h2>
					<a
						href={BLOG_URL}
						className='hidden md:flex items-center gap-2 text-xs uppercase tracking-widest hover:text-zinc-500 transition-colors'
					>
						Read Archive <ArrowRight size={14} />
					</a>
				</div>

				<div className='flex flex-col'>
					{posts.map(post => (
						<a
							key={post.slug}
							href={`${BLOG_URL}/${post.slug}`}
							className='group py-10 border-t border-zinc-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-center hover:bg-zinc-50 transition-colors'
						>
							<div className='md:col-span-2 text-xs tracking-widest text-zinc-500'>
								{formatShortDate(post.publishedAt)}
							</div>
							<div className='md:col-span-8 text-2xl md:text-4xl font-light tracking-tight group-hover:pl-4 transition-all duration-300'>
								{post.title}
							</div>
							<div className='md:col-span-2 flex justify-between items-center'>
								<span className='text-xs uppercase tracking-widest border border-zinc-200 px-3 py-1 rounded-none'>
									Article
								</span>
								<ArrowUpRight size={20} className='opacity-0 group-hover:opacity-100 transition-opacity' />
							</div>
						</a>
					))}
					<div className='w-full border-b border-zinc-200'></div>
				</div>
			</div>
		</section>
	);
}

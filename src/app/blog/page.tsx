import { getBlogPosts } from '@/data/blog';
import { BLOG_URL } from '@/data/portfolio';
import { formatShortDate } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

export const metadata = {
	title: 'Journal',
	description: 'Thoughts on software engineering, AI, and building products.',
};

export default async function BlogPage() {
	const posts = await getBlogPosts();

	const sorted = posts.sort(
		(a, b) =>
			new Date(b.metadata.publishedAt).getTime() -
			new Date(a.metadata.publishedAt).getTime(),
	);

	return (
		<section>
			<div className='mb-16'>
				<p className='text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4'>Writing</p>
				<h1 className='text-5xl md:text-6xl font-light tracking-tighter uppercase'>Journal</h1>
				<p className='mt-4 text-sm leading-relaxed text-zinc-500 max-w-md'>
					Thoughts on software engineering, AI, and building products.
				</p>
			</div>

			{sorted.length === 0 ? (
				<div className='py-16 border-y border-zinc-200 text-center'>
					<p className='text-sm text-zinc-500'>No posts yet. Check back soon.</p>
				</div>
			) : (
				<div className='flex flex-col'>
					{sorted.map(post => (
						<a
							key={post.slug}
							href={`${BLOG_URL}/${post.slug}`}
							className='group py-8 border-t border-zinc-200 hover:bg-zinc-50 transition-colors'
						>
							<div className='flex justify-between items-baseline gap-6 mb-2'>
								<span className='text-xs tracking-widest text-zinc-500'>
									{formatShortDate(post.metadata.publishedAt)}
								</span>
								<ArrowUpRight
									size={18}
									className='shrink-0 opacity-0 group-hover:opacity-100 transition-opacity'
								/>
							</div>
							<h2 className='text-2xl md:text-3xl font-light tracking-tight group-hover:pl-4 transition-all duration-300'>
								{post.metadata.title}
							</h2>
							{post.metadata.summary && (
								<p className='mt-2 text-sm leading-relaxed text-zinc-500 line-clamp-2'>
									{post.metadata.summary}
								</p>
							)}
						</a>
					))}
					<div className='w-full border-b border-zinc-200'></div>
				</div>
			)}
		</section>
	);
}

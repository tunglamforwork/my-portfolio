import { getBlogPosts } from '@/data/blog';
import Link from 'next/link';

export const metadata = {
	title: 'Blog',
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
			<div className='mb-12'>
				<p className='text-[11px] font-[700] tracking-[0.2em] uppercase mb-3' style={{ color: '#5B5B5B' }}>
					Writing
				</p>
				<h1 className='text-4xl md:text-5xl font-[700] leading-tight'>Blog</h1>
				<p className='mt-3 text-[17px] font-[500] leading-relaxed' style={{ color: '#5B5B5B' }}>
					Thoughts on software engineering, AI, and building products.
				</p>
			</div>

			{sorted.length === 0 ? (
				<div
					className='p-8 border-[3px] border-[#0B0B0B] rounded-[24px] shadow-[6px_6px_0_#0B0B0B] text-center'
					style={{ backgroundColor: '#F5F3EE' }}
				>
					<p className='font-[500]' style={{ color: '#5B5B5B' }}>
						No posts yet. Check back soon.
					</p>
				</div>
			) : (
				<div className='space-y-5'>
					{sorted.map((post, i) => (
						<Link key={post.slug} href={`https://blog.ttlam.dev/${post.slug}`} className='block group'>
							<div
								className='p-6 border-[3px] border-[#0B0B0B] rounded-[24px] shadow-[6px_6px_0_#0B0B0B] bg-white transition-all duration-[250ms] ease-in-out group-hover:-translate-x-1 group-hover:-translate-y-1'
							>
								<div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3'>
									<div className='flex-1'>
										<h2 className='text-[19px] font-[700] leading-snug group-hover:opacity-70 transition-opacity'>
											{post.metadata.title}
										</h2>
										{post.metadata.summary && (
											<p
												className='mt-1.5 text-[14px] font-[500] leading-relaxed line-clamp-2'
												style={{ color: '#5B5B5B' }}
											>
												{post.metadata.summary}
											</p>
										)}
									</div>
									<span
										className='text-[12px] font-[700] px-3 py-1.5 border-[2px] border-[#0B0B0B] rounded-full whitespace-nowrap self-start'
										style={{ backgroundColor: i % 2 === 0 ? '#C7ECFF' : '#FDB92733' }}
									>
										{new Date(post.metadata.publishedAt).toLocaleDateString('en-US', {
											year: 'numeric',
											month: 'short',
											day: 'numeric',
										})}
									</span>
								</div>
							</div>
						</Link>
					))}
				</div>
			)}
		</section>
	);
}

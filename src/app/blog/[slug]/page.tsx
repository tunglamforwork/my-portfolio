import { getBlogPosts, getPost } from '@/data/blog';
import { DATA } from '@/data/resume';
import { formatDate } from '@/lib/utils';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export async function generateStaticParams() {
	const posts = await getBlogPosts();
	return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata | undefined> {
	const post = await getPost(params.slug);
	const { title, publishedAt: publishedTime, summary: description, image } = post.metadata;
	const ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${title}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'article',
			publishedTime,
			url: `${DATA.url}/blog/${post.slug}`,
			images: [{ url: ogImage }],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	};
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
	const post = await getPost(params.slug);

	if (!post) {
		notFound();
	}

	return (
		<article>
			<script
				type='application/ld+json'
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'BlogPosting',
						headline: post.metadata.title,
						datePublished: post.metadata.publishedAt,
						dateModified: post.metadata.publishedAt,
						description: post.metadata.summary,
						image: post.metadata.image
							? `${DATA.url}${post.metadata.image}`
							: `${DATA.url}/og?title=${post.metadata.title}`,
						url: `${DATA.url}/blog/${post.slug}`,
						author: { '@type': 'Person', name: DATA.name },
					}),
				}}
			/>

			{/* Back link */}
			<Link
				href='https://blog.ttlam.dev'
				className='inline-flex items-center gap-2 text-sm font-[700] px-4 py-2 border-[3px] border-[#0B0B0B] rounded-full shadow-[3px_3px_0_#0B0B0B] mb-10 transition-all duration-[250ms] hover:-translate-x-0.5 hover:-translate-y-0.5'
				style={{ backgroundColor: '#FDB927' }}
			>
				← All Posts
			</Link>

			{/* Header */}
			<div className='mb-10 pb-8 border-b-[3px] border-[#0B0B0B]'>
				<Suspense fallback={<div className='h-5' />}>
					<span
						className='inline-block text-[12px] font-[700] tracking-[0.15em] uppercase px-3 py-1 border-[2px] border-[#0B0B0B] rounded-full mb-4'
						style={{ backgroundColor: '#C7ECFF' }}
					>
						{formatDate(post.metadata.publishedAt)}
					</span>
				</Suspense>
				<h1 className='text-3xl md:text-4xl font-[700] leading-tight tracking-tight'>
					{post.metadata.title}
				</h1>
				{post.metadata.summary && (
					<p className='mt-3 text-[17px] font-[500] leading-relaxed' style={{ color: '#5B5B5B' }}>
						{post.metadata.summary}
					</p>
				)}
			</div>

			{/* Content */}
			<div
				className='prose prose-lg max-w-none prose-headings:font-[700] prose-headings:tracking-tight prose-a:text-[#2F81F7] prose-a:font-[700] prose-a:no-underline hover:prose-a:underline prose-code:font-mono prose-pre:border-[3px] prose-pre:border-[#0B0B0B] prose-pre:shadow-[4px_4px_0_#0B0B0B] prose-pre:rounded-[16px]'
				dangerouslySetInnerHTML={{ __html: post.source }}
			/>
		</article>
	);
}

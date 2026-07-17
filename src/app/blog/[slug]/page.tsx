import { getBlogPosts, getPost } from '@/data/blog';
import { BLOG_URL } from '@/data/portfolio';
import { DATA } from '@/data/resume';
import { formatDate } from '@/lib/utils';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';
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
			<a
				href={BLOG_URL}
				className='group inline-flex items-center gap-2 text-xs uppercase tracking-widest mb-12 hover:text-zinc-500 transition-colors'
			>
				<ArrowLeft size={14} className='group-hover:-translate-x-1 transition-transform' />
				All Posts
			</a>

			{/* Header */}
			<div className='mb-12 pb-10 border-b border-zinc-200'>
				<Suspense fallback={<div className='h-5' />}>
					<p className='text-xs tracking-widest text-zinc-500 uppercase mb-4'>
						{formatDate(post.metadata.publishedAt)}
					</p>
				</Suspense>
				<h1 className='text-3xl md:text-5xl font-light leading-tight tracking-tighter'>
					{post.metadata.title}
				</h1>
				{post.metadata.summary && (
					<p className='mt-4 text-sm leading-relaxed text-zinc-500'>{post.metadata.summary}</p>
				)}
			</div>

			{/* Content */}
			<div
				className='prose prose-zinc prose-lg max-w-none prose-headings:font-medium prose-headings:tracking-tight prose-a:text-zinc-900 prose-a:font-medium prose-a:underline prose-a:underline-offset-4 prose-a:decoration-zinc-300 hover:prose-a:decoration-zinc-900 prose-code:font-mono prose-pre:rounded-none prose-pre:border prose-pre:border-zinc-200 prose-img:rounded-none'
				dangerouslySetInnerHTML={{ __html: post.source }}
			/>
		</article>
	);
}

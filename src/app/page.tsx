import { About } from '@/components/portfolio/about';
import { CustomCursor } from '@/components/portfolio/custom-cursor';
import { Experience } from '@/components/portfolio/experience';
import { Footer } from '@/components/portfolio/footer';
import { Hero } from '@/components/portfolio/hero';
import { Journal, type JournalPost } from '@/components/portfolio/journal';
import { Nav } from '@/components/portfolio/nav';
import { Projects } from '@/components/portfolio/projects';
import { getBlogPosts } from '@/data/blog';

export default async function Page() {
	const posts = await getBlogPosts();
	const latestPosts: JournalPost[] = posts
		.sort(
			(a, b) =>
				new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
		)
		.slice(0, 3)
		.map(post => ({
			slug: post.slug,
			title: post.metadata.title,
			publishedAt: post.metadata.publishedAt,
		}));

	return (
		<div className='font-[family-name:var(--font-onest)] bg-white text-black min-h-screen w-full selection:bg-zinc-200 selection:text-black'>
			<CustomCursor />
			<Nav />
			<main>
				<Hero />
				<About />
				<Experience />
				<Projects />
				<Journal posts={latestPosts} />
			</main>
			<Footer />
		</div>
	);
}

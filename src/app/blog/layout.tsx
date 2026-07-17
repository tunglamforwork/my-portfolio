import { BLOG_URL, SITE, SITE_URL } from '@/data/portfolio';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='min-h-screen bg-white text-zinc-900 font-[family-name:var(--font-onest)]'>
			<nav className='sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-zinc-200'>
				<div className='container mx-auto px-6 h-[68px] flex items-center justify-between'>
					<a href={SITE_URL} className='flex items-center gap-3 hover:opacity-60 transition-opacity'>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img src='/logo-mark.png' alt='TL monogram' className='h-10 w-10 invert' />
						<span className='flex flex-col'>
							<span className='font-bold text-lg tracking-tighter uppercase leading-none'>{SITE.brand}</span>
							<span className='text-[10px] tracking-widest text-zinc-500 mt-1'>{SITE.tagline}</span>
						</span>
					</a>
					<div className='flex items-center gap-8 text-xs uppercase tracking-widest'>
						<a href={SITE_URL} className='hover:text-zinc-500 transition-colors'>
							Index
						</a>
						<a href={BLOG_URL} className='border-b border-zinc-900 pb-0.5'>
							Journal
						</a>
					</div>
				</div>
			</nav>
			<div className='max-w-3xl mx-auto px-6 py-16'>{children}</div>
		</div>
	);
}

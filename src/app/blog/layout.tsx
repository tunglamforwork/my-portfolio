import Link from 'next/link';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='min-h-screen bg-white font-[family-name:var(--font-onest)]'>
			<nav className='sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b-[3px] border-[#0B0B0B]'>
				<div className='max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between'>
					<Link href='/' className='text-2xl font-[700] tracking-tight hover:opacity-70 transition-opacity'>
						LAM.
					</Link>
					<div className='flex items-center gap-6'>
						<Link
							href='/'
							className='text-sm font-[500] hover:opacity-50 transition-opacity'
						>
							← Home
						</Link>
						<Link
							href='/blog'
							className='text-sm font-[700] px-4 py-2 border-[3px] border-[#0B0B0B] rounded-full shadow-[3px_3px_0_#0B0B0B] transition-all duration-[250ms] hover:-translate-x-0.5 hover:-translate-y-0.5'
							style={{ backgroundColor: '#FDB927' }}
						>
							Blog
						</Link>
					</div>
				</div>
			</nav>
			<div className='max-w-3xl mx-auto px-6 py-16'>{children}</div>
		</div>
	);
}

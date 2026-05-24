'use client';

import { C } from './constants';

const NAV_LINKS = ['Work', 'Experience', 'About', 'Experiments', 'Blog', 'Contact'];

export function Nav() {
	return (
		<nav className='fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b-[3px] border-[var(--neo-border)]'>
			<div className='max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between'>
				<span className='text-2xl font-[700] tracking-tight select-none'>ttlam.</span>

				<div className='hidden md:flex items-center gap-8'>
					{NAV_LINKS.map((item) => (
						<a
							key={item}
							href={item === 'Blog' ? '/blog' : `#${item.toLowerCase()}`}
							className='text-sm font-[500] transition-opacity duration-200 hover:opacity-50'
						>
							{item}
						</a>
					))}
				</div>

				<div className='flex items-center gap-3'>
					<a
						href='#contact'
						className='px-5 py-2.5 text-sm font-[700] border-[3px] border-[var(--neo-border)] rounded-full shadow-[4px_4px_0_var(--neo-border)] transition-all duration-[250ms] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0'
						style={{ backgroundColor: C.coral }}
					>
						Let&apos;s Build →
					</a>
				</div>
			</div>
		</nav>
	);
}

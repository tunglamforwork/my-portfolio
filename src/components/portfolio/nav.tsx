'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, SITE, SOCIALS } from '@/data/portfolio';

export function Nav() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<nav className='fixed top-0 left-0 w-full z-50 mix-blend-difference text-white px-6 py-6 flex justify-between items-start pointer-events-none'>
				<a href='/' className='flex items-center gap-3 pointer-events-auto'>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img src='/logo-mark.png' alt='TL monogram' className='h-11 w-11' />
					<span className='flex flex-col'>
						<span className='font-bold text-lg tracking-tighter uppercase'>{SITE.brand}</span>
						<span className='text-xs tracking-widest opacity-60 mt-1'>{SITE.established}</span>
					</span>
				</a>

				<button onClick={() => setIsOpen(true)} className='pointer-events-auto group flex items-center gap-2'>
					<span className='text-xs uppercase tracking-widest hidden md:block group-hover:tracking-[0.2em] transition-all duration-300'>
						Menu
					</span>
					<Menu size={24} strokeWidth={1.5} />
				</button>
			</nav>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
						className='fixed inset-0 bg-zinc-950 z-[60] text-white flex flex-col'
					>
						<div className='flex justify-between items-start px-6 py-6'>
							<div className='flex items-center gap-3'>
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img src='/logo-mark.png' alt='TL monogram' className='h-11 w-11' />
								<span className='font-bold text-lg tracking-tighter uppercase'>{SITE.brand}</span>
							</div>
							<button
								onClick={() => setIsOpen(false)}
								className='group flex items-center gap-2 hover:text-zinc-400 transition-colors'
							>
								<span className='text-xs uppercase tracking-widest hidden md:block'>Close</span>
								<X size={24} strokeWidth={1.5} />
							</button>
						</div>

						<div className='flex-1 flex flex-col justify-center px-6 md:px-24 lg:px-40'>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl mx-auto'>
								<ul className='flex flex-col gap-4'>
									{NAV_ITEMS.map((item, i) => (
										<motion.li
											key={item.label}
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
										>
											<a
												href={item.href}
												onClick={() => setIsOpen(false)}
												className='text-5xl md:text-7xl font-light tracking-tighter hover:ml-4 transition-all duration-300 block group'
											>
												{item.label}
												<span className='text-lg ml-2 opacity-0 group-hover:opacity-100 align-top text-zinc-500 transition-opacity'>
													0{i + 1}
												</span>
											</a>
										</motion.li>
									))}
								</ul>

								<div className='hidden md:flex flex-col justify-end pb-4 text-zinc-500'>
									<p className='text-sm max-w-xs leading-relaxed'>{SITE.blurb}</p>
									<div className='mt-8 grid grid-cols-2 gap-8 text-xs uppercase tracking-widest'>
										<div>
											<p className='text-white mb-2'>{SITE.location.city}</p>
											{SITE.location.lines.map(line => (
												<p key={line}>{line}</p>
											))}
										</div>
										<div>
											<p className='text-white mb-2'>Socials</p>
											{SOCIALS.map(social => (
												<a
													key={social.name}
													href={social.url}
													target='_blank'
													rel='noopener noreferrer'
													className='block hover:text-white transition-colors'
												>
													{social.name}
												</a>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}

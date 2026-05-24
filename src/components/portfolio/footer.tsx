'use client';

import { useState } from 'react';
import { C } from './constants';

const SITE_LINKS = [
	{ label: 'Work', href: '#work' },
	{ label: 'Experience', href: '#experience' },
	{ label: 'About', href: '#about' },
	{ label: 'Experiments', href: '#experiments' },
	{ label: 'Blog', href: '/blog' },
	{ label: 'Contact', href: '#contact' },
];

const SOCIAL_LINKS = [
	{
		label: 'GitHub',
		href: 'https://github.com/tunglamforwork',
		icon: (
			<svg width='16' height='16' fill='currentColor' viewBox='0 0 24 24'>
				<path d='M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z' />
			</svg>
		),
	},
	{
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/ttlamdev',
		icon: (
			<svg width='16' height='16' fill='currentColor' viewBox='0 0 24 24'>
				<path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
			</svg>
		),
	},
	{
		label: 'Email',
		href: 'mailto:ttlam.dev@gmail.com',
		icon: (
			<svg width='16' height='16' fill='none' stroke='currentColor' strokeWidth='2.5' viewBox='0 0 24 24'>
				<rect width='20' height='16' x='2' y='4' rx='2' />
				<path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
			</svg>
		),
	},
];

function Newsletter() {
	const [email, setEmail] = useState('');
	const [status, setStatus] = useState<'idle' | 'done'>('idle');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!email) return;
		setStatus('done');
		setEmail('');
	};

	return (
		<div>
			<h3 className='text-[13px] font-[700] tracking-[0.15em] uppercase mb-4 text-white'>
				Stay Updated
			</h3>
			<p className='text-[13px] font-[500] mb-4' style={{ color: '#5B5B5B' }}>
				Get notified about new posts and projects.
			</p>

			{status === 'done' ? (
				<div
					className='px-4 py-3 border-[2px] border-[#2A2A2A] rounded-[16px] text-sm font-[700]'
					style={{ color: C.mint }}
				>
					✓ You&apos;re subscribed!
				</div>
			) : (
				<form onSubmit={handleSubmit} className='flex flex-col gap-3'>
					<input
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder='your@email.com'
						required
						className='w-full px-4 py-3 text-sm font-[500] bg-[#1A1A1A] border-[2px] border-[#2A2A2A] rounded-[16px] text-white placeholder:text-[#3A3A3A] outline-none focus:border-[#FF6B7A] transition-colors duration-[250ms]'
					/>
					<button
						type='submit'
						className='w-full px-4 py-3 text-sm font-[700] border-[3px] border-[#0B0B0B] rounded-[16px] shadow-[3px_3px_0_#FF6B7A] transition-all duration-[250ms] hover:-translate-x-0.5 hover:-translate-y-0.5'
						style={{ backgroundColor: C.coral }}
					>
						Subscribe →
					</button>
				</form>
			)}
		</div>
	);
}

export function Footer() {
	return (
		<footer className='bg-[#0B0B0B] border-t-[3px] border-[#1A1A1A]'>
			{/* Main footer grid */}
			<div className='max-w-7xl mx-auto px-6 py-16'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
					{/* Col 1 — Brand */}
					<div className='space-y-5'>
						<div>
							<div className='text-2xl font-[700] text-white'>ttlam.</div>
							<div className='text-sm font-[500] mt-1' style={{ color: '#5B5B5B' }}>
								Software Engineer
							</div>
						</div>
						<p className='text-[14px] font-[500] leading-relaxed max-w-[220px]' style={{ color: '#5B5B5B' }}>
							Building AI-powered products that scale and feel effortless.
						</p>
						<div className='flex gap-3'>
							{SOCIAL_LINKS.map((link) => (
								<a
									key={link.label}
									href={link.href}
									target={link.href.startsWith('http') ? '_blank' : undefined}
									rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
									aria-label={link.label}
									className='flex items-center justify-center w-10 h-10 border-[2px] border-[#2A2A2A] rounded-full transition-all duration-[250ms] hover:-translate-y-0.5 hover:border-[#FF6B7A]'
									style={{ color: '#5B5B5B' }}
									onMouseEnter={(e) => (e.currentTarget.style.color = C.coral)}
									onMouseLeave={(e) => (e.currentTarget.style.color = '#5B5B5B')}
								>
									{link.icon}
								</a>
							))}
						</div>
					</div>

					{/* Col 2 — Navigation */}
					<div>
						<h3 className='text-[13px] font-[700] tracking-[0.15em] uppercase mb-4 text-white'>
							Quick Links
						</h3>
						<ul className='space-y-3'>
							{SITE_LINKS.map((link) => (
								<li key={link.label}>
									<a
										href={link.href}
										className='text-[14px] font-[500] transition-colors duration-[250ms]'
										style={{ color: '#5B5B5B' }}
										onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
										onMouseLeave={(e) => (e.currentTarget.style.color = '#5B5B5B')}
									>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Col 3 — Newsletter */}
					<Newsletter />
				</div>
			</div>

			{/* Bottom bar */}
			<div className='border-t-[2px] border-[#1A1A1A]'>
				<div className='max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4'>
					<p className='text-[13px] font-[500]' style={{ color: '#3A3A3A' }}>
						© {new Date().getFullYear()} Lam Tran · Built with Next.js + TypeScript
					</p>
					<span
						className='text-[12px] font-[700] px-4 py-2 border-[2px] border-[#2A2A2A] rounded-full'
						style={{ backgroundColor: '#1A1A1A', color: C.yellow }}
					>
						Made with curiosity.
					</span>
				</div>
			</div>
		</footer>
	);
}

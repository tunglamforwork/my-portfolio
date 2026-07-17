import { Mail } from 'lucide-react';
import { CURRENT, SITE, SOCIALS } from '@/data/portfolio';

export function Footer() {
	return (
		<footer id='contact' className='bg-zinc-950 text-white pt-32 pb-12'>
			<div className='container mx-auto px-6'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32'>
					<div className='flex flex-col gap-8'>
						<h3 className='text-2xl font-medium tracking-tight'>
							Let&apos;s build something meaningful together.
						</h3>
						<a
							href={`mailto:${SITE.email}`}
							className='flex items-center gap-3 text-zinc-400 hover:text-white transition-colors text-lg'
						>
							<Mail size={20} />
							{SITE.email}
						</a>
					</div>

					<div className='flex flex-col gap-4'>
						<h4 className='text-xs uppercase tracking-widest text-zinc-500 mb-2'>Based In</h4>
						<p className='text-sm leading-relaxed text-zinc-300'>
							{SITE.location.lines.map(line => (
								<span key={line}>
									{line}
									<br />
								</span>
							))}
						</p>
					</div>

					<div className='flex flex-col gap-4'>
						<h4 className='text-xs uppercase tracking-widest text-zinc-500 mb-2'>Currently</h4>
						<p className='text-sm leading-relaxed text-zinc-300'>
							{CURRENT.role}
							<br />
							{CURRENT.company}
							<br />
							{CURRENT.detail}
						</p>
					</div>

					<div className='flex flex-col gap-4'>
						<h4 className='text-xs uppercase tracking-widest text-zinc-500 mb-2'>Social</h4>
						<div className='flex flex-col gap-2'>
							{SOCIALS.map(social => (
								<a
									key={social.name}
									href={social.url}
									target='_blank'
									rel='noopener noreferrer'
									className='flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition-colors'
								>
									{social.name}
								</a>
							))}
						</div>
					</div>
				</div>

				<div className='flex flex-col md:flex-row justify-between items-end border-t border-zinc-800 pt-8'>
					<div className='mb-8 md:mb-0'>
						<h1 className='text-[15vw] md:text-[12vw] leading-[0.8] font-bold tracking-tighter text-zinc-900 uppercase select-none pointer-events-none'>
							TTLAM
						</h1>
					</div>
					<div className='flex gap-8 text-xs text-zinc-500 uppercase tracking-widest'>
						<a
							href='https://github.com/tunglamforwork'
							target='_blank'
							rel='noopener noreferrer'
							className='hover:text-white transition-colors'
						>
							GitHub
						</a>
						<span>© {new Date().getFullYear()} Lam Tran</span>
					</div>
				</div>
			</div>
		</footer>
	);
}

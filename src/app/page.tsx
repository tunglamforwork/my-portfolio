import { About } from '@/components/portfolio/about';
import { Contact } from '@/components/portfolio/contact';
import { Experiments } from '@/components/portfolio/experiments';
import { Experience } from '@/components/portfolio/experience';
import { FeaturedWork } from '@/components/portfolio/featured-work';
import { Footer } from '@/components/portfolio/footer';
import { Hero } from '@/components/portfolio/hero';
import { Nav } from '@/components/portfolio/nav';
import { Services } from '@/components/portfolio/services';
import { Skills } from '@/components/portfolio/skills';

export default function Page() {
	return (
		<div className='font-[family-name:var(--font-onest)]'>
			<Nav />
			<Hero />
			<Services />
			<About />
			<FeaturedWork />
			<Experience />
			<Skills />
			<Experiments />
			<Contact />
			<Footer />
		</div>
	);
}

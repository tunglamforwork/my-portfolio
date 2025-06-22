import { Icons } from '@/components/icons';
import { HomeIcon, NotebookIcon } from 'lucide-react';

export const DATA = {
	name: 'Lam (Hugo) Tran',
	initials: 'TT',
	url: 'https://ttlam.dev',
	location: 'Quận 12, Ho Chi Minh City, Vietnam',
	locationLink: 'https://www.google.com/maps/place/quan12',
	description:
		'Software Engineer specializing in AI/ML, with a focus on integrating the latest AI technologies and LLMs into software development and architecture.',
	summary:
		"Hi, I'm Lam Tran or you can call me Hugo. I'm a software engineer. I love programming and building software. Join me as we explore coding tips, tutorials, and real-world stories to sharpen our skills and stay inspired in the ever-evolving world of programming. Wish you best of luck ✨ and happy coding 🚀",
	avatarUrl: '/me.png',
	skills: [
		'Full-Stack Development',
		'Python',
		'Node.js',
		'React.js',
		'System Architecture',
		'TypeScript',
		'Next.js',
		'AI/ML',
		'MongoDB',
		'Loopback4',
	],
	navbar: [
		{ href: '/', icon: HomeIcon, label: 'Home' },
		{ href: '/blog', icon: NotebookIcon, label: 'Blog' },
	],
	contact: {
		email: 'ttlam.dev@gmail.com',
		tel: '',
		social: {
			GitHub: {
				name: 'GitHub',
				url: 'https://github.com/tunglamforwork',
				icon: Icons.github,
				navbar: true,
			},
			LinkedIn: {
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/ttlamdev',
				icon: Icons.linkedin,
				navbar: true,
			},
			X: {
				name: 'X',
				url: 'https://x.com/huG0dev',
				icon: Icons.x,
				navbar: true,
			},
			Youtube: {
				name: 'Youtube',
				url: 'https://www.youtube.com/@hugoodev',
				icon: Icons.youtube,
				navbar: true,
			},
			Facebook: {
				name: 'Facebook',
				url: 'https://www.facebook.com/ttlam262',
				icon: Icons.facebook,
				navbar: false,
			},
			GitLab: {
				name: 'GitLab',
				url: 'https://gitlab.com/ttlam.dev',
				icon: Icons.gitlab,
				navbar: false,
			},
			email: {
				name: 'Send Email',
				url: 'mailto:ttlam.dev@gmail.com',
				icon: Icons.email,
				navbar: false,
			},
		},
	},

	work: [
		{
			company: 'Link Brokerages',
			href: 'https://www.linkbrokerages.com',
			badges: ['Remote', 'Full-time'],
			location: 'Remote, United States',
			title: 'Full-stack Developer',
			logoUrl:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_cu37si5Q9RgF8WjcWfN2ZlZNs-c1xmth_w&s',
			start: 'Nov 2024',
			end: 'Present',
			description:
				'Building LinkAI, an AI assistant for property decisions. Delivers real-time market insights, property valuations, and trend analysis.',
		},
		{
			company: 'TecAlliance Vietnam',
			href: 'https://www.tecalliance.net/',
			badges: ['Internship'],
			location: 'Ho Chi Minh City, Vietnam',
			title: 'Full Stack Engineer (Intern)',
			logoUrl:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWFIDPCKhovWEVYmwGRU7DSYDByHLl1wLrtw&s',
			start: 'Jun 2024',
			end: 'Aug 2024',
			description:
				'Developed a tool for designers to create wiring diagrams efficiently. Leveraged AI to optimize layout and spacing between circuit elements.',
		},
	],
	education: [
		{
			school: 'VNUHCM - University of Science',
			href: 'https://www.hcmus.edu.vn/',
			degree: "Bachelor's degree, Computer Software Engineering",
			logoUrl:
				'https://cdn.haitrieu.com/wp-content/uploads/2021/12/logo-hcmus-new.png',
			start: 'Sep 2021',
			end: 'Sep 2025',
		},
	],
	projects: [
		{
			title: 'Mozze',
			href: '#',
			dates: 'Oct 2024 – Present',
			active: true,
			description:
				'Personalized profiles for showcasing projects, skills, and experiences. Milestone tracking and community engagement.',
			technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'AI/ML'],
			links: [],
			image: '',
			video: '',
		},
		{
			title: 'Tool for Content Management',
			href: '#',
			dates: 'May 2024 – Aug 2024',
			active: false,
			description:
				'AI-powered tool for managing and generating content/blog posts. Boosts performance in writing and marketing.',
			technologies: ['TypeScript', 'Next.js', 'AI/ML'],
			links: [],
			image: '',
			video: '',
		},
		{
			title: 'ZapyAI',
			href: 'https://zapyai.com',
			dates: '',
			active: true,
			description: 'AI platform for privacy-focused, local audio file chat.',
			technologies: ['AI/ML', 'Web'],
			links: [
				{
					type: 'Website',
					href: 'https://zapyai.com',
					icon: <Icons.globe className='size-3' />,
				},
			],
			image: '',
			video: '',
		},
		{
			title: 'Empire Education',
			href: 'https://empire.edu.vn',
			dates: '',
			active: true,
			description: 'Education platform for online learning.',
			technologies: ['Web'],
			links: [
				{
					type: 'Website',
					href: 'https://empire.edu.vn',
					icon: <Icons.globe className='size-3' />,
				},
			],
			image: '',
			video: '',
		},
		{
			title: 'Thuoc Suc Khoe Online Newspaper',
			href: 'https://thuocsuckhoe.vn',
			dates: '',
			active: false,
			description: 'Health news platform.',
			technologies: ['Web'],
			links: [
				{
					type: 'Website',
					href: 'https://thuocsuckhoe.vn',
					icon: <Icons.globe className='size-3' />,
				},
			],
			image: '',
			video: '',
		},
	],
	hackathons: [
		{
			title: 'Hack Western 5',
			dates: 'November 23rd - 25th, 2018',
			location: 'London, Ontario',
			description:
				'Developed a mobile application which delivered bedtime stories to children using augmented reality.',
			image:
				'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
			links: [],
		},
		{
			title: 'Hack The North',
			dates: 'September 14th - 16th, 2018',
			location: 'Waterloo, Ontario',
			description:
				'Developed a mobile application which delivers university campus wide events in real time to all students.',
			image:
				'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
			links: [],
		},
		{
			title: 'FirstNet Public Safety Hackathon',
			dates: 'March 23rd - 24th, 2018',
			location: 'San Francisco, California',
			description:
				'Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.',
			icon: 'public',
			image:
				'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png',
			links: [
				{
					title: 'Source',
					icon: <Icons.github className='h-4 w-4' />,
					href: 'https://github.com/UWPortalSDK/crowmark',
				},
			],
		},
	],
} as const;

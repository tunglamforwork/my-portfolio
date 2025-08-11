import { Icons } from '@/components/icons';
import { HomeIcon, NotebookIcon } from 'lucide-react';

export const DATA = {
	name: 'Lam (Hugo) Tran',
	initials: 'TT',
	url: 'https://ttlam.dev',
	location: 'Quận 12, Ho Chi Minh City, Vietnam',
	locationLink: 'https://www.google.com/maps/place/quan12',
	description:
		'Software Engineer specializing in Applied AI, with a focus on integrating the latest AI technologies and LLMs into software development and architecture.',
	summary:
		"I'm Tung Lam Tran or you can call me Hugo. I'm a software engineer from Vietnam. I love programming and building software. Join me as we explore coding tips, tutorials, and real-world stories to sharpen our skills and stay inspired in the ever-evolving world of programming. Wish you best of luck ✨ and happy coding 🚀",
	avatarUrl: '/me.png',
	skills: [
		'Full-Stack Web Development',
		'Python',
		'Node.js',
		'React.js',
		'System Architecture',
		'Javascript',
		'TypeScript',
		'Next.js',
		'LLM Frameworks',
		'MongoDB',
		'SQL - NoSQL DB',
		'Loopback4',
		'NestJS',
		'AWS services',
		'Background Jobs',
		'Agile Development',
		'Realtime Application',
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
		{
			company: 'Medlaw Vietnam',
			href: 'https://www.medlaw.vn/',
			badges: ['Freelance'],
			location: 'Ho Chi Minh City, Vietnam',
			title: 'Team Lead',
			logoUrl:
				'https://medlaw.vn/wp-content/uploads/2021/01/image_2021_01_10T10_18_53_678Z.png',
			start: 'Jan 2022',
			end: 'April 2022',
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
			title: 'Udeffy',
			href: 'https://udeffy.com',
			dates: 'Jan 2025 – Present',
			active: true,
			description:
				'Udeffy is an AI-powered learning platform that creates personalized learning journeys, combining intelligent content, interactive lessons, and real-time progress tracking to help learners achieve their goals faster and stay engaged.',
			technologies: [
				'Next.js (FE)',
				'TailwindCSS',
				'TypeScript',
				'LLM',
				'NestJS (BE)',
				'Redis',
				'BullMQ',
				'BunnyCDN',
				'Resend (Email & Newsletter)',
				'Polar (Payments)',
				'ShadcnUI',
				'Umami (Analytics)',
			],
			links: [
				{
					type: 'Website',
					href: 'https://udeffy.com',
					icon: <Icons.globe className='size-3' />,
				},
			],
			image: '',
			video: '',
		},
		{
			title: 'Zapy CLI',
			href: '',
			dates: 'March 2025 - Present',
			active: true,
			description:
				'A production-grade TypeScript monorepo featuring an AI-powered CLI tool for Unity game development. Transform your game design documents into Unity C# scripts using AI.',
			technologies: [
				'AI/ML',
				'Python',
				'Typescript',
				'CLI Tool',
				'LLM',
				'Unity Engine',
			],
			links: [],
			image: '',
			video: '',
		},
		{
			title: 'Mozze',
			href: 'https://mozze.vercel.app',
			dates: 'March 2024 - June - 2024',
			active: false,
			description:
				'Build your personal profile page to showcase your personal projects',
			technologies: [
				'Typescript',
				'TailwindCSS',
				'NextJS',
				'Stripe',
				'Server Actions',
				'Prisma ORM',
				'Next-Auth',
			],
			links: [
				{
					type: 'Website',
					href: 'https://mozze.vercel.app',
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
			description:
				'An online medical and legal news platform with a blog-style content engine.',
			technologies: [
				'MongoDB',
				'ExpressJS',
				'Reactjs',
				'GraphQL',
				'Google Analytics',
				'CMS',
				'Ads Management',
			],
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
			title: 'Zalo AI Challenge 2022',
			dates: 'November 4th - December 12th, 2022',
			location: 'Ho Chi Minh, Viet Nam',
			description:
				'Developed an AI model to identify fake images/videos - Liveness Detection problem',
			image:
				'https://cdn-1.webcatalog.io/catalog/zalo-ai/zalo-ai-icon-filled-256.png?v=1714777675773',
			links: [
				{
					title: 'Source',
					icon: <Icons.github className='h-4 w-4' />,
					href: 'https://github.com/tunglamforwork/zalo-ai',
				},
				{
					title: 'Kaggle',
					icon: <Icons.kaggle className='h-4 w-4' />,
					href: 'https://www.kaggle.com/code/trantunglam/zalo-ai',
				},
			],
		},
		{
			title: 'GDSC AI Challenge 2021',
			dates: 'August 1st - September 1st, 2021',
			location: 'HCMUT, Viet Nam',
			description:
				'Developed an AI model for image classification in general objects',
			image:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSShQfHNHhdM5isJrgzTQheDRkvugcwO_6hQA&s',
			links: [
				{
					title: 'Kaggle',
					icon: <Icons.kaggle className='h-4 w-4' />,
					href: 'https://www.kaggle.com/code/trantunglam/gdsc-ai',
				},
			],
		},
	],
} as const;

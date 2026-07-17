export type Project = {
	slug: string;
	title: string;
	descriptor: string;
	year: string;
	category: string;
	image: string;
	dates: string;
	role: string;
	website?: string;
	repo?: string;
	overview: string[];
	highlights: { title: string; description: string }[];
	technologies?: string[];
};

export type TimelineChapter = {
	date: string;
	title: string;
	description: string;
};

export type Experience = {
	slug: string;
	company: string;
	role: string;
	start: string;
	end: string;
	location: string;
	website: string;
	summary: string;
	statement: string;
	timeline: TimelineChapter[];
	relatedProjects: string[];
};

export type Stat = {
	label: string;
	value: string;
};

export type NavItem = {
	label: string;
	href: string;
};

export const SITE_URL = 'https://ttlam.dev';
export const BLOG_URL = 'https://blog.ttlam.dev';

export const SITE = {
	brand: 'Lam Tran',
	tagline: 'SOFTWARE ENGINEER',
	established: 'EST. 2022',
	email: 'ttlam.dev@gmail.com',
	location: {
		city: 'Ho Chi Minh City',
		lines: ['Quận 12', 'Ho Chi Minh City', 'Vietnam'],
	},
	blurb: 'I build software that embraces clarity and intent. Engineering reduced to its essential elements.',
	heroIntro:
		'A software engineer specializing in Applied AI — exploring the intersection of modern web architecture, LLMs, and human experience.',
} as const;

export const NAV_ITEMS: NavItem[] = [
	{ label: 'About', href: '/#about' },
	{ label: 'Experience', href: '/#experience' },
	{ label: 'Projects', href: '/#projects' },
	{ label: 'Journal', href: '/#journal' },
	{ label: 'Contact', href: '/#contact' },
];

export const EXPERIENCES: Experience[] = [
	{
		slug: 'netcompany',
		company: 'Netcompany',
		role: 'Consultant',
		start: 'May 2026',
		end: 'Present',
		location: 'Ho Chi Minh City, Vietnam',
		website: 'https://www.netcompany.com',
		summary:
			'Working on Horizon, a Life & Pension platform for FORCA — a multi-tenant system serving the LP and PKA pension providers, delivering pension services to members across Denmark.',
		statement:
			'Working directly with clients as a consultant — engineering Horizon, a Life & Pension platform that serves pension members across Denmark.',
		timeline: [
			{
				date: 'MAY 2026',
				title: 'A new chapter',
				description:
					'Joined Netcompany in Ho Chi Minh City as a Consultant — an engineering role that works directly with clients, where understanding the business is as important as writing the code.',
			},
			{
				date: 'MAY 2026',
				title: 'Meeting Horizon',
				description:
					'Onboarded onto Horizon, a Life & Pension project built for FORCA. The domain is deep: pensions, life insurance, and the long-term financial security of real people.',
			},
			{
				date: '2026',
				title: 'Two tenants, one platform',
				description:
					'Horizon is built as a multi-tenant system serving two pension providers — LP and PKA — each with their own products and rules, delivering pension services to members across Denmark from a shared platform.',
			},
			{
				date: 'PRESENT',
				title: 'The road ahead',
				description:
					'Continuing to grow into the Life & Pension domain, bridging client needs and engineering — one release at a time.',
			},
		],
		relatedProjects: [],
	},
	{
		slug: 'link-brokerages',
		company: 'Link Brokerages',
		role: 'Full-stack Developer',
		start: 'Nov 2024',
		end: 'May 2026',
		location: 'Remote, United States',
		website: 'https://www.linkbrokerages.com',
		summary:
			'Built LinkAI, an AI assistant for property decisions — real-time market insights, property valuations, and trend analysis for a US real-estate brokerage.',
		statement:
			'A year and a half building LinkAI — an AI assistant that helps people make property decisions with real-time market intelligence.',
		timeline: [
			{
				date: 'NOV 2024',
				title: 'Going remote',
				description:
					'Joined Link Brokerages, a US real-estate company, as a remote full-stack developer — collaborating across time zones from Vietnam.',
			},
			{
				date: 'LATE 2024',
				title: 'The idea of LinkAI',
				description:
					'Started building LinkAI from the ground up: an AI assistant for property decisions, designed to put market knowledge into every conversation.',
			},
			{
				date: '2025',
				title: 'Intelligence, delivered in real time',
				description:
					'Shipped the core AI features — real-time market insights, property valuations, and trend analysis — integrating LLMs into a production full-stack application.',
			},
			{
				date: 'MAY 2026',
				title: 'Handing over',
				description:
					'Wrapped up my time at Link Brokerages with LinkAI live in production, and moved on to a new chapter at Netcompany.',
			},
		],
		relatedProjects: ['linkai'],
	},
	{
		slug: 'tecalliance',
		company: 'TecAlliance Vietnam',
		role: 'Full Stack Engineer (Intern)',
		start: 'Jun 2024',
		end: 'Aug 2024',
		location: 'Ho Chi Minh City, Vietnam',
		website: 'https://www.tecalliance.net/',
		summary:
			'Developed a tool for designers to create wiring diagrams efficiently, leveraging AI to optimize layout and spacing between circuit elements.',
		statement:
			'A summer inside the automotive data industry — building a wiring diagram tool where AI does the tedious part of the drawing.',
		timeline: [
			{
				date: 'JUN 2024',
				title: 'First day in automotive data',
				description:
					'Started a full-stack engineering internship at TecAlliance, a global leader in automotive aftermarket data, at their Ho Chi Minh City office.',
			},
			{
				date: 'JUL 2024',
				title: 'A tool for designers',
				description:
					'Built a tool that lets designers create wiring diagrams efficiently — turning a slow, manual drawing process into a streamlined workflow.',
			},
			{
				date: 'AUG 2024',
				title: 'Letting AI draw the lines',
				description:
					'Leveraged AI to optimize layout and spacing between circuit elements, then wrapped up the internship with the tool in the hands of its designers.',
			},
		],
		relatedProjects: ['wiring-studio'],
	},
];

export const PROJECTS: Project[] = [
	{
		slug: 'ampit',
		title: 'Ampit',
		descriptor: 'Git blame for engineering decisions',
		year: '2026',
		category: 'Developer Tool',
		image:
			'https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=2400&auto=format&fit=crop',
		dates: '2026 — Present',
		role: 'Creator',
		website: 'https://ampit.com',
		overview: [
			'Git shows what changed, but not why it changed. As teams build more with AI coding agents like Claude Code, the code survives but the decisions behind it are lost — why an architecture was chosen, which alternatives were rejected, which constraints forced a workaround.',
			'Ampit is a decision provenance layer for Claude Code and engineering teams. It automatically captures engineering decisions from coding sessions, commits, pull requests, and tickets, and structures them into a searchable decision graph — so "why is this built this way?" takes thirty seconds to answer instead of two hours.',
		],
		highlights: [
			{
				title: 'Decision capture engine',
				description:
					'Automatically captures decisions — with alternatives, rejected options, constraints, and tradeoffs — from Claude Code sessions, commit messages, PR descriptions, and postmortems.',
			},
			{
				title: 'Context retrieval injection',
				description:
					'Before Claude answers, relevant prior decisions are retrieved and injected into context — so the AI stops repeating mistakes the team already learned from.',
			},
			{
				title: 'Decision graph',
				description:
					'Decisions link to files, PRs, tickets, and incidents — and to the decisions they supersede — forming an institutional memory of the system.',
			},
			{
				title: 'CLI-first workflow',
				description:
					'Commands like ask, explain, impact, and incident answer provenance questions right in the terminal, where Claude Code users already live.',
			},
			{
				title: 'Hybrid retrieval',
				description:
					'Semantic search over embeddings combined with structured graph edges — not vector-only — for precise, explainable answers.',
			},
		],
		technologies: [
			'Bun',
			'TypeScript',
			'Hono',
			'tRPC',
			'PostgreSQL',
			'Drizzle ORM',
			'pgvector',
			'Docker',
		],
	},
	{
		slug: 'giaimalaso',
		title: 'GiaiMaLaSo',
		descriptor: 'AI destiny-chart reading platform',
		year: '2026',
		category: 'AI Platform',
		image:
			'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=2400&auto=format&fit=crop',
		dates: '2026 — Present',
		role: 'Creator',
		website: 'https://giaimalaso.ai.vn',
		overview: [
			'GiaiMaLaSo brings Vietnamese metaphysics to the AI era — an online platform that generates and interprets destiny charts (Tử Vi), numerology readings, and tarot draws, making a traditionally expert-gated field accessible, private, and personal.',
			'Under the hood, a chart engine handles solar-to-lunar calendar conversion and precise star placement across the twelve houses, while an LLM interpretation engine with expert-crafted prompts turns the raw chart into a personalized reading — free at the overview level, with in-depth readings unlocked via local payment rails.',
		],
		highlights: [
			{
				title: 'Automated chart engine',
				description:
					'Converts solar to lunar dates and places the stars across the twelve houses to Vietnamese standards, rendering the full chart as an image.',
			},
			{
				title: 'AI interpretation engine',
				description:
					'An LLM pipeline with expert prompts produces natural Vietnamese readings — overview for free, with in-depth 12-house and decade-cycle analysis as premium.',
			},
			{
				title: 'Numerology & Tarot modules',
				description:
					'Core numerology numbers with pyramid-chart PDF reports, plus one-card and three-card AI tarot readings personalized to the question asked.',
			},
			{
				title: 'Local payment rails',
				description:
					'Momo, VNPAY, and QR bank transfer — with reports unlocked automatically the moment payment confirmation arrives.',
			},
			{
				title: 'Privacy by design',
				description:
					'Sensitive personal data (names, birth dates, phone numbers) encrypted at rest, in compliance with Vietnam’s personal data protection law.',
			},
		],
		technologies: ['Next.js', 'TypeScript', 'LLM', 'Mobile-first UI'],
	},
	{
		slug: 'linkai',
		title: 'LinkAI',
		descriptor: 'AI assistant for property decisions',
		year: '2024',
		category: 'Applied AI',
		image:
			'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2400&auto=format&fit=crop',
		dates: 'Nov 2024 — May 2026',
		role: 'Full-stack Developer at Link Brokerages',
		website: 'https://www.linkbrokerages.com',
		overview: [
			'LinkAI is an AI assistant for property decisions, built for Link Brokerages — a US real-estate company. It delivers real-time market insights, property valuations, and trend analysis, putting market intelligence into every client conversation.',
			'I built LinkAI as a remote full-stack developer over a year and a half, integrating LLMs into a production application end to end — from data pipelines to the conversational interface.',
		],
		highlights: [
			{
				title: 'Real-time market insights',
				description: 'Live market data surfaced in context, so agents and clients see what the market is doing now — not last quarter.',
			},
			{
				title: 'Property valuations',
				description: 'AI-assisted valuation that combines market comparables and trends into a defensible estimate.',
			},
			{
				title: 'Trend analysis',
				description: 'Neighborhood and market-level trend detection to support buy, sell, and hold decisions.',
			},
		],
	},
	{
		slug: 'udeffy',
		title: 'Udeffy',
		descriptor: 'AI-powered learning platform',
		year: '2025',
		category: 'Graduation Thesis',
		image:
			'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2400&auto=format&fit=crop',
		dates: 'Jan 2025 — 2025',
		role: 'Graduation thesis — VNUHCM University of Science',
		overview: [
			'Udeffy was my graduation thesis project: an AI-powered learning platform that creates personalized learning journeys, combining intelligent content, interactive lessons, and real-time progress tracking to help learners reach their goals faster and stay engaged.',
			'Built as a full production system rather than a prototype — with background job processing, a CDN-backed content pipeline, transactional email, payments, and analytics.',
		],
		highlights: [
			{
				title: 'Personalized learning journeys',
				description: 'AI-generated paths that adapt content and pacing to each learner’s goals.',
			},
			{
				title: 'Interactive lessons',
				description: 'Intelligent content combined with interactive lesson formats and real-time progress tracking.',
			},
			{
				title: 'Production-grade infrastructure',
				description: 'Background jobs with BullMQ and Redis, media via BunnyCDN, email and newsletters via Resend, payments via Polar, analytics via Umami.',
			},
		],
		technologies: [
			'Next.js',
			'TypeScript',
			'TailwindCSS',
			'NestJS',
			'LLM',
			'Redis',
			'BullMQ',
			'BunnyCDN',
			'Resend',
			'Polar',
			'Umami',
		],
	},
	{
		slug: 'zapy-cli',
		title: 'Zapy CLI',
		descriptor: 'Game design docs to Unity C# with AI',
		year: '2025',
		category: 'Developer Tool',
		image:
			'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2400&auto=format&fit=crop',
		dates: 'Mar 2025 — Present',
		role: 'Creator',
		overview: [
			'Zapy is an AI-powered CLI tool for Unity game development: point it at a game design document and it generates the corresponding Unity C# scripts.',
			'It lives in a production-grade TypeScript monorepo, with Python in the AI pipeline — built to shorten the distance between a designer’s intent and running gameplay code.',
		],
		highlights: [
			{
				title: 'Design-doc to code',
				description: 'Transforms game design documents into structured Unity C# scripts using LLMs.',
			},
			{
				title: 'Production-grade monorepo',
				description: 'A disciplined TypeScript monorepo setup with shared tooling across the CLI and AI pipeline.',
			},
		],
		technologies: ['TypeScript', 'Python', 'LLM', 'CLI', 'Unity Engine'],
	},
	{
		slug: 'mozze',
		title: 'Mozze',
		descriptor: 'Project showcase & community platform',
		year: '2024',
		category: 'Web App',
		image:
			'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2400&auto=format&fit=crop',
		dates: 'Mar 2024 — Jun 2024',
		role: 'Creator',
		repo: 'https://github.com/tunglamforwork/mozze',
		overview: [
			'Mozze is a platform for showcasing personal projects — a space to highlight your work while getting real insight into how people engage with it.',
			'Beyond the showcase itself, it layers in analytics, community, and gamification: you can see who’s viewing your projects, collect feedback, follow other builders, and climb the leaderboards.',
		],
		highlights: [
			{
				title: 'Project showcase',
				description: 'Create rich project profiles with descriptions, images, and links.',
			},
			{
				title: 'Analytics dashboard',
				description: 'View metrics, interest tracking through likes and bookmarks, and feedback & reviews on every project.',
			},
			{
				title: 'User profiles',
				description: 'A portfolio page per user, displaying their projects and achievements.',
			},
			{
				title: 'Community interaction',
				description: 'Follow other users, share projects, and collaborate — built to foster a supportive builder community.',
			},
			{
				title: 'Gamification',
				description: 'Leaderboards highlight top projects and the most active users, with rewards for participation and feedback.',
			},
		],
		technologies: [
			'TypeScript',
			'Next.js',
			'TailwindCSS',
			'Stripe',
			'Server Actions',
			'Prisma ORM',
			'NextAuth',
		],
	},
	{
		slug: 'wiring-studio',
		title: 'Wiring Studio',
		descriptor: 'AI-assisted wiring diagram tool',
		year: '2024',
		category: 'Internal Tool',
		image:
			'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2400&auto=format&fit=crop',
		dates: 'Jun 2024 — Aug 2024',
		role: 'Full Stack Engineer (Intern) at TecAlliance',
		website: 'https://www.tecalliance.net/',
		overview: [
			'An internal tool built at TecAlliance that lets designers create automotive wiring diagrams efficiently — replacing a slow, manual drawing process.',
			'AI handles the tedious part: optimizing the layout and spacing between circuit elements so designers can focus on the design, not the drafting.',
		],
		highlights: [
			{
				title: 'Efficient diagram authoring',
				description: 'A streamlined workflow for designers to compose wiring diagrams quickly.',
			},
			{
				title: 'AI layout optimization',
				description: 'Automatic optimization of layout and spacing between circuit elements.',
			},
		],
	},
];

export const ABOUT = {
	statement:
		'I believe software is not just about shipping features, but about framing problems clearly. My approach subtracts the unnecessary to reveal the essential.',
	paragraphs: [
		"I'm Tung Lam Tran — you can call me Hugo. A software engineer from Vietnam with a focus on integrating the latest AI technologies and LLMs into software development and architecture, from real-time full-stack applications to AI-powered platforms.",
		'My process is iterative and collaborative. I work across the stack — TypeScript, Python, Next.js, NestJS, and cloud infrastructure — always with the same attention to detail, building products that scale and feel effortless.',
	],
	stats: [
		{ label: 'Years Experience', value: '3+' },
		{ label: 'Projects Shipped', value: '10+' },
		{ label: 'AI Hackathons', value: '2' },
		{ label: 'Core Stack', value: 'TS / PY' },
	] as Stat[],
} as const;

export const EDUCATION = {
	school: 'VNUHCM — University of Science (HCMUS)',
	href: 'https://www.hcmus.edu.vn/',
	degree: "Bachelor's degree, Computer Software Engineering",
	period: '2021 — 2025',
	gpa: 'GPA 3.8 / 4.0',
} as const;

export const CURRENT = {
	role: 'Consultant',
	company: 'Netcompany',
	detail: 'Project Horizon — Life & Pension',
} as const;

export const SOCIALS = [
	{ name: 'GitHub', url: 'https://github.com/tunglamforwork' },
	{ name: 'LinkedIn', url: 'https://www.linkedin.com/in/ttlamdev' },
	{ name: 'X', url: 'https://x.com/huG0dev' },
	{ name: 'YouTube', url: 'https://www.youtube.com/@hugoodev' },
] as const;

export function getProject(slug: string) {
	return PROJECTS.find(project => project.slug === slug);
}

export function getExperience(slug: string) {
	return EXPERIENCES.find(experience => experience.slug === slug);
}

export function getNextProject(slug: string) {
	const index = PROJECTS.findIndex(project => project.slug === slug);
	if (index === -1) return undefined;
	return PROJECTS[(index + 1) % PROJECTS.length];
}

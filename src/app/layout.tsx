import { TooltipProvider } from '@/components/ui/tooltip';
import { DATA } from '@/data/resume';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Onest } from 'next/font/google';
import './globals.css';

const fontOnest = Onest({
	subsets: ['latin'],
	variable: '--font-onest',
	weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
	metadataBase: new URL(DATA.url),
	title: {
		default: 'Lam Tran — Software Engineer',
		template: `%s | Lam Tran`,
	},
	description: DATA.description,
	openGraph: {
		title: 'Lam Tran — Software Engineer',
		description: DATA.description,
		url: DATA.url,
		siteName: 'Lam Tran',
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	twitter: {
		title: 'Lam Tran',
		card: 'summary_large_image',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={cn('min-h-screen bg-background antialiased', fontOnest.variable)}>
				<TooltipProvider delayDuration={0}>{children}</TooltipProvider>
			</body>
		</html>
	);
}

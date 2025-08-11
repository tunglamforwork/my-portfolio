'use client';

import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { ArrowRight, MoveLeftIcon } from 'lucide-react';

export default function BackButton() {
	const router = useRouter();
	return (
		<Button onClick={() => router.back()} className='my-4' variant='ghost'>
			<MoveLeftIcon className='h-4 w-4 mr-2' />
			Back
		</Button>
	);
}

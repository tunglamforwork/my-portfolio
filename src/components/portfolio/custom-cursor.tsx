'use client';

import { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
	const cursorRef = useRef<HTMLDivElement>(null);
	const [isHoveringLink, setIsHoveringLink] = useState(false);

	useEffect(() => {
		const moveCursor = (e: MouseEvent) => {
			if (cursorRef.current) {
				cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
			}
		};
		// Delegated so links mounted later (e.g. the menu overlay) are covered too
		const handleOver = (e: MouseEvent) => {
			setIsHoveringLink(!!(e.target as Element).closest('a, button'));
		};
		window.addEventListener('mousemove', moveCursor);
		window.addEventListener('mouseover', handleOver);
		return () => {
			window.removeEventListener('mousemove', moveCursor);
			window.removeEventListener('mouseover', handleOver);
		};
	}, []);

	return (
		<div
			ref={cursorRef}
			className={`fixed top-0 left-0 w-4 h-4 bg-black rounded-none pointer-events-none z-[100] mix-blend-difference transition-[width,height,opacity] duration-300 -translate-x-1/2 -translate-y-1/2 hidden md:block ${
				isHoveringLink ? 'w-8 h-8 opacity-50' : 'opacity-100'
			}`}
		/>
	);
}

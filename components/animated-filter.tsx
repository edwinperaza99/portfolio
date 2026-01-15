"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const FILTER_OPTIONS = [
	"backdrop-blur-sm backdrop-brightness-110",
	"backdrop-brightness-150 backdrop-contrast-125",
	"backdrop-sepia backdrop-blur-xs",
	"backdrop-saturate-200 backdrop-blur-sm",
	"backdrop-hue-rotate-180 backdrop-blur-xs",
	"backdrop-blur-md backdrop-saturate-150",
	"backdrop-grayscale backdrop-contrast-150",
	"backdrop-grayscale",
	"backdrop-blur-sm backdrop-grayscale",
];

const FRAME_OPTIONS = [
	"top-[6%] left-[8%] w-[72%] h-[36%]",
	"top-[48%] left-[5%] w-[58%] h-[46%]",
	"top-[18%] left-[56%] w-[32%] h-[64%]",
	"top-[4%] left-[38%] w-[52%] h-[32%]",
	"top-[28%] left-[6%] w-[44%] h-[56%]",
	"top-[58%] left-[48%] w-[46%] h-[30%]",
	"top-[12%] left-[32%] w-[40%] h-[76%]",
];

const randomIndex = (length: number, exclude?: number) => {
	if (length <= 1) return 0;
	let next = exclude ?? -1;
	while (next === exclude) {
		next = Math.floor(Math.random() * length);
	}
	return next;
};

export default function AnimatedFilter() {
	const filterOptions = useMemo(() => FILTER_OPTIONS, []);
	const frameOptions = useMemo(() => FRAME_OPTIONS, []);
	const [filterIndex, setFilterIndex] = useState(() =>
		Math.floor(Math.random() * filterOptions.length)
	);
	const [frameIndex, setFrameIndex] = useState(() =>
		Math.floor(Math.random() * frameOptions.length)
	);
	const activeFilter = filterOptions[filterIndex];
	const activeFrame = frameOptions[frameIndex];

	useEffect(() => {
		// Cycle through random filter and frame combos so the overlay keeps changing.
		const cycle = window.setInterval(() => {
			setFrameIndex((previous) => randomIndex(frameOptions.length, previous));
			setFilterIndex((previous) => randomIndex(filterOptions.length, previous));
		}, 6800);

		return () => window.clearInterval(cycle);
	}, [filterOptions.length, frameOptions.length]);

	return (
		<div className="relative flex h-full w-full items-center justify-center">
			<div className="relative h-full max-h-[70%] w-full max-w-[70%] overflow-hidden">
				<Image
					src="/images/headshot.jpg"
					alt="Headshot with animated filter frame"
					className="object-cover rounded-lg border border-white/20 shadow-2xl"
					fill
					priority
				/>
			</div>
			<div
				className={`rounded-lg pointer-events-none absolute z-50 border border-white/10 transition-all duration-700 ease-out bg-transparent ${activeFrame} ${activeFilter}`}
			/>
		</div>
	);
}

"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const memojiImages = ["/memoji/1.png", "/memoji/2.png", "/memoji/3.png"];

export default function About() {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [isFading, setIsFading] = useState(false);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	// Function to change the image
	const changeImage = () => {
		setIsFading(true);
		setTimeout(() => {
			setCurrentImageIndex(
				(prevIndex) => (prevIndex + 1) % memojiImages.length
			);
			setIsFading(false);
		}, 500); // Matches the fade-in duration
	};

	// Handle timer reset and click
	const handleImageClick = () => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
		}
		changeImage();
		startAutoChange(); // Restart the timer
	};

	// Start automatic image change
	const startAutoChange = () => {
		intervalRef.current = setInterval(changeImage, 8000);
	};

	// Initialize the interval on mount
	useEffect(() => {
		startAutoChange();

		// Cleanup on unmount
		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, []);

	return (
		<div className="container px-4 pt-32">
			<div className="flex flex-col justify-center items-center space-y-2 text-gray-200 px-4 md:px-8">
				<h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white text-center">
					Hello! I&apos;m Edwin{" "}
					<span
						role="img"
						aria-label="waving hand"
						className="ml-1 animate-wave"
					>
						👋
					</span>
				</h1>
				<h3 className="uppercase text-center text-lg md:text-xl">
					software engineer, full stack developer
				</h3>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-2">
				<div className="flex justify-center items-center">
					<div
						className={`w-64 h-64 relative cursor-pointer transition-opacity duration-500 ${
							isFading ? "opacity-0" : "opacity-100"
						}`}
						onClick={handleImageClick}
					>
						<Image
							src={memojiImages[currentImageIndex]}
							alt={`Memoji ${currentImageIndex + 1}`}
							layout="fill"
							objectFit="contain"
							priority
						/>
					</div>
				</div>
				<div className="">
					<div className="glass p-2 md:p-4 rounded-lg text-sm space-y-2">
						<p className="text-sm">
							I&apos;m a Computer Science graduate from{" "}
							<a
								href="https://www.fullerton.edu"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-500 hover:text-blue-600"
							>
								CSUF
							</a>
							. With a strong focus on front-end development, I specialize in
							creating engaging user experiences using React, Next.js,
							TypeScript, and Tailwind CSS.
						</p>
						<p className="text-sm">
							I&apos;m actively seeking opportunities in software engineering to
							contribute to innovative, user-focused solutions. Check out my
							portfolio to explore some of the projects I&apos;ve built.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

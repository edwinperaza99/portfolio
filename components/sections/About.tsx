"use client";
import { useState, useEffect, useRef } from "react";
import {
	MotionDiv,
	MotionH2,
	slideInFromBottom,
	slideInFromLeft,
	slideInFromRight,
} from "@/components/motionUtils";

const memojiImages = ["/memoji/1.PNG", "/memoji/2.PNG", "/memoji/3.PNG"];

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
		<section className="container px-4 py-6">
			<MotionH2
				variants={slideInFromBottom}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: false, amount: 0.5 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className="text-5xl uppercase mb-2 font-bold bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent tracking-tight text-center"
			>
				About Me
			</MotionH2>
			<div className="flex justify-center items-center gap-5 flex-col md:flex-row">
				<MotionDiv
					variants={slideInFromLeft}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, amount: 0.5 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="w-64 h-64 overflow-hidden rounded-full border-2 border-blue-300"
				>
					<img
						src="https://media.licdn.com/dms/image/v2/D5603AQEh8X2yHa3GBA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710819723776?e=1741824000&v=beta&t=nnj8AEDStQa6Vd1G5_nfhJk9IEri7gAgzliX1NM9d0Y"
						alt="Profile Pic"
						className="object-cover w-full h-full scale-110 "
					/>
				</MotionDiv>
				{/* <div
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
					</div> */}
				<MotionDiv
					variants={slideInFromRight}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, amount: 0.5 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className=""
				>
					<div className="glass p-2 md:p-4 rounded-lg text-base space-y-2 max-w-xl">
						<p>
							I&apos;m a Computer Science graduate from{" "}
							<a
								href="https://www.fullerton.edu"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-300 hover:text-blue-400"
							>
								CSUF
							</a>
							. With a strong focus on front-end development, I specialize in
							creating engaging user experiences using React, Next.js,
							TypeScript, and Tailwind CSS.
						</p>
						<p>
							I&apos;m actively seeking opportunities in software engineering to
							contribute to innovative, user-focused solutions. Check out my
							portfolio to explore some of the projects I&apos;ve built.
						</p>
					</div>
				</MotionDiv>
			</div>
		</section>
	);
}

"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";
import { cn } from "@/lib/utils";

type TypewriterQuoteProps = {
	quote: string;
	author: string;
	typingSpeed?: number;
	className?: string;
};

export function TypewriterQuote({
	quote,
	author,
	typingSpeed = 40,
	className,
}: TypewriterQuoteProps) {
	const [displayedText, setDisplayedText] = useState("");
	const [showAuthor, setShowAuthor] = useState(false);
	const [isComplete, setIsComplete] = useState(false);
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { once: true, amount: 0.5 });
	const hasStarted = useRef(false);

	useEffect(() => {
		if (!isInView || hasStarted.current) return;
		hasStarted.current = true;

		let currentIndex = 0;
		const typeNextChar = () => {
			if (currentIndex < quote.length) {
				setDisplayedText(quote.slice(0, currentIndex + 1));
				currentIndex++;
				setTimeout(typeNextChar, typingSpeed);
			} else {
				setTimeout(() => {
					setShowAuthor(true);
					setTimeout(() => setIsComplete(true), 500);
				}, 300);
			}
		};

		// Small delay before starting
		setTimeout(typeNextChar, 400);
	}, [isInView, quote, typingSpeed]);

	return (
		<div ref={ref} className={cn("relative", className)}>
			{/* Sparkles background - only shows when typing is complete */}
			<div
				className={cn(
					"absolute inset-0 transition-opacity duration-1000",
					isComplete ? "opacity-100" : "opacity-0"
				)}
			>
				<SparklesCore
					id="quote-sparkles"
					background="transparent"
					minSize={0.4}
					maxSize={1.2}
					particleDensity={40}
					particleColor="#5eead4"
					className="w-full h-full"
				/>
			</div>

			{/* Quote content */}
			<div className="relative z-10 py-16 text-center space-y-8">
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5 }}
					className="flex items-center justify-center gap-3 text-[0.65rem] uppercase tracking-[0.45em] text-white/40"
				>
					<span className="hidden sm:block h-px w-16 bg-white/20" />
					<span className="inline-flex items-center gap-2">
						<QuoteIcon />
						Words to live by
					</span>
					<span className="hidden sm:block h-px w-16 bg-white/20" />
				</motion.div>

				<div className="text-xl sm:text-2xl text-white/90 italic font-light leading-relaxed max-w-3xl mx-auto min-h-[4rem]">
					<span className="text-teal-200">&ldquo;</span>
					<span className="relative">
						{displayedText}
						{/* Blinking cursor */}
						{!isComplete && (
							<motion.span
								className="inline-block w-[2px] h-[1.1em] bg-teal-200 ml-0.5 align-middle"
								animate={{ opacity: [1, 0] }}
								transition={{
									duration: 0.6,
									repeat: Infinity,
									repeatType: "reverse",
								}}
							/>
						)}
					</span>
					{displayedText.length === quote.length && (
						<span className="text-teal-200">&rdquo;</span>
					)}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={showAuthor ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className="text-xs uppercase tracking-[0.5em] text-white/60"
				>
					— {author}
				</motion.div>
			</div>
		</div>
	);
}

function QuoteIcon() {
	return (
		<svg
			className="w-4 h-4"
			fill="currentColor"
			viewBox="0 0 24 24"
			aria-hidden="true"
		>
			<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
		</svg>
	);
}

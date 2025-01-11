"use client";
import { useState, useEffect } from "react";
import { fadeInOut, MotionSpan } from "@/components/motionUtils";

type TypingEffectProps = {
	words: string[];
	typingSpeed?: number; // Speed of typing (ms per character)
	pauseDuration?: number; // Pause before deleting or switching words
};

export default function TypingEffect({
	words,
	typingSpeed = 100,
	pauseDuration = 2000,
}: TypingEffectProps) {
	const [currentWordIndex, setCurrentWordIndex] = useState(0);
	const [displayedText, setDisplayedText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {
		const currentWord = words[currentWordIndex];

		const handleTyping = () => {
			// Typing or deleting character logic
			setDisplayedText((prevText) => {
				if (!isDeleting) {
					// Typing: Add the next character
					return currentWord.slice(0, prevText.length + 1);
				} else {
					// Deleting: Remove the last character
					return prevText.slice(0, -1);
				}
			});

			// Check if word is fully typed or fully deleted
			if (!isDeleting && displayedText === currentWord) {
				// Start deleting after a pause
				setTimeout(() => setIsDeleting(true), pauseDuration);
			} else if (isDeleting && displayedText === "") {
				// Move to next word and start typing
				setIsDeleting(false);
				setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
			}
		};

		const typingTimeout = setTimeout(handleTyping, typingSpeed);
		return () => clearTimeout(typingTimeout);
	}, [
		displayedText,
		isDeleting,
		currentWordIndex,
		words,
		typingSpeed,
		pauseDuration,
	]);

	return (
		<MotionSpan
			variants={fadeInOut}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: false, amount: 0.8 }}
			transition={{ duration: 0.5, delay: 0.2 }}
			className="typing-effect"
		>
			{displayedText}
		</MotionSpan>
	);
}

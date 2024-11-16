"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function Title({ children }: { children: ReactNode }) {
	return (
		<motion.h1
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
			className="text-5xl md:text-7xl uppercase font-black glitch"
			data-text={children}
		>
			{children}
		</motion.h1>
	);
}

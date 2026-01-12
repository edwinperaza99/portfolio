import GalaxyBackground from "@/components/GalaxyBG";
import {
	MotionDiv,
	MotionH1,
	MotionP,
	MotionSpan,
	scaleUp,
} from "@/components/motionUtils";
import TypingEffect from "@/components/TypingEffect";
import { Button } from "@/components/ui/button";
import { TypewriterQuote } from "@/components/ui/typewriter-quote";
import Link from "next/link";

import type { Variants } from "framer-motion";
import { FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";

const heroContainer: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.18,
			delayChildren: 0.1,
			when: "beforeChildren",
		},
	},
};

const heroItem: Variants = {
	hidden: { opacity: 0, x: -60 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.8, ease: "easeOut" },
	},
};

const buttonGroup: Variants = {
	hidden: { opacity: 0, x: -40 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { staggerChildren: 0.14, ease: "easeOut" },
	},
};

const buttonItem: Variants = {
	hidden: { opacity: 0, x: -30 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.6, ease: "easeOut" },
	},
};

const nameLine: Variants = {
	hidden: { opacity: 0, x: -80 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.9, ease: "easeOut" },
	},
};

const separatorContainer: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.12,
			delay: 1.1,
			duration: 0.8,
			ease: "easeOut",
		},
	},
};

const separatorLine: Variants = {
	hidden: { scaleX: 0, opacity: 0 },
	visible: {
		scaleX: 1,
		opacity: 1,
		transition: { duration: 0.6, ease: "easeOut" },
	},
};

const separatorIcon: Variants = {
	hidden: { opacity: 0, y: 12 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: "easeOut" },
	},
};

export default function Hero() {
	const contactLinks = [
		{
			label: "LinkedIn",
			href: "https://www.linkedin.com/in/edwin-peraza/",
			icon: FiLinkedin,
		},
		{
			label: "GitHub",
			href: "https://github.com/edwinperaza99",
			icon: FiGithub,
		},
		{
			label: "Email",
			href: "mailto:edwin.peraza111@gmail.com",
			icon: IoIosMail,
		},
	];

	return (
		<div className="relative overflow-hidden bg-[image:radial-gradient(80%_50%_at_50%_-20%,hsl(206,81.9%,65.3%,0.5),rgba(255,255,255,0))]">
			<GalaxyBackground direction="bottom-to-top" />
			<section className="min-h-screen grid grid-rows-[1fr_auto] gap-6 py-8">
				<MotionDiv
					variants={heroContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.6 }}
					className="flex flex-col justify-center items-center md:items-start text-gray-200 px-4 md:px-8 space-y-8 max-w-6xl mx-auto w-full text-center md:text-left"
				>
					<div className="space-y-4">
						<MotionDiv
							variants={heroItem}
							className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-zinc-200 mx-auto md:mx-0"
						>
							<span>Currently</span>
							<span className="text-teal-200 tracking-[0.2em]">
								Tech Support Specialist
							</span>
						</MotionDiv>
						<MotionH1
							variants={heroItem}
							className="gap-2 md:gap-0 w-full flex flex-col text-[5.5rem] sm:text-[5.35rem] md:text-[7.5rem] lg:text-[9.5rem] xl:text-[11rem] font-extrabold tracking-tight leading-[0.72] text-center md:text-left"
						>
							<MotionSpan
								variants={nameLine}
								className="md:-ml-2 lg:-ml-2.5 block text-white"
							>
								Edwin
							</MotionSpan>
							<MotionSpan
								variants={nameLine}
								className="md:-ml-2 lg:-ml-2.5 block text-teal-200 -translate-y-3 sm:-translate-y-5"
							>
								Peraza
							</MotionSpan>
						</MotionH1>
						<MotionDiv
							variants={heroItem}
							className="text-lg sm:text-xl text-center md:text-left"
						>
							<TypingEffect
								words={[
									"Front-end Developer",
									"Problem Solver",
									"Python Lover",
									"Code Curious",
									"Back-end Developer",
									"Passionate Learner",
								]}
								typingSpeed={100}
								pauseDuration={1500}
							/>
						</MotionDiv>
					</div>
					<MotionP
						variants={heroItem}
						className="text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-3xl mx-auto md:mx-0"
					>
						Documenting my journey toward software engineering. Each project is
						a step forward and each bug is a lesson learned.
					</MotionP>
					<MotionDiv
						variants={buttonGroup}
						className="flex flex-wrap gap-4 justify-center md:justify-start"
					>
						<MotionDiv variants={buttonItem}>
							<Button variant="heroSecondary" asChild>
								<Link href="/#contact">Let&apos;s Talk</Link>
							</Button>
						</MotionDiv>
						<MotionDiv variants={buttonItem}>
							<Button variant="heroPrimary" asChild>
								<Link
									href="/Resume_Edwin_Peraza.pdf"
									target="_blank"
									rel="noopener noreferrer"
									prefetch={false}
								>
									<FiDownload aria-hidden="true" />
									<span>Download CV</span>
								</Link>
							</Button>
						</MotionDiv>
					</MotionDiv>
				</MotionDiv>

				<MotionDiv
					variants={separatorContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					className="flex items-center justify-center md:justify-between gap-3 md:gap-5 text-2xl text-white/60 w-full px-4 max-w-[1360px] mx-auto"
				>
					<MotionSpan
						variants={separatorLine}
						className="h-[2px] w-16 flex-1 max-w-[140px] md:max-w-none md:w-auto bg-white/20 origin-left rounded-full"
					/>
					<div className="flex gap-1.5 sm:gap-2 md:gap-4 md:ml-auto">
						{contactLinks.map(({ label, href, icon: Icon }) => (
							<MotionDiv
								key={label}
								variants={separatorIcon}
								className="inline-flex"
							>
								<Link
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									prefetch={false}
									aria-label={label}
									className="inline-flex items-center justify-center p-2.5 transition hover:text-teal-200 hover:bg-white/10 rounded-full"
								>
									<Icon />
								</Link>
							</MotionDiv>
						))}
					</div>
					<MotionSpan
						variants={separatorLine}
						className="h-[2px] w-16 flex-1 max-w-[140px] md:flex-none md:w-20 bg-white/30 origin-right rounded-full"
					/>
				</MotionDiv>
			</section>
			<section className="container px-4 pb-8">
				<div className="mx-auto max-w-4xl w-full px-6">
					<TypewriterQuote
						quote="A lesson without pain is meaningless. That's because no one can gain without sacrificing something."
						author="Edward Elric"
						typingSpeed={35}
					/>
				</div>
				{/*
				<MotionDiv
					variants={scaleUp}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
					className="pt-12 flex justify-center"
				>
					<Link href="/#projects">
						<Scroll />
					</Link>
				</MotionDiv>
				*/}
			</section>
		</div>
	);
}

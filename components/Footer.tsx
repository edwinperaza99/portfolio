import { MotionDiv, MotionFooter } from "@/components/motionUtils";
import Link from "next/link";
import { IoIosMail } from "react-icons/io";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import type { Variants } from "framer-motion";

export default function Footer() {
	const containerVariants: Variants = {
		hidden: { opacity: 0, y: 24 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: "easeOut",
				staggerChildren: 0.18,
				delayChildren: 0.12,
			},
		},
	};

	const linkGroupVariants: Variants = {
		hidden: { opacity: 0, y: 16 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.45,
				ease: "easeOut",
				staggerChildren: 0.14,
			},
		},
	};

	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 12 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.4, ease: "easeOut" },
		},
	};

	return (
		<MotionFooter className="border-t border-white/20">
			<div className="container border-x border-white/20 px-4 py-6 text-white">
				<MotionDiv
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left"
				>
					<MotionDiv
						variants={linkGroupVariants}
						className="flex flex-wrap items-center justify-center gap-3 sm:justify-start"
					>
						<MotionDiv variants={itemVariants}>
							<a
								href="mailto:edwin.peraza111@gmail.com"
								className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/10"
							>
								<IoIosMail className="text-lg" />
								<span>edwin.peraza111@gmail.com</span>
							</a>
						</MotionDiv>
						<MotionDiv variants={itemVariants}>
							<Link
								href="https://github.com/edwinperaza99"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-lg transition hover:border-white/40 hover:bg-white/10"
								aria-label="GitHub"
							>
								<FiGithub />
							</Link>
						</MotionDiv>
						<MotionDiv variants={itemVariants}>
							<Link
								href="https://www.linkedin.com/in/edwin-peraza/"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-lg transition hover:border-white/40 hover:bg-white/10"
								aria-label="LinkedIn"
							>
								<FiLinkedin />
							</Link>
						</MotionDiv>
					</MotionDiv>
					<MotionDiv variants={itemVariants}>
						<p className="text-xs text-zinc-500">
							&copy; {new Date().getFullYear()} Edwin Peraza. Built with care.
						</p>
					</MotionDiv>
				</MotionDiv>
			</div>
		</MotionFooter>
	);
}

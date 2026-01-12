import { MotionDiv, MotionFooter } from "@/components/motionUtils";
import Link from "next/link";
import { IoIosMail } from "react-icons/io";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import type { Variants } from "framer-motion";

export default function SimpleFooter() {
	const containerVariants: Variants = {
		hidden: { opacity: 0, y: 16 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: "easeOut",
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 8 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.35, ease: "easeOut" },
		},
	};

	return (
		<MotionFooter className="border-t border-white/20 bg-black/20">
			<MotionDiv
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.2 }}
				className="flex flex-col items-center gap-4 px-4 py-8 text-center text-white"
			>
				<MotionDiv variants={itemVariants} className="flex items-center gap-3">
					<a
						href="mailto:edwin.peraza111@gmail.com"
						className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-lg transition hover:border-white/40 hover:bg-white/10"
						aria-label="Email"
					>
						<IoIosMail />
					</a>
					<Link
						href="https://github.com/edwinperaza99"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-lg transition hover:border-white/40 hover:bg-white/10"
						aria-label="GitHub"
					>
						<FiGithub />
					</Link>
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
				<MotionDiv variants={itemVariants}>
					<p className="text-xs text-zinc-500">
						&copy; {new Date().getFullYear()} Edwin Peraza. Built with care.
					</p>
				</MotionDiv>
			</MotionDiv>
		</MotionFooter>
	);
}

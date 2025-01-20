import { fadeInOut, MotionFooter } from "@/components/motionUtils";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<MotionFooter
			variants={fadeInOut}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: false, amount: 0.1 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			className="flex flex-col items-center justify-center gap-6 py-6 text-white"
		>
			<div className="flex justify-center gap-6 ">
				<Link
					href="https://github.com/edwinperaza99"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						src="/icons/GitHub.svg"
						alt="GitHub link"
						width={60}
						height={60}
						className="skill drop-shadow-3xl rounded-full p-3"
					/>
				</Link>
				<Link
					href="https://www.linkedin.com/in/edwin-peraza/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						src="/icons/LinkedIn.svg"
						alt="LinkedIn link"
						width={60}
						height={60}
						className="skill drop-shadow-3xl rounded-full p-3"
					/>
				</Link>
			</div>
			<p className="text-sm">
				&copy; {new Date().getFullYear()} Edwin Peraza. All rights reserved.
			</p>
		</MotionFooter>
	);
}

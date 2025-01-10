import Landing from "@/components/Galaxy";
import TypingEffect from "@/components/TypingEffect";
import Link from "next/link";
import { MotionDiv, MotionH1 } from "@/components/motionUtils";
import NavBar from "@/components/navigation/NavBar";

export default function Home() {
	return (
		<main className="min-h-dvh relative bg-transparent">
			<NavBar />
			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-50 select-none pointer-events-none">
				<MotionH1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					className="text-4xl sm:text-5xl md:text-7xl uppercase font-black glow whitespace-nowrap"
					data-text="Edwin Peraza"
				>
					Edwin Peraza
				</MotionH1>
				<p className="text-base font-bold text-gray-300 uppercase whitespace-nowrap">
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
				</p>
			</div>
			<MotionDiv
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				<Link
					href="/portfolio"
					className="absolute left-1/2 bottom-20 -translate-x-1/2 uppercase glass text-white z-50 px-4 py-2 rounded hover:opacity-90"
				>
					View Portfolio
				</Link>
			</MotionDiv>
			<Landing />
		</main>
	);
}

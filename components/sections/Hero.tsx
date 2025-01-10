import TypingEffect from "@/components/TypingEffect";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Scroll from "@/components/lottie/Scroll";
import GalaxyBackground from "@/components/GalaxyBG";

export default function Hero() {
	return (
		<div className="bg-[image:radial-gradient(80%_50%_at_50%_-20%,hsl(206,81.9%,65.3%,0.5),rgba(255,255,255,0))] min-h-screen flex justify-center items-center flex-col">
			<div className="container px-4 pt-32">
				<div className="flex flex-col justify-center items-center space-y-2 text-gray-200 px-4 md:px-8 ">
					<GalaxyBackground direction="bottom-to-top" />
					{/* // [mask-image:radial-gradient(75%_50%_at_top_center,white,transparent)]"> */}
					<h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white text-center bg-gradient-to-br from-white to-zinc-500 bg-clip-text tracking-tight text-transparent">
						Hello! I&apos;m Edwin{" "}
						<span
							role="img"
							aria-label="waving hand"
							className="ml-1 animate-wave text-white"
						>
							👋
						</span>
					</h1>
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
					<div className="flex gap-4 pt-6">
						<Button asChild>
							<Link
								href="/Resume_Edwin_Peraza.pdf"
								target="_blank"
								rel="noopener noreferrer"
								prefetch={false}
							>
								View Resume
							</Link>
						</Button>
						<Button asChild>
							<Link href="/contact">Contact Me</Link>
						</Button>
					</div>
				</div>
				<div className="pt-10">
					<Scroll />
				</div>
			</div>
		</div>
	);
}

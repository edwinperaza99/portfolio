import TypingEffect from "@/components/TypingEffect";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Scroll from "@/components/lottie/Scroll";
import GalaxyBackground from "@/components/GalaxyBG";

export default function Hero() {
	return (
		<div className="bg-[image:radial-gradient(80%_50%_at_50%_-20%,hsl(206,81.9%,65.3%,0.5),rgba(255,255,255,0))] min-h-screen flex justify-center items-center flex-col">
			<div className="container px-4 pt-32">
				<div className="flex flex-col justify-center items-center space-y-0 text-gray-200 px-2 md:px-8 ">
					<GalaxyBackground direction="bottom-to-top" />
					{/* // [mask-image:radial-gradient(75%_50%_at_top_center,white,transparent)]"> */}
					<p className="text-6xl sm:text-6xl md:text-7xl font-bold text-center bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent tracking-tight">
						Hey!{" "}
					</p>
					<h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-center bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent tracking-tight pb-4">
						I&apos;m {/* <span className="text-nowrap"> */}
						Edwin Peraza{" "}
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
							<Link href="/#contact">Contact Me</Link>
						</Button>
					</div>
				</div>
				<div className="pt-16">
					<Scroll />
				</div>
			</div>
		</div>
	);
}

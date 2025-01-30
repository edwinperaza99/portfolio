import TypingEffect from "@/components/TypingEffect";
import { Button } from "@/components/ui/button";
import { PiReadCvLogoThin } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";
import Scroll from "@/components/lottie/Scroll";
import GalaxyBackground from "@/components/GalaxyBG";
import {
	MotionDiv,
	MotionH1,
	MotionP,
	scaleUp,
	slideInFromLeft,
	slideInFromRight,
} from "@/components/motionUtils";

export default function Hero() {
	return (
		<div className="bg-[image:radial-gradient(80%_50%_at_50%_-20%,hsl(206,81.9%,65.3%,0.5),rgba(255,255,255,0))] min-h-viewport flex justify-center items-center flex-col">
			<div className="container px-4 pt-32">
				<div className="flex flex-col justify-center items-center space-y-0 text-gray-200 px-2 md:px-8 ">
					<GalaxyBackground direction="bottom-to-top" />
					<MotionP
						variants={slideInFromRight}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: false, amount: 0.5 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-6xl sm:text-6xl md:text-7xl font-bold text-center bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent tracking-tight"
					>
						Hey!{" "}
					</MotionP>
					<MotionH1
						variants={slideInFromLeft}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: false, amount: 0.5 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-5xl sm:text-6xl md:text-7xl font-bold text-center bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent tracking-tight pb-4"
					>
						I&apos;m Edwin Peraza{" "}
					</MotionH1>
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
						<MotionDiv
							variants={slideInFromLeft}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: false, amount: 0.5 }}
							transition={{ duration: 0.8, delay: 0.6 }}
						>
							<Button variant="gradient" asChild>
								<Link
									href="/Resume_Edwin_Peraza.pdf"
									target="_blank"
									rel="noopener noreferrer"
									prefetch={false}
								>
									<PiReadCvLogoThin />
									View Resume
								</Link>
							</Button>
						</MotionDiv>
						<MotionDiv
							variants={slideInFromRight}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: false, amount: 0.5 }}
							transition={{ duration: 0.8, delay: 0.6 }}
						>
							<Button variant="secondaryGradient" asChild>
								<Link href="/#contact">
									<MdOutlineEmail />
									Contact Me
								</Link>
							</Button>
						</MotionDiv>
					</div>
				</div>
				<MotionDiv
					variants={scaleUp}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.8, delay: 0.8 }}
					className="pt-24 flex justify-center items-center"
				>
					<Link href="/#projects">
						<Scroll />
					</Link>
				</MotionDiv>
			</div>
		</div>
	);
}

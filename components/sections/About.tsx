import {
	MotionDiv,
	MotionH2,
	slideInFromBottom,
	slideInFromLeft,
	slideInFromRight,
} from "@/components/motionUtils";
import Image from "next/image";

export default function About() {
	return (
		<section className="container px-4 pb-6 pt-16 overflow-hidden">
			<MotionH2
				variants={slideInFromBottom}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: false, amount: 0.5 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className="text-5xl uppercase mb-2 font-bold bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent tracking-tight text-center"
			>
				About Me
			</MotionH2>
			<div className="flex justify-center items-center gap-5 flex-col md:flex-row">
				<MotionDiv
					variants={slideInFromLeft}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, amount: 0.5 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="relative w-52 md:w-64 aspect-square overflow-hidden rounded-full border-2 border-blue-300"
				>
					<Image
						src="/images/headshot.jpg"
						alt="Head shot"
						loading="lazy"
						fill
						className="object-cover w-full scale-110 "
					/>
				</MotionDiv>
				<MotionDiv
					variants={slideInFromRight}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, amount: 0.5 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className=""
				>
					<div className="glass p-2 md:p-4 rounded-lg text-base space-y-2 max-w-xl">
						<p>
							I&apos;m a Computer Science graduate from{" "}
							<a
								href="https://www.fullerton.edu"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-300 hover:text-blue-400"
							>
								CSUF
							</a>{" "}
							with experience developing full-stack web applications. I approach
							software engineering with a strong sense of ownership, from
							designing solutions to writing clean, scalable code built for the
							long term.
						</p>
						<p>
							I enjoy working across the stack, thinking through architecture,
							and building products that are both efficient and easy to use.
							I&apos;m driven by a constant desire to improve.
						</p>
						<p>
							When I&apos;m not coding, you&apos;ll find me enjoying a video
							game, watching a good TV show, or hopefully getting some fresh
							air.
						</p>
					</div>
				</MotionDiv>
			</div>
		</section>
	);
}

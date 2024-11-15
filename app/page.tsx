import Hero from "@/components/hero/Hero";
import Title from "@/components/hero/Title";
import TypingEffect from "@/components/hero/TypingEffect";

export default function Home() {
	return (
		<main className="min-h-screen flex justify-center items-center gradient-bg-purple">
			<div className="text-center z-50 select-none pointer-events-none">
				<Title>Edwin Peraza</Title>
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
			<Hero />
		</main>
	);
}

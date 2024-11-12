import MusicPlayer from "@/components/music-player/MusicPlayer";

export default function About() {
	return (
		<main className="min-h-screen container">
			<div className="space-y-2">
				<h1 className="text-3xl uppercase whitespace-nowrap">
					Hello! I&apos;m Edwin{" "}
				</h1>
				<p>
					I&apos;m a soon-to-be graduate in Computer Science with a focus on
					software engineering. Over the years, I&apos;ve honed my expertise in
					front-end web development, building dynamic and engaging user
					experiences. My primary tools include React, Next.js, and TypeScript.
					I also love working with Tailwind CSS to keep my designs both
					responsive and stylish without the hassle.
				</p>
				<p>
					Right now, I&apos;m actively looking for opportunities in software
					engineering, aiming to bring my skills to a team that values
					innovation, user-centric design, and impactful problem-solving.
					I&apos;m also in the process of designing and growing my portfolio to
					showcase my work and the projects I&apos;m proud of.
				</p>
			</div>
			<div className="music-player">
				<MusicPlayer />
			</div>
		</main>
	);
}

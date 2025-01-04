export default function About() {
	return (
		<div className="container flex justify-center items-center px-4 pt-32">
			<div className="space-y-2 text-gray-200 px-4 md:px-8">
				<h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white text-center">
					Hello! I&apos;m Edwin{" "}
					<span
						role="img"
						aria-label="waving hand"
						className="ml-1 animate-wave"
					>
						👋
					</span>
				</h1>
				<h3 className="uppercase text-center text-lg md:text-xl">
					software engineer, full stack developer
				</h3>
				{/* <p className="text-sm">
					I&apos;m a soon-to-be graduate in Computer Science with a focus on
					software engineering. Over the years, I&apos;ve honed my expertise in
					front-end web development, building dynamic and engaging user
					experiences. My primary tools include React, Next.js, and TypeScript.
					I also love working with Tailwind CSS to keep my designs both
					responsive and stylish without the hassle.
				</p>
				<p className="text-sm">
					Right now, I&apos;m actively looking for opportunities in software
					engineering, aiming to bring my skills to a team that values
					innovation, user-centric design, and impactful problem-solving.
					I&apos;m also in the process of designing and growing my portfolio to
					showcase my work and the projects I&apos;m proud of.
				</p> */}
			</div>
		</div>
	);
}

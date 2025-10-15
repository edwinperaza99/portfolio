import {
	fadeInOut,
	MotionDiv,
	MotionH2,
	slideInFromBottom,
} from "@/components/motionUtils";
import { Cover } from "@/components/ui/cover";
import { LinkPreview } from "@/components/ui/link-preview";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";
import { LuBook, LuFilm, LuGamepad } from "react-icons/lu";

// Image intentionally not used in this layout (PixelatedCanvas used instead)

const recommendations = [
	{
		icon: LuFilm,
		type: "Movie",
		title: "Arrival",
		description: "A thought-provoking sci-fi film about communication.",
	},
	{
		icon: LuGamepad,
		type: "Video Game",
		title: "Elden Ring",
		description: "Rewarding gameplay with a vast open world.",
	},
	{
		icon: LuBook,
		type: "Manga",
		title: "One Piece",
		description: "Long I know, but the journey is worth it.",
	},
];

export default function About() {
	return (
		<div>
			{/* Header */}
			<div className="border-b border-white/20">
				<div className="container border-x border-white/20 px-4 py-4">
					<MotionH2
						variants={slideInFromBottom}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="text-4xl md:text-5xl uppercase font-bold bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent tracking-tight"
					>
						About Me
					</MotionH2>
				</div>
			</div>

			{/* Main Content */}
			<div className="container border-x border-white/20 px-4 py-4">
				<section className="w-full grid gap-4 grid-cols-1 lg:grid-cols-3">
					{/* Profile Photo - Takes 1 column */}
					<MotionDiv
						variants={fadeInOut}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="relative aspect-square lg:aspect-[3/4] overflow-hidden rounded-lg border border-white/20 bg-white/5"
					>
						<PixelatedCanvas
							src="/images/headshot.jpg"
							responsive
							cellSize={3}
							dotScale={0.95}
							shape="circle"
							backgroundColor="#00000000"
							interactive
							distortionMode="repel"
							sampleAverage
							followSpeed={0.2}
							className="w-full h-full object-cover"
						/>
					</MotionDiv>

					{/* Bio Text - Takes 2 columns on desktop, full width on tablet */}
					<MotionDiv
						variants={slideInFromBottom}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="lg:col-span-2 flex flex-col justify-center space-y-4 p-6 rounded-lg border border-white/20 bg-transparent"
					>
						<div>
							<h3 className="text-3xl md:text-4xl font-bold mb-2 text-white">
								Hey, I&apos;m <Cover>Edwin</Cover>
							</h3>
							<p className="text-lg text-zinc-400">
								Technical Support Specialist
							</p>
						</div>

						<div className="space-y-3 text-base leading-tight md:leading-relaxed text-zinc-400">
							<p>
								Computer Science graduate from{" "}
								<LinkPreview
									url="https://www.fullerton.edu"
									className="text-blue-300 hover:text-blue-400"
								>
									CSUF
								</LinkPreview>{" "}
								with experience developing full-stack web applications. I
								approach software engineering with a strong sense of ownership,
								from designing solutions to writing clean, scalable code built
								for the long term.
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

					{/* Spotify-like embeds - right column under bio (spans 2 cols) */}
					<MotionDiv
						variants={fadeInOut}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="lg:col-span-2 p-6 rounded-lg border border-white/20 bg-white/5"
					>
						<h3 className="text-2xl font-bold mb-4 text-white">
							Now Playing on Spotify
						</h3>
						{/* Use the elongated/compact player variant and stack them vertically like recommendations */}
						<div className="flex flex-col gap-3">
							{/* Only use the elongated-style iframe (the last variant previously) and show as a vertical list */}
							<div className="overflow-hidden rounded-lg border border-white/10">
								<iframe
									data-testid="embed-iframe"
									title="Now Playing 1"
									className="w-full h-[152px]"
									src="https://open.spotify.com/embed/track/4gM814NneKElxn37F5Ht7G?utm_source=generator&theme=0"
									frameBorder="0"
									allowFullScreen
									allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
									loading="lazy"
								></iframe>
							</div>

							<div className="overflow-hidden rounded-lg border border-white/10">
								<iframe
									data-testid="embed-iframe"
									title="Now Playing 2"
									className="w-full h-[152px]"
									src="https://open.spotify.com/embed/track/4gM814NneKElxn37F5Ht7G?utm_source=generator&theme=0"
									frameBorder="0"
									allowFullScreen
									allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
									loading="lazy"
								></iframe>
							</div>

							<div className="overflow-hidden rounded-lg border border-white/10">
								<iframe
									data-testid="embed-iframe"
									title="Now Playing 3"
									className="w-full h-[152px]"
									src="https://open.spotify.com/embed/track/4gM814NneKElxn37F5Ht7G?utm_source=generator&theme=0"
									frameBorder="0"
									allowFullScreen
									allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
									loading="lazy"
								></iframe>
							</div>
						</div>
					</MotionDiv>
					{/* Recommendations - left column under profile */}
					<MotionDiv
						variants={slideInFromBottom}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="flex flex-col gap-4"
					>
						<h3 className="text-2xl font-bold text-white">Recommendations</h3>
						{recommendations.map((item, index) => {
							const Icon = item.icon as React.ComponentType<
								React.SVGProps<SVGSVGElement>
							>;
							return (
								<div
									key={index}
									className="p-4 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300 group"
								>
									<div className="flex items-start gap-3">
										<div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-white/20">
											<Icon className="w-6 h-6 text-white" />
										</div>
										<div className="flex-1 min-w-0">
											<div className="flex items-center gap-2 mb-1">
												<span className="text-xs font-bold text-zinc-500 uppercase">
													{item.type}
												</span>
											</div>
											<h4 className="font-bold text-sm mb-1 text-white">
												{item.title}
											</h4>
											<p className="text-xs text-zinc-400 leading-relaxed">
												{item.description}
											</p>
										</div>
									</div>
								</div>
							);
						})}
					</MotionDiv>
				</section>
			</div>
		</div>
	);
}

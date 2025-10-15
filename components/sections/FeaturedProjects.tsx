"use client";
import { MotionH2, slideInFromRight } from "@/components/motionUtils";
import ProjectCard from "@/components/ProjectCard";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

interface Project {
	href: string;
	imgSrc: string;
	imgAlt: string;
	title: string;
	description: string;
	classes?: string;
}

export default function FeaturedProjects() {
	const projects: Project[] = [
		{
			href: "/projects/3",
			imgSrc: "/MioPortfolio/MioPortfolio_thumbnail.png",
			imgAlt: "Portfolio Mio thumbnail",
			title: "Mio's Portfolio",
			description: "Next.js | Tailwind CSS",
			classes: "order-2 lg:order-1",
		},
		{
			href: "/projects/1",
			imgSrc: "/Weatheria/Weatheria_Thumbnail.png",
			imgAlt: "Weatheria thumbnail",
			title: "Weatheria",
			description: "Nuxt.js | Tailwind CSS | FastAPI | Scikit-learn | GCP",
			classes: "sm:col-span-2 sm:row-span-2 order-1 lg:order-2",
		},
		{
			href: "/projects/4",
			imgSrc: "/CodeAgainstCancer/CaC_thumbnail.png",
			imgAlt: "Code Against Cancer thumbnail",
			title: "Code Against Cancer",
			description: "Django | Bootstrap | AWS | Docker",
			classes: "order-3",
		},

		{
			href: "/projects/2",
			imgSrc: "/SoloLevel/SoloLevel_thumbnail_2.png",
			imgAlt: "SoloLevel thumbnail",
			title: "SoloLevel",
			description: "Swift | Swift UI | Firebase",
			classes: "sm:col-span-2 sm:row-span-2 order-4",
		},
		{
			href: "/projects/5",
			imgSrc: "/NataliaSalon/NataliaSalon_thumbnail.png",
			imgAlt: "Natalia Salon project",
			title: "Natalia Salon Platform",
			description: "Next.js | Tailwind | MongoDB",
			classes: "order-5",
		},
		// {
		// 	href: "/projects/8",
		// 	imgSrc: "/Hikken/Hikken_thumbnail.png",
		// 	imgAlt: "Hikken thumbnail",
		// 	title: "Hikken",
		// 	description: "HTML | CSS | JavaScript",
		// },
	];

	const marqueeImages = projects.flatMap((project) => [
		project.imgSrc,
		project.imgSrc,
		project.imgSrc,
		project.imgSrc,
	]);

	return (
		<>
			<div className="border-b border-white/20">
				<div className="container border-x border-white/20">
					<MotionH2
						variants={slideInFromRight}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="px-4 py-4 text-5xl uppercase font-bold bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent tracking-tight"
					>
						Projects
					</MotionH2>
				</div>
			</div>
			<div className="flex flex-col text-white container border-x border-white/20">
				<section className="grid w-full grid-cols-1 gap-4 bg-white/5 px-4 py-4 sm:grid-cols-2 lg:grid-cols-3">
					{projects.map((project) => (
						<ProjectCard key={project.href} {...project} />
					))}
					<div className="order-6 group relative aspect-square overflow-hidden rounded-2xl border border-white/20 bg-white/10">
						<ThreeDMarquee images={marqueeImages} className="h-full w-full" />
					</div>
				</section>
			</div>
		</>
	);
}

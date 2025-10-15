import {
	fadeInOut,
	MotionDiv,
	MotionH2,
	slideInFromRight,
} from "@/components/motionUtils";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

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
			href: "/projects/1",
			imgSrc: "/Weatheria/Weatheria_Thumbnail.png",
			imgAlt: "Weatheria thumbnail",
			title: "Weatheria",
			description: "Nuxt.js | Tailwind CSS | FastAPI | Scikit-learn | GCP",
		},
		{
			href: "/projects/2",
			imgSrc: "/SoloLevel/SoloLevel_thumbnail_2.png",
			imgAlt: "SoloLevel thumbnail",
			title: "SoloLevel",
			description: "Swift | Swift UI | Firebase",
			classes: "md:col-span-2 md:row-span-2",
		},
		{
			href: "/projects/3",
			imgSrc: "/MioPortfolio/MioPortfolio_thumbnail.png",
			imgAlt: "Portfolio Mio thumbnail",
			title: "Mio's Portfolio",
			description: "Next.js | Tailwind CSS",
		},
		{
			href: "/projects/4",
			imgSrc: "/CodeAgainstCancer/CaC_thumbnail.png",
			imgAlt: "Code Against Cancer thumbnail",
			title: "Code Against Cancer",
			description: "Django | Bootstrap | AWS | Docker",
			classes: "md:col-span-2 md:row-span-2",
		},
		{
			href: "/projects/5",
			imgSrc: "/NataliaSalon/NataliaSalon_thumbnail.png",
			imgAlt: "Natalia Salon project",
			title: "Natalia Salon Platform",
			description: "Next.js | Tailwind | MongoDB",
		},
		// {
		// 	href: "/projects/8",
		// 	imgSrc: "/Hikken/Hikken_thumbnail.png",
		// 	imgAlt: "Hikken thumbnail",
		// 	title: "Hikken",
		// 	description: "HTML | CSS | JavaScript",
		// },
	];

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
				<section className="px-4 py-4 w-full grid gap-4 grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] md:grid-cols-3 bg-white/5">
					{projects.map((project, index) => (
						<ProjectCard key={index} {...project} />
					))}
					<div className="aspect-none md:aspect-[4/3] flex justify-center items-center">
						<MotionDiv
							variants={fadeInOut}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							className="flex justify-center mt-5"
						>
							<Link
								href="/projects"
								className="relative inline-block px-6 py-3 text-lg font-bold text-white rounded-lg border-animation"
							>
								View All Projects
							</Link>
						</MotionDiv>
					</div>
				</section>
			</div>
		</>
	);
}

import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { MotionDiv, fadeInOut } from "@/components/motionUtils";

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
			imgSrc: "/NataliaSalon/NataliaSalon_thumbnail.png",
			imgAlt: "NataliaSalon project",
			title: "BeBeauty",
			description: "Next.js | Tailwind | MongoDB",
		},
		{
			href: "/projects/2",
			imgSrc: "/SoloLevel/SoloLevel_thumbnail_2.png",
			imgAlt: "SoloLevel",
			title: "SoloLevel",
			description: "Swift | Swift UI | Firebase",
			classes: "md:col-span-2 md:row-span-2",
		},
		{
			href: "/projects/3",
			imgSrc: "/MioPortfolio/MioPortfolio_thumbnail.png",
			imgAlt: "Portfolio Mio",
			title: "Portfolio Mio",
			description: "Next.js | Tailwind CSS",
		},
		{
			href: "/projects/4",
			imgSrc: "/CodeAgainstCancer/CaC_thumbnail.png",
			imgAlt: "Code Against Cancer",
			title: "Code Against Cancer",
			description: "Django | Bootstrap | AWS | Docker",
			classes: "md:col-span-2 md:row-span-2",
		},
		{
			href: "/projects/8",
			imgSrc: "/Hikken/Hikken_thumbnail.png",
			imgAlt: "Hikken",
			title: "Hikken",
			description: "HTML | CSS | JavaScript",
		},
	];

	return (
		<div className="flex flex-col text-white container px-4 my-8">
			<h2 className="text-4xl uppercase mb-2">Projects</h2>
			<section className="w-full grid gap-4 grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] md:grid-cols-3">
				{projects.map((project, index) => (
					<ProjectCard key={index} {...project} />
				))}
			</section>
			<MotionDiv
				variants={fadeInOut}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: false, amount: 0 }}
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
	);
}

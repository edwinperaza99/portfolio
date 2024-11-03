import { StaticImageData } from "next/image";
import RBR_Thumbnail from "@/public/RBR/RBR_Thumbnail.png";

interface Project {
	id: string;
	name: string;
	category: string;
	description: string;
	technologies: string[];
	thumbnail: StaticImageData;
	images: StaticImageData[];
	deployUrl?: string;
	githubUrl?: string;
}

export const projects: Project[] = [
	{
		id: "1",
		name: "RBR Inventory Formatter",
		category: "Web Development",
		description:
			"Tools for the circulation desk at the Pollak Library, it facilitates the processing of the inventory list. The tools reduces the task etc",
		technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
		thumbnail: RBR_Thumbnail,
		images: [
			{ src: "/images/projects/portfolio-1.png", height: 1080, width: 1920 },
			{ src: "/images/projects/portfolio-2.png", height: 1080, width: 1920 },
		],
	},
	{
		id: "portfolio1",
		name: "Personal Portfolio",
		category: "Web Development",
		description: "My personal portfolio showcasing my projects and skills.",
		technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
		thumbnail: {
			src: "/images/projects/portfolio-1.png",
			height: 1080,
			width: 1920,
		},
		images: [
			{ src: "/images/projects/portfolio-1.png", height: 1080, width: 1920 },
			{ src: "/images/projects/portfolio-2.png", height: 1080, width: 1920 },
		],
	},
	{
		id: "portfolio2",
		name: "Personal Portfolio",
		category: "Web Development",
		description: "My personal portfolio showcasing my projects and skills.",
		technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
		thumbnail: {
			src: "/images/projects/portfolio-1.png",
			height: 1080,
			width: 1920,
		},
		images: [
			{ src: "/images/projects/portfolio-1.png", height: 1080, width: 1920 },
			{ src: "/images/projects/portfolio-2.png", height: 1080, width: 1920 },
		],
	},
	{
		id: "portfolio3",
		name: "Personal Portfolio",
		category: "Web Development",
		description: "My personal portfolio showcasing my projects and skills.",
		technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
		thumbnail: {
			src: "/images/projects/portfolio-1.png",
			height: 1080,
			width: 1920,
		},
		images: [
			{ src: "/images/projects/portfolio-1.png", height: 1080, width: 1920 },
			{ src: "/images/projects/portfolio-2.png", height: 1080, width: 1920 },
		],
	},
];

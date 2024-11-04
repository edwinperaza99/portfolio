import { StaticImageData } from "next/image";
import RBR_Thumbnail from "@/public/RBR/RBR_Thumbnail.png";

export type Project = {
	id: string;
	name: string;
	category: string;
	description: string;
	technologies: string[];
	thumbnail: StaticImageData;
	images: StaticImageData[];
	deployUrl?: string;
	githubUrl?: string;
};

export const projects: Project[] = [
	{
		id: "1",
		name: "RBR Inventory Formatter",
		category: "Web Development",
		description:
			"Tools for the circulation desk at the Pollak Library, it facilitates the processing of the inventory list. The tools reduces the task etc",
		technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
		thumbnail: RBR_Thumbnail,
		images: [RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail],
		deployUrl: "https://rbr-inventory-formatter.vercel.app/",
		githubUrl: "example.com",
	},
	{
		id: "2",
		name: "RBR Inventory Formatter",
		category: "Web Development",
		description:
			"Tools for the circulation desk at the Pollak Library, it facilitates the processing of the inventory list. The tools reduces the task etc",
		technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
		thumbnail: RBR_Thumbnail,
		images: [RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail],
	},
	{
		id: "3",
		name: "RBR Inventory Formatter",
		category: "Web Development",
		description:
			"Tools for the circulation desk at the Pollak Library, it facilitates the processing of the inventory list. The tools reduces the task etc",
		technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
		thumbnail: RBR_Thumbnail,
		images: [RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail],
	},
	{
		id: "4",
		name: "RBR Inventory Formatter",
		category: "Web Development",
		description:
			"Tools for the circulation desk at the Pollak Library, it facilitates the processing of the inventory list. The tools reduces the task etc",
		technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
		thumbnail: RBR_Thumbnail,
		images: [RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail],
	},
];

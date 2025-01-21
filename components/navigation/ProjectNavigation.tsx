"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import Image from "next/image";
import { projects } from "@/data/projects";
import { fadeInOut, MotionDiv } from "@/components/motionUtils";
import { AnimatePresence } from "framer-motion";

interface ProjectNavigationProps {
	currentProject: number;
}

/**
 * Component for navigating between projects.
 *
 * @component
 * @param {ProjectNavigationProps} props - The props for the component.
 * @param {number} props.currentProject - The index of the current project.
 *
 * @returns {JSX.Element} The rendered ProjectNavigation component.
 *
 * @example
 * <ProjectNavigation currentProject={1} />
 *
 * @remarks
 * This component provides both mobile and desktop navigation for projects.
 * It includes buttons to navigate to the previous and next projects, and
 * displays a thumbnail preview of the hovered project on desktop.
 *
 * @function
 * @name ProjectNavigation
 *
 * @typedef {Object} ProjectNavigationProps
 * @property {number} currentProject - The index of the current project.
 */
export default function ProjectNavigation({
	currentProject,
}: ProjectNavigationProps) {
	const router = useRouter();
	const [hoveredProject, setHoveredProject] = useState<{
		thumbnail: string;
		name: string;
		category: string;
	} | null>(null);

	const totalProjects = projects.length;

	const handleNavigate = (direction: "prev" | "next") => {
		const nextProject =
			direction === "next"
				? (currentProject % totalProjects) + 1
				: ((currentProject - 2 + totalProjects) % totalProjects) + 1;
		router.push(`/projects/${nextProject}`);
	};

	const getProjectData = (direction: "prev" | "next") => {
		const index =
			direction === "next"
				? currentProject % totalProjects
				: (currentProject - 2 + totalProjects) % totalProjects;
		const project = projects[index];
		return {
			thumbnail: project.thumbnail.src,
			name: project.name,
			category: project.category,
		};
	};

	const handleHover = (direction: "prev" | "next") => {
		const projectData = getProjectData(direction);
		setHoveredProject(projectData);
	};

	const clearHover = () => setHoveredProject(null);

	return (
		<div className="px-4 md:px-0 fixed bottom-2 mx-auto w-full max-w-screen-2xl">
			{/* Mobile navigation */}
			<div className="flex justify-between items-center md:hidden fixed bottom-4 left-0 right-0 px-2">
				<button
					title="Previous Project"
					className="p-4 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 transition"
					onClick={() => handleNavigate("prev")}
				>
					<IoArrowBack size={24} />
				</button>
				<button
					title="Next Project"
					className="p-4 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 transition"
					onClick={() => handleNavigate("next")}
				>
					<IoArrowForward size={24} />
				</button>
			</div>

			{/* Desktop navigation */}
			<div className="hidden md:flex flex-col justify-end items-center absolute right-2 lg:right-8 bottom-0 w-48 z-50">
				{/* Thumbnail preview */}
				<AnimatePresence>
					{hoveredProject && (
						<MotionDiv
							initial={{ y: 210 }}
							animate={{ y: 0 }}
							exit={{ y: 210 }}
							transition={{ duration: 0.5, ease: "easeOut" }}
							className=" w-full text-white flex flex-col"
						>
							{/* Text Information */}
							<div className="text-left p-2 bg-gray-900 rounded-lg shadow-lg h-20 flex flex-col items-middle justify-center">
								<p className="text-lg font-extrabold truncate tracking-tighter">
									{hoveredProject.name}
								</p>
								<p className="text-xs text-gray-400 truncate">
									{hoveredProject.category}
								</p>
							</div>
							{/* Thumbnail Image */}
							<MotionDiv
								variants={fadeInOut}
								initial="hidden"
								animate="visible"
								exit={{
									opacity: 0,
									scale: 0.9,
									transition: {
										duration: 0.2,
										ease: "easeInOut",
									},
								}}
								transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
								className="relative w-full aspect-[4/3] overflow-hidden rounded-lg"
							>
								<Image
									src={hoveredProject.thumbnail}
									alt="Project Thumbnail"
									fill
									className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
								/>
							</MotionDiv>
						</MotionDiv>
					)}
				</AnimatePresence>
				<div className="relative z-10 bg-gray-900 text-white p-4 rounded-lg shadow-lg flex items-center gap-4 w-48">
					<button
						title="Previous Project"
						className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
						onMouseEnter={() => handleHover("prev")}
						onMouseLeave={clearHover}
						onClick={() => handleNavigate("prev")}
					>
						<IoArrowBack size={24} />
					</button>
					<div className="flex flex-col text-center">
						<span className="text-sm">Project</span>
						<span className="font-bold">
							{currentProject} / {totalProjects}
						</span>
					</div>
					<button
						title="Next Project"
						className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
						onMouseEnter={() => handleHover("next")}
						onMouseLeave={clearHover}
						onClick={() => handleNavigate("next")}
					>
						<IoArrowForward size={24} />
					</button>
				</div>
			</div>
		</div>
	);
}

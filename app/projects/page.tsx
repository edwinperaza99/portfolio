"use client";
import { projects } from "@/data/projects";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Laptop, Smartphone, Globe, Brain, Gamepad2 } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import MainNavBar from "@/components/navigation/MainNavBar";

export default function Projects() {
	const [selectedCategory, setSelectedCategory] = useState<string>("All");

	// Filter projects based on the selected category
	const filteredProjects = projects.filter((project) =>
		selectedCategory === "All" ? true : project.category === selectedCategory
	);

	return (
		<div className="min-h-screen flex flex-col text-white">
			<MainNavBar />
			<section className="container px-1 pt-14 md:pt-20">
				<header className="text-center my-4">
					<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase mb-2 font-bold bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent tracking-tight">
						{selectedCategory} Projects
					</h1>
				</header>
				{/* Category Filter ToggleGroup */}
				<div className="text-center my-4">
					<ToggleGroup
						type="single"
						value={selectedCategory}
						onValueChange={(value) => setSelectedCategory(value || "All")}
						aria-label="Filter by Category"
						className="flex justify-center gap-4"
					>
						<ToggleGroupItem value="All" aria-label="Show all projects">
							<Globe className="h-5 w-5" />
						</ToggleGroupItem>
						<ToggleGroupItem
							value="Web Development"
							aria-label="Show web development projects"
						>
							<Laptop className="h-5 w-5" />
						</ToggleGroupItem>
						<ToggleGroupItem
							value="Mobile Development"
							aria-label="Show mobile projects"
						>
							<Smartphone className="h-5 w-5" />
						</ToggleGroupItem>
						<ToggleGroupItem value="AI & ML" aria-label="Show AI & ML projects">
							<Brain className="h-5 w-5" />
						</ToggleGroupItem>
						<ToggleGroupItem
							value="Game Development"
							aria-label="Show game development projects"
						>
							<Gamepad2 className="h-5 w-5" />
						</ToggleGroupItem>
					</ToggleGroup>
				</div>
			</section>
			<AnimatePresence mode="wait">
				<motion.section
					key={selectedCategory}
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 10 }}
					transition={{ duration: 0.3 }}
					className="container px-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2"
				>
					{/* iterate through all the projects  */}
					{filteredProjects.map((project) => (
						<ProjectCard
							key={project.id}
							href={`/projects/${project.id}`}
							imgSrc={project.thumbnail.src}
							imgAlt={project.name}
							title={project.name}
							description={project.category}
						/>
					))}
				</motion.section>
			</AnimatePresence>
		</div>
	);
}

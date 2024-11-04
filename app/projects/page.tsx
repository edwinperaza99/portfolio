"use client";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Laptop, Smartphone, Globe, Brain, Gamepad2 } from "lucide-react";

export default function Projects() {
	const [hoveredProject, setHoveredProject] = useState<string | null>(null);
	const [selectedCategory, setSelectedCategory] = useState<string>("All");

	// Filter projects based on the selected category
	const filteredProjects = projects.filter((project) =>
		selectedCategory === "All" ? true : project.category === selectedCategory
	);

	return (
		<main className="min-h-screen flex flex-col bg-black text-white">
			<section className="container px-1">
				<header className="text-center my-4">
					<h1 className="text-3xl uppercase whitespace-nowrap">
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
						<ToggleGroupItem value="AI" aria-label="Show AI projects">
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
			<section className="container px-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 sm:gap-2">
				{/* iterate through all the projects  */}
				{filteredProjects.map((project) => (
					<article
						key={project.id}
						className="flex flex-col glass rounded-2xl group"
						onMouseEnter={() => setHoveredProject(project.id)}
						onMouseLeave={() => setHoveredProject(null)}
					>
						<Link href={`/projects/${project.id}`}>
							<div className="flex justify-center align-middle flex-1 rounded-t-2xl glass-grid-bg aspect-video overflow-hidden">
								<Image
									src={project.thumbnail}
									alt={project.name}
									className="object-cover rounded-t-2xl group-hover:opacity-75 group-hover:scale-105 transition-transform"
								/>
							</div>
							<div className="p-4">
								<h2>{project.name}</h2>
								{/* Add conditional hover text with transition */}
								<AnimatePresence mode="wait">
									{hoveredProject === project.id ? (
										<motion.p
											key="open-project"
											initial={{ scale: 0.8, opacity: 0 }}
											animate={{ scale: 1, opacity: 1 }}
											// exit={{ scale: 0.8, opacity: 0 }}
											transition={{
												duration: 0.2,
												type: "spring",
												stiffness: 100,
											}}
											className=""
										>
											Click to learn more
										</motion.p>
									) : (
										<motion.p
											key="category"
											initial={{ rotateX: -90, opacity: 0, perspective: 1000 }}
											animate={{ rotateX: 0, opacity: 1, perspective: 1000 }}
											exit={{ rotateX: 90, opacity: 0, perspective: 1000 }}
											transition={{ duration: 0.1 }}
											className=""
										>
											{project.category}
										</motion.p>
									)}
								</AnimatePresence>
							</div>
						</Link>
					</article>
				))}
			</section>
		</main>
	);
}

"use client";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
	const [hoveredProject, setHoveredProject] = useState<string | null>(null);

	return (
		<main className="min-h-screen flex flex-col bg-black text-white">
			<section className="container px-1">
				<header className="text-center my-4">
					<h1 className="text-3xl uppercase whitespace-nowrap">All Projects</h1>
				</header>
				{/* filter section here  */}
			</section>
			<section className="container px-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 sm:gap-2">
				{/* iterate through all the projects  */}
				{projects.map((project) => (
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
									layout="fill"
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

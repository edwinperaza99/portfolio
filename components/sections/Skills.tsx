import Image from "next/image";
import { skillCategories, resolveSkills } from "@/data/skills";

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Skills() {
	return (
		<div className="container py-10 flex flex-col text-primary-light px-4">
			<header className="my-4">
				<h1 className="text-4xl uppercase whitespace-nowrap">Skills</h1>
			</header>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{skillCategories.map((category) => (
					<section
						key={category.id}
						className="flex flex-col gap-2 rounded-lg glass p-4 shadow-md"
					>
						<h2 className="text-xl uppercase whitespace-nowrap text-center mb-4">
							{category.name}
						</h2>
						<article className="flex flex-wrap gap-2 md:gap-4 justify-center">
							{resolveSkills(category.skills).map(
								(skill) =>
									skill && (
										<TooltipProvider key={skill.id}>
											<Tooltip>
												<TooltipTrigger>
													<div
														key={skill.id}
														className="skill p-4 flex gap-3 glass rounded-full"
														style={{
															"--skill-color": skill.color,
														}}
													>
														<Image
															src={skill.icon}
															alt={`${skill.name} icon`}
															width={30}
															height={30}
															className="drop-shadow-3xl"
														/>
													</div>
												</TooltipTrigger>
												<TooltipContent>
													<p>{skill.name}</p>
												</TooltipContent>
											</Tooltip>
										</TooltipProvider>
									)
							)}
						</article>
					</section>
				))}
			</div>
		</div>
	);
}

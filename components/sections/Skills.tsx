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
		<div className="min-h-screen flex flex-col text-primary-light">
			<header className="text-center my-4">
				<h1 className="text-3xl uppercase whitespace-nowrap">Skills</h1>
			</header>
			{skillCategories.map((category) => (
				<section
					key={category.id}
					className="container w-full flex flex-col gap-1 md:gap-2 mb-4 px-2"
				>
					<h2 className="text-2xl uppercase whitespace-nowrap">
						{category.name}
					</h2>
					<article className="flex flex-wrap gap-2 md:gap-4">
						{resolveSkills(category.skills).map(
							(skill) =>
								skill && (
									<TooltipProvider key={skill.id}>
										<Tooltip>
											<TooltipTrigger>
												<div
													key={skill.id}
													className="skill p-4 flex gap-3 glass rounded-full"
													// style={{ backgroundColor: skill.color }}
													style={
														{
															"--skill-color": skill.color,
														} as React.CSSProperties
													}
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
	);
}

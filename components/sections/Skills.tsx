import { MotionSection, fadeInOut } from "@/components/motionUtils";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { resolveSkills, skillCategories } from "@/data/skills";
import Image from "next/image";

export default function Skills() {
	// Divide categories into two columns
	const midIndex = Math.ceil(skillCategories.length / 2);
	const column1 = skillCategories.slice(0, midIndex);
	const column2 = skillCategories.slice(midIndex);

	return (
		<div className="container my-8 flex flex-col text-primary-light px-4">
			<h2 className="text-4xl uppercase mb-2">Skills</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
				{/* Column 1 */}
				<div className="flex flex-col gap-2 md:gap-4">
					{column1.map((category) => (
						<MotionSection
							variants={fadeInOut}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: false, amount: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							key={category.id}
							className="flex flex-col gap-2 md:gap-4 rounded-lg glass p-3 md:p-4 shadow-md"
						>
							<h3 className="text-xl md:text-2xl uppercase text-center">
								{category.name}
							</h3>
							<article className="flex flex-wrap gap-2 md:gap-4 justify-center">
								{resolveSkills(category.skills).map(
									(skill) =>
										skill && (
											<TooltipProvider key={skill.id}>
												<Tooltip>
													<TooltipTrigger>
														<div
															className=" p-4 flex gap-3 glass rounded-full"
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
						</MotionSection>
					))}
				</div>
				{/* Column 2 */}
				<div className="flex flex-col gap-2 md:gap-4">
					{column2.map((category) => (
						<MotionSection
							variants={fadeInOut}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: false, amount: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							key={category.id}
							className="flex flex-col gap-2 md:gap-4 rounded-lg glass p-3 md:p-4 shadow-md"
						>
							<h3 className="text-xl md:text-2xl uppercase text-center">
								{category.name}
							</h3>
							<article className="flex flex-wrap gap-2 md:gap-4 justify-center">
								{resolveSkills(category.skills).map(
									(skill) =>
										skill && (
											<TooltipProvider key={skill.id}>
												<Tooltip>
													<TooltipTrigger>
														<div
															className="p-4 flex gap-3 glass rounded-full"
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
						</MotionSection>
					))}
				</div>
			</div>
		</div>
	);
}

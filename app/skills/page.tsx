import Image from "next/image";
import { skills } from "@/data/skills";

export default function Skills() {
	return (
		<main className="min-h-screen gradient-bg-blue flex flex-col text-primary-light">
			<header className="text-center my-4">
				<h1 className="text-3xl uppercase whitespace-nowrap">Skills</h1>
			</header>
			{skills.map((category) => (
				<section
					key={category.id}
					className="container w-full flex flex-col gap-1 md:gap-2 mb-4 px-1"
				>
					<h2 className="text-2xl uppercase whitespace-nowrap">
						{category.name}
					</h2>
					<article className="grid grid-cols-4 gap-1 md:gap-2">
						{category.skills.map((skill) => (
							<div
								key={skill.id}
								className="w-full p-4 flex gap-3 items-center glass"
							>
								<div className="glass p-2 rounded">
									<Image
										src={skill.icon}
										alt={`${skill.name} icon`}
										loading="lazy"
									/>
								</div>
								<h3>{skill.name}</h3>
							</div>
						))}
					</article>
				</section>
			))}
		</main>
	);
}

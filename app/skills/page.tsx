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
					className="container w-full flex flex-col gap-1 md:gap-2 mb-4 px-2"
				>
					<h2 className="text-2xl uppercase whitespace-nowrap">
						{category.name}
					</h2>
					<article className="grid grid-cols-1 min-[375px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2">
						{category.skills.map((skill) => (
							<div
								key={skill.id}
								className="w-full p-2 sm:p-3 md:p-2 flex gap-3 items-center glass rounded"
							>
								<div className="glass p-1 rounded">
									<Image
										src={skill.icon}
										alt={`${skill.name} icon`}
										loading="lazy"
										width={30}
										height={30}
										className="drop-shadow-sm"
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

import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import SwiperGallery from "@/components/projects/Swiper";
import { skillRegistry, resolveSkills } from "@/data/skills";
import Image from "next/image";

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

export async function generateStaticParams() {
	return projects.map((project) => ({
		id: project.id,
	}));
}

export default async function Project({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const project = projects.find((project) => project.id === id);

	if (!project) {
		notFound();
	}

	const resolvedTechnologies = resolveSkills(project.technologies);

	return (
		<main className="min-h-screen flex flex-col text-white">
			<section className="container px-2">
				<header className="my-4">
					<Breadcrumb className="dark">
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink href="/">Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink href="/featured-projects">
									Featured Projects
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink href="/projects">More</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>Project #{project.id}</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
					<div className="mt-4 max-w-full md:max-w-[50%]">
						<h1 className="text-3xl md:text-5xl uppercase font-bold">
							{project.name}
						</h1>
						<h2 className="text-secondary-light font-extralight">
							{project.category}
						</h2>
					</div>
				</header>
			</section>
			{/* information section */}
			<section className="container px-2 grid grid-cols-1 md:grid-cols-2 py-4 gap-10">
				<article>{project.description}</article>
				<article className="flex flex-col justify-center items-center gap-4">
					<div className="flex flex-wrap gap-2">
						{resolvedTechnologies.map(
							(skill) =>
								skill && (
									<TooltipProvider key={skill.id}>
										<Tooltip>
											<TooltipTrigger>
												<div
													key={skill.id}
													className="p-4 flex gap-3 glass rounded-full"
													style={{ backgroundColor: skill.color }}
												>
													<Image
														src={skill.icon.src}
														alt={`${skill.name} icon`}
														loading="lazy"
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
					</div>
					{/* buttons section */}
					<div className="w-full sm:w-[75%] flex space-between gap-2">
						{project.deployUrl && (
							<a
								href={project.deployUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="flex-1 text-center p-2 border text-sm font-normal hover:bg-white hover:text-black"
							>
								Deployed
							</a>
						)}
						{project.githubUrl && (
							<a
								href={project.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="flex-1 text-center p-2 border text-sm font-normal hover:bg-white hover:text-black"
							>
								GitHub
							</a>
						)}
					</div>
				</article>
			</section>
			{/* gallery section */}
			<section className="container px-2">
				<SwiperGallery images={project.images} />
			</section>
		</main>
	);
}

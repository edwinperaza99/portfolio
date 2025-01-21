import { fadeInOut, MotionDiv } from "@/components/motionUtils";
import ProjectNavigation from "@/components/navigation/ProjectNavigation";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { projects } from "@/data/projects";
import { resolveSkills } from "@/data/skills";
import Image from "next/image";
import { notFound } from "next/navigation";
import { IoLogoGithub, IoRocketOutline } from "react-icons/io5";

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
	const projectId = parseInt(id, 10);
	const project = projects.find((project) => project.id === id);

	if (!project) {
		notFound();
	}

	const resolvedTechnologies = resolveSkills(project.technologies);

	return (
		<MotionDiv
			variants={fadeInOut}
			initial="hidden"
			animate="visible"
			transition={{ duration: 0.8, ease: "easeOut" }}
			className="min-h-screen flex flex-col text-white"
		>
			<section className="container px-2 pt-14 md:pt-20">
				<header className="my-4">
					<Breadcrumb className="dark">
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink href="/landing">Landing</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink href="/">Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
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
			<section className="container px-2 grid grid-cols-1 md:grid-cols-2 py-4 gap-6 md:gap-16">
				<article className="space-y-2">{project.description}</article>
				<article className="flex flex-col gap-4">
					<h3 className="text-2xl">Development Stack</h3>
					<div className="flex flex-wrap gap-2">
						{resolvedTechnologies.map(
							(skill) =>
								skill && (
									<TooltipProvider key={skill.id}>
										<Tooltip>
											<TooltipTrigger>
												<div
													key={skill.id}
													className="skill p-4 rounded-full glass"
													// style={{ backgroundColor: skill.color }}
													style={
														{
															"--skill-color": skill.color,
														} as React.CSSProperties
													}
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
					<div className="w-full flex space-between gap-2">
						{project.deployUrl && (
							<Button asChild size="lg" variant="secondary">
								<a
									href={project.deployUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									<IoRocketOutline />
									Live Demo
								</a>
							</Button>
						)}
						{project.githubUrl && (
							<Button asChild size="lg" variant="secondary">
								<a
									href={project.githubUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									<IoLogoGithub />
									GitHub Repository
								</a>
							</Button>
						)}
					</div>
				</article>
			</section>
			{/* gallery section */}
			<section className="container px-2 space-y-2 md:space-y-4 py-6">
				{project.images.map((image, index) => (
					<MotionDiv
						key={index}
						variants={fadeInOut}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: false, amount: 0 }}
						transition={{ duration: 2, ease: "easeOut" }}
						className="flex flex-row justify-center items-center"
					>
						<Image
							src={image}
							alt={`Image ${index}`}
							width={image.width}
							height={image.height}
							objectFit="contain"
							placeholder="blur"
							loading="lazy"
						/>
					</MotionDiv>
				))}
			</section>
			<ProjectNavigation currentProject={projectId} />
		</MotionDiv>
	);
}

import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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
					<ul className="flex flex-wrap gap-2">
						{project.technologies.map((technology) => (
							<li
								className="p-2 rounded-3xl text-sm font-normal bg-green-500 border border-green-600 text-white shadow-[0_0_10px_2px_rgba(0,255,0,0.6)]"
								key={technology}
							>
								{technology}
							</li>
						))}
					</ul>
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
			{/* images section  */}
			<section className="container px-2 space-y-4">
				<Image src={project.thumbnail} alt={project.name} className="" />
				{project.images.map((image, index) => (
					<Image key={index} src={image} alt={project.name} className="" />
				))}
			</section>
		</main>
	);
}

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
		params: { id: project.id },
	}));
}

export default async function Project({ params }: { params: { id: string } }) {
	const { id } = await params;
	const project = projects.find((project) => project.id === id);

	if (!project) {
		notFound();
	}

	return (
		<main className="min-h-screen flex flex-col bg-primary-dark text-white">
			<section className="container px-1">
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

					<h1 className="text-3xl uppercase whitespace-nowrap">
						{project.name}
					</h1>
					<h2 className="text-secondary-light">{project.category}</h2>
				</header>
			</section>
			<section className="container px-1">
				<article className="flex flex-col gap-2">
					<div className="">
						<p>{project.description}</p>
						<ul className="flex gap-2">
							{project.technologies.map((technology) => (
								<li
									className="p-2 border rounded-3xl glass text-sm"
									key={technology}
								>
									{technology}
								</li>
							))}
						</ul>
					</div>
					<div className="flex justify-center align-middle rounded-2xl glass-grid-bg">
						<Image src={project.thumbnail} alt={project.name} className="" />
					</div>
					{/* <div>
						{project.images.map((image) => (
							<Image
								key={image.src}
								src={image}
								alt={project.name}
								className=""
							/>
						))}
					</div> */}
				</article>
			</section>
		</main>
	);
}

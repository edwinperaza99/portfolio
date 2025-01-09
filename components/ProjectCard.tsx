import Link from "next/link";
import Image from "next/image";
import { MotionArticle } from "@/components/MotionTags";
import { Variants } from "framer-motion";

interface ProjectCardProps {
	href: string;
	imgSrc: string;
	imgAlt: string;
	title: string;
	description: string;
	classes?: string;
}

const variants: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

export default function ProjectCard({
	href,
	imgSrc,
	imgAlt,
	title,
	description,
	classes = "",
}: ProjectCardProps) {
	return (
		<MotionArticle
			variants={variants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: false, amount: 0.2 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			className={`rounded-2xl glass overflow-hidden group ${classes}`}
		>
			<Link href={href} className="flex flex-col h-full">
				<div className="glass-grid-bg relative aspect-[4/3] md:aspect-none md:flex-grow overflow-hidden">
					<Image
						src={imgSrc}
						alt={imgAlt}
						fill
						className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-75"
					/>
				</div>
				<div className="p-4">
					<h3 className="text-xl md:text-base lg:text-xl font-bold">{title}</h3>
					<p className="text-sm md:text-xs lg:text-sm">{description}</p>
				</div>
			</Link>
		</MotionArticle>
	);
}

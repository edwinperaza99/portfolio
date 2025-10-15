import { fadeInOut, MotionArticle } from "@/components/motionUtils";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
	href: string;
	imgSrc: string;
	imgAlt: string;
	title: string;
	description: string;
	classes?: string;
}

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
			variants={fadeInOut}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: false, amount: 0.2 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			className={`rounded-2xl  border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300 overflow-hidden group ${classes}`}
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

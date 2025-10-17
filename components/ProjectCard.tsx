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
			className={`group relative aspect-square overflow-hidden rounded-2xl border border-white/20 bg-white/5 transition-colors duration-300 hover:bg-white/10 ${classes}`}
		>
			<Link href={href} className="flex size-full flex-col">
				<div className="glass-grid-bg relative flex-1 overflow-hidden">
					<Image
						src={imgSrc}
						alt={imgAlt}
						fill
						className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-75"
					/>
				</div>
				<div className="flex-shrink-0 p-4">
					<h3 className="text-lg font-bold truncate" title={title}>
						{title}
					</h3>
					<p
						className="mt-1 text-sm text-white/80 truncate"
						title={description}
					>
						{description}
					</p>
				</div>
			</Link>
		</MotionArticle>
	);
}

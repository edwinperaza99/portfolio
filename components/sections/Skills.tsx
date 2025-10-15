import {
	fadeInOut,
	MotionH2,
	MotionSection,
	slideInFromLeft,
} from "@/components/motionUtils";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { skillRegistry } from "@/data/skills";
import Image from "next/image";

export default function Skills() {
	// Helpers to normalize colors from the skill registry.
	const parseColor = (color?: string) => {
		if (!color) return null;

		const hexMatch = color.trim().match(/^#([0-9a-f]{3,8})$/i);
		if (hexMatch) {
			const hex = hexMatch[1];
			// support #RGB, #RRGGBB, #AARRGGBB (take last 6 for rgb)
			const normalized =
				hex.length === 3
					? hex
							.split("")
							.map((c) => c + c)
							.join("")
					: hex.length === 6 || hex.length === 8
					? hex.slice(hex.length - 6)
					: hex;
			const r = parseInt(normalized.slice(0, 2), 16);
			const g = parseInt(normalized.slice(2, 4), 16);
			const b = parseInt(normalized.slice(4, 6), 16);
			return [r, g, b];
		}

		// comma-separated like "168, 185, 204"
		const parts = color.split(",").map((p) => p.trim());
		if (parts.length >= 3 && parts.every((p) => p !== "")) {
			const r = Number(parts[0]);
			const g = Number(parts[1]);
			const b = Number(parts[2]);
			if ([r, g, b].every((n) => !Number.isNaN(n))) return [r, g, b];
		}

		return null;
	};

	const rgba = (rgb: number[] | null, alpha = 1) =>
		rgb
			? `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`
			: `rgba(255,255,255,${alpha})`;
	return (
		<>
			<div className="border-x border-b border-white/20">
				<div className="container border-x border-white/20">
					<MotionH2
						variants={slideInFromLeft}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="px-4 py-4 text-5xl capitalize font-bold bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent tracking-tight"
					>
						Skills, tools & technologies
					</MotionH2>
				</div>
			</div>

			<MotionSection
				variants={fadeInOut}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: false, amount: 0.5 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className="py-6 px-4 container text-primary-light border-x border-white/20 p-4 shadow-md"
			>
				<article className="flex flex-wrap gap-3 justify-center">
					{skillRegistry.map((skill) => {
						const rgb = parseColor(skill.color);
						const bubbleStyle: React.CSSProperties = {
							background: `linear-gradient(135deg, ${rgba(rgb, 0.12)}, ${rgba(
								rgb,
								0.06
							)})`,
							border: `1px solid ${rgba(rgb, 0.16)}`,
							boxShadow: `0 8px 24px ${rgba(rgb, 0.08)}`,
						};

						const solidColor = rgb
							? `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
							: "rgb(255,255,255)";

						const tooltipStyle: React.CSSProperties = {
							background: "rgba(0,0,0,0.6)", // dark glass for contrast
							color: solidColor,
							border: `1px solid ${solidColor}`,
							backdropFilter: "blur(6px)",
						};

						return (
							<TooltipProvider key={skill.id}>
								<Tooltip>
									<TooltipTrigger>
										<div
											className="p-2 md:p-3 flex items-center justify-center gap-3 rounded-2xl transition-colors"
											style={bubbleStyle}
										>
											<Image
												src={skill.icon}
												alt={`${skill.name} icon`}
												width={44}
												height={44}
												className="drop-shadow-3xl"
											/>
										</div>
									</TooltipTrigger>
									<TooltipContent style={tooltipStyle} className="mb-2">
										<p className="font-medium text-lg">{skill.name}</p>
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
						);
					})}
				</article>
			</MotionSection>
		</>
	);
}

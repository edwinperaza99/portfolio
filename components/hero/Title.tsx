import { ReactNode } from "react";
import { MotionH1 } from "@/components/MotionTags";

export default function Title({ children }: { children: ReactNode }) {
	return (
		<MotionH1
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
			className="text-4xl sm:text-5xl md:text-7xl uppercase font-black glow whitespace-nowrap"
			data-text={children}
		>
			{children}
		</MotionH1>
	);
}

import { MotionMain, fadeInOut } from "@/components/motionUtils";

export default function Template({ children }: { children: React.ReactNode }) {
	return (
		<MotionMain
			variants={fadeInOut}
			initial="hidden"
			animate="visible"
			transition={{ duration: 0.8, ease: "easeOut" }}
		>
			{children}
		</MotionMain>
	);
}

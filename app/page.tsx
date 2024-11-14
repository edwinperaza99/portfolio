import Hero from "@/components/hero/Hero";

export default function Home() {
	return (
		<main className="min-h-screen flex justify-center items-center">
			<div className="text-center z-50">
				<h1 className="text-3xl uppercase whitespace-nowrap">Edwin Peraza</h1>
				<p className="text-base uppercase whitespace-nowrap">
					Fullstack engineer
				</p>
			</div>
			<Hero />
		</main>
	);
}

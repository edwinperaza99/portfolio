import Link from "next/link";
import Image from "next/image";

export default function FeaturedProjects() {
	return (
		// <div className="gradient-bg-purple">
		<div className="flex flex-col text-white container px-4">
			<header className="my-8">
				<h1 className="text-4xl uppercase">Projects</h1>
			</header>
			<section className="w-full grid gap-4 grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] md:grid-cols-3">
				<article className="rounded-2xl glass overflow-hidden group">
					<Link href="/projects/1" className="flex flex-col h-full">
						<div className="relative aspect-[4/3] md:aspect-none md:flex-grow overflow-hidden">
							<Image
								src="/NataliaSalon/NataliaSalon_thumbnail.png"
								alt="NataliaSalon project"
								fill
								className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
							/>
						</div>
						<div className="p-4 bg-black bg-opacity-50 h-20">
							<h2 className="text-xl md:text-base lg:text-xl font-bold">
								BeBeauty
							</h2>
							<p className="text-sm md:text-xs lg:text-sm">
								Next.js | Tailwind | MongoDB
							</p>
						</div>
					</Link>
				</article>

				<article className="rounded-2xl glass overflow-hidden group md:col-span-2 md:row-span-2">
					<Link href="/projects/2" className="flex flex-col h-full">
						<div className="relative aspect-[4/3] md:aspect-none md:flex-grow overflow-hidden">
							<Image
								src="/SoloLevel/SoloLevel_thumbnail_2.png"
								alt="SoloLevel"
								fill
								className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
							/>
						</div>
						<div className="p-4 bg-black bg-opacity-50 h-20">
							<h2 className="text-xl md:text-base lg:text-xl font-bold">
								SoloLevel
							</h2>
							<p className="text-sm md:text-xs lg:text-sm">
								Swift | Swift UI | Firebase
							</p>
						</div>
					</Link>
				</article>
				<article className="rounded-2xl glass overflow-hidden group">
					<Link href="/projects/3" className="flex flex-col h-full">
						<div className="relative aspect-[4/3] md:aspect-none md:flex-grow overflow-hidden">
							<Image
								src="/MioPortfolio/MioPortfolio_thumbnail.png"
								alt="Portfolio Mio"
								fill
								className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
							/>
						</div>
						<div className="p-4 bg-black bg-opacity-50 h-20">
							<h2 className="text-xl md:text-base lg:text-xl font-bold">
								Portfolio Mio
							</h2>
							<p className="text-sm md:text-xs lg:text-sm">
								Next.js | Tailwind CSS
							</p>
						</div>
					</Link>
				</article>
				<article className="rounded-2xl glass overflow-hidden group md:col-span-2 md:row-span-2">
					<Link href="/projects/4" className="flex flex-col h-full">
						<div className="relative aspect-[4/3] md:aspect-none md:flex-grow overflow-hidden">
							<Image
								src="/CodeAgainstCancer/CaC_thumbnail.png"
								alt="Code Against Cancer"
								fill
								className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
							/>
						</div>
						<div className="p-4 bg-black bg-opacity-50 h-20">
							<h2 className="text-xl md:text-base lg:text-xl font-bold">
								Code Against Cancer
							</h2>
							<p className="text-sm md:text-xs lg:text-sm">
								Django | Bootstrap | AWS | Docker
							</p>
						</div>
					</Link>
				</article>

				<article className="rounded-2xl glass overflow-hidden group">
					<Link href="/projects/6" className="flex flex-col h-full">
						<div className="relative aspect-[4/3] md:aspect-none md:flex-grow overflow-hidden">
							<Image
								src="/PAC-MAN/pacman_thumbnail_2.png"
								alt="PAC-MAN"
								fill
								className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
							/>
						</div>
						<div className="p-4 bg-black bg-opacity-50 h-20">
							<h2 className="text-xl md:text-base lg:text-xl font-bold">
								PAC-MAN
							</h2>
							<p className="text-sm md:text-xs lg:text-sm">Python | Pygame</p>
						</div>
					</Link>
				</article>

				<article className="rounded-2xl glass overflow-hidden group">
					<Link href="/projects/8" className="flex flex-col h-full">
						<div className="relative aspect-[4/3] md:aspect-none md:flex-grow overflow-hidden">
							<Image
								src="/Hikken/Hikken_thumbnail.png"
								alt="Hikken"
								fill
								className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
							/>
						</div>
						<div className="p-4 bg-black bg-opacity-50 h-20">
							<h2 className="text-xl md:text-base lg:text-xl font-bold">
								Hikken
							</h2>
							<p className="text-sm md:text-xs lg:text-sm">
								HTML | CSS | JavaScript
							</p>
						</div>
					</Link>
				</article>
			</section>
			<div className="flex justify-center mt-5">
				<Link
					href="/projects"
					className="relative inline-block px-6 py-3 text-lg font-bold text-white rounded-lg border-animation"
				>
					View All Projects
				</Link>
			</div>
		</div>
		// </div>
	);
}

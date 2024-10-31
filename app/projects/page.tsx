export default function Projects() {
	return (
		<main className="min-h-screen flex flex-col gradient-bg-green text-white">
			<header className="text-center my-4">
				<h1 className="text-3xl uppercase whitespace-nowrap">Projects</h1>
			</header>
			<section className="container w-full flex-grow flex flex-col md:flex-row gap-1 md:gap-2 mb-4 px-1">
				{/* first container  */}
				<div className="flex flex-1 flex-row md:flex-col gap-1 md:gap-2">
					<div className="flex justify-center align-middle flex-1 rounded-2xl glass-grid-bg">
						<h2>CodeAgainstCancer</h2>
					</div>
					<div className="flex justify-center align-middle flex-1 md:flex-2 rounded-2xl glass-grid-bg">
						<h2>SoloLevel</h2>
					</div>
				</div>
				{/* second container  */}
				<div className="flex flex-2 md:flex-1.5 flex-col gap-1 md:gap-2">
					<div className="flex justify-center align-middle flex-1 rounded-2xl glass-grid-bg">
						<h2>BeBeauty</h2>
					</div>
					<div className="flex justify-center align-middle flex-1 rounded-2xl glass-grid-bg">
						<h2>Portfolio Mio</h2>
					</div>
				</div>
				{/* third container */}
				<div className="flex flex-1 flex-row md:flex-col gap-1 md:gap-2">
					<div className="flex justify-center align-middle flex-1.5 md:flex-2 rounded-2xl glass-grid-bg">
						<h2>PAC-MAN</h2>
					</div>
					<div className="flex justify-center align-middle flex-1.5 md:flex-2 rounded-2xl glass-grid-bg">
						<h2>HIKKEN</h2>
					</div>
					<div className="flex justify-center align-middle flex-1 rounded-2xl glass-grid-bg">
						<h2>MORE</h2>
					</div>
				</div>
			</section>
		</main>
	);
}

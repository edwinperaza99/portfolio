import Link from "next/link";

const MainNavBar = () => {
	return (
		<nav className="fixed top-0 left-1/2 transform -translate-x-1/2 flex justify-center items-center z-50 pt-3 md:pt-5">
			<ul className="flex glass px-4 py-2 text-base lg:text-lg font-medium rounded-3xl border">
				<li>
					<Link href="/" className="p-2 md:p-4 hover:text-orange-200">
						Home
					</Link>
				</li>
				<li>
					<Link
						href="/portfolio#projects"
						className="p-2 md:p-4 hover:text-orange-200"
					>
						Projects
					</Link>
				</li>
				<li>
					<Link
						href="/portfolio#skills"
						className="p-2 md:p-4 hover:text-orange-200"
					>
						Skills
					</Link>
				</li>
				<li>
					<Link
						href="portfolio#about"
						className="p-2 md:p-4 hover:text-orange-200"
					>
						About
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default MainNavBar;

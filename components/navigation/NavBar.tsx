"use client";
import { GiHamburger } from "react-icons/gi";
import { useState } from "react";
import Link from "next/link";

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleOverlay = () => setIsOpen(!isOpen);
	return (
		<nav className="">
			<button
				title="menu-toggle"
				onClick={toggleOverlay}
				className="fixed top-4 right-4 p-2 bg-gray-800 text-white rounded"
			>
				<GiHamburger />
			</button>
			{/* Full-Screen Overlay */}
			{isOpen && (
				<div
					className="fixed inset-0 bg-gray-900 text-white z-60 flex items-center justify-center"
					onClick={toggleOverlay} // Clicking the overlay itself will close it
				>
					<ul className="grid grid-cols-5 grid-rows-5 uppercase w-screen h-screen max-h-screen max-w-screen text-black">
						<li className="col-span-3 row-span-2 bg-yellow-200">
							<Link href="/">Home</Link>
						</li>
						<li className="col-span-2 row-span-3 bg-green-50">
							<Link href="/about">About</Link>
						</li>
						<li className="col-span-2 row-span-3 bg-purple-50">
							<Link href="projects">Projects</Link>
						</li>
						<li className="bg-slate-50">
							<GiHamburger />
						</li>
						<li className="col-span-3 row-span-2 bg-orange-400">Skills</li>
					</ul>
				</div>
			)}
		</nav>
	);
};

export default NavBar;

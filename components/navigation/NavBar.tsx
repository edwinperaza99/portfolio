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
				<div className="fixed inset-0 bg-gray-800 text-white z-60 flex items-center justify-center">
					<ul className="grid grid-cols-5 grid-rows-5 uppercase w-screen h-screen max-h-screen max-w-screen cursor-pointer">
						<li className="col-span-3 row-span-2">
							<Link
								href="/"
								className="p-4 flex justify-end items-end w-full h-full border hover:bg-gray-900"
								onClick={toggleOverlay}
							>
								Home
							</Link>
						</li>
						<li className="col-span-2 row-span-3">
							<Link
								href="/about"
								className="p-4 flex justify-start items-end w-full h-full border hover:bg-gray-900"
								onClick={toggleOverlay}
							>
								About
							</Link>
						</li>
						<li className="col-span-2 row-span-3">
							<Link
								href="projects"
								className="p-4 flex justify-end items-start w-full h-full border hover:bg-gray-900"
								onClick={toggleOverlay}
							>
								Projects
							</Link>
						</li>
						<li
							className="flex justify-center items-center border cursor-pointer hover:bg-gray-900"
							onClick={toggleOverlay}
						>
							<GiHamburger />
						</li>
						<li className="col-span-3 row-span-2">
							<Link
								href="/skills"
								className="p-4 flex justify-start items-start w-full h-full border hover:bg-gray-900"
								onClick={toggleOverlay}
							>
								Skills
							</Link>
						</li>
					</ul>
				</div>
			)}
		</nav>
	);
};

export default NavBar;

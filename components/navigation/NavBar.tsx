"use client";
import { GiHamburger } from "react-icons/gi";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleOverlay = () => setIsOpen(!isOpen);

	// Variants for animation
	const overlayVariants = {
		open: {
			opacity: 1,
			transition: { when: "beforeChildren", staggerChildren: 0.15 },
		},
		closed: {
			opacity: 0,
			transition: {
				when: "afterChildren",
				staggerChildren: 0.1,
				staggerDirection: -1,
			},
		},
	};

	const itemVariants = {
		open: { opacity: 1, y: 0 },
		closed: { opacity: 0, y: -20 },
	};

	return (
		<nav>
			<button
				title="menu-toggle"
				onClick={toggleOverlay}
				disabled={isOpen}
				className={`fixed top-4 z-50 right-4 p-2 bg-gray-800 text-white rounded ${
					isOpen ? "cursor-not-allowed opacity-50" : ""
				}`}
			>
				<GiHamburger />
			</button>

			{/* Full-Screen Overlay */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						className="fixed inset-0 z-[1000] text-white flex items-center justify-center"
						initial="closed"
						animate="open"
						exit="closed"
						variants={overlayVariants}
					>
						<motion.ul className="grid grid-cols-5 grid-rows-5 uppercase w-screen h-screen cursor-pointer text-4xl">
							<motion.li
								variants={itemVariants}
								className="col-span-3 row-span-2"
							>
								<Link
									href="/"
									className="vertical-text p-4 flex justify-end items-end w-full h-full border nav-link"
									onClick={toggleOverlay}
								>
									<span className="glitch" data-text="Home">
										Home
									</span>
								</Link>
							</motion.li>
							<motion.li
								variants={itemVariants}
								className="col-span-2 row-span-3"
							>
								<Link
									href="/portfolio#about"
									className="vertical-text p-4 flex justify-start items-end w-full h-full border nav-link"
									onClick={toggleOverlay}
								>
									<span className="glitch" data-text="About">
										About
									</span>
								</Link>
							</motion.li>
							<motion.li
								variants={itemVariants}
								className="col-span-2 row-span-3"
							>
								<Link
									href="/portfolio#projects"
									className="vertical-text p-4 flex justify-end items-start w-full h-full border nav-link"
									onClick={toggleOverlay}
								>
									<span className="glitch" data-text="Projects">
										Projects
									</span>
								</Link>
							</motion.li>
							<motion.li
								variants={itemVariants}
								className="flex justify-center items-center border cursor-pointer hover:opacity-80 glass"
								onClick={toggleOverlay}
							>
								<GiHamburger />
							</motion.li>
							<motion.li
								variants={itemVariants}
								className="col-span-3 row-span-2"
							>
								<Link
									href="/portfolio#skills"
									className="vertical-text p-4 flex justify-start items-start w-full h-full border nav-link"
									onClick={toggleOverlay}
								>
									<span className="glitch" data-text="Skills">
										Skills
									</span>
								</Link>
							</motion.li>
						</motion.ul>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default NavBar;

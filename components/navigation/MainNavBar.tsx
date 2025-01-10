"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GiHamburger } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";

const MainNavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	const toggleOverlay = () => setIsOpen(!isOpen);

	// Handle scroll to add/remove background
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	// Variants for overlay animation
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

	// Variants for individual menu items
	const itemVariants = {
		open: { opacity: 1, y: 0 },
		closed: { opacity: 0, y: -20 },
	};

	return (
		<nav
			className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
				scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
			}`}
		>
			<div className="container flex items-center justify-between px-4 py-3 md:px-6 md:py-5">
				{/* Left Side: Name as a Link */}
				<Link
					href="/landing"
					className="group text-lg md:text-xl font-bold flex items-center transition-colors"
				>
					<span className="text-blue-400 group-hover:text-blue-300 transition-colors">
						{`<`}
					</span>
					<span className="text-white group-hover:text-blue-300 transition-colors">
						EdwinPeraza
					</span>
					<span className="text-blue-400 group-hover:text-blue-300 transition-colors">
						{` />`}
					</span>
				</Link>

				{/* Right Side: Navigation Links (Hidden on small screens) */}
				<ul className="hidden md:flex space-x-4 text-base lg:text-lg font-medium">
					<li>
						<Link
							href="/#hero"
							className="p-2 md:p-4 text-white hover:text-blue-300 transition-colors"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							href="/#projects"
							className="p-2 md:p-4 text-white hover:text-blue-300 transition-colors"
						>
							Projects
						</Link>
					</li>
					<li>
						<Link
							href="/#about"
							className="p-2 md:p-4 text-white hover:text-blue-300 transition-colors"
						>
							About
						</Link>
					</li>
					<li>
						<Link
							href="/#contact"
							className="p-2 md:p-4 text-white hover:text-blue-300 transition-colors"
						>
							Contact
						</Link>
					</li>
				</ul>

				{/* Hamburger Menu for Small Screens */}
				<button
					title="menu-toggle"
					onClick={toggleOverlay}
					className="md:hidden p-2 text-white hover:text-blue-300 transition-colors rounded"
				>
					<RxHamburgerMenu size={24} />
				</button>

				{/* Full-Screen Overlay */}
				<AnimatePresence>
					{isOpen && (
						<motion.div
							className="fixed inset-0 z-[1000] bg-black bg-opacity-90 text-white flex items-center justify-center"
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
										className="vertical-text p-4 flex justify-end items-end w-full h-full border hover:text-blue-300"
										onClick={toggleOverlay}
									>
										Home
									</Link>
								</motion.li>
								<motion.li
									variants={itemVariants}
									className="col-span-2 row-span-3"
								>
									<Link
										href="/#about"
										className="vertical-text p-4 flex justify-start items-end w-full h-full border hover:text-blue-300"
										onClick={toggleOverlay}
									>
										About
									</Link>
								</motion.li>
								<motion.li
									variants={itemVariants}
									className="col-span-2 row-span-3"
								>
									<Link
										href="/#projects"
										className="vertical-text p-4 flex justify-end items-start w-full h-full border hover:text-blue-300"
										onClick={toggleOverlay}
									>
										Projects
									</Link>
								</motion.li>
								<motion.li
									variants={itemVariants}
									className="flex justify-center items-center border cursor-pointer hover:opacity-80"
									onClick={toggleOverlay}
								>
									<GiHamburger />
								</motion.li>
								<motion.li
									variants={itemVariants}
									className="col-span-3 row-span-2"
								>
									<Link
										href="/#contact"
										className="vertical-text p-4 flex justify-start items-start w-full h-full border hover:text-blue-300"
										onClick={toggleOverlay}
									>
										Contact
									</Link>
								</motion.li>
							</motion.ul>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</nav>
	);
};

export default MainNavBar;

import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import RBR_Thumbnail from "@/public/RBR/RBR_thumbnail.png";
import Hikken_Thumbnail from "@/public/Hikken/Hikken_thumbnail.png";
import Chatbot_Thumbnail from "@/public/Chatbot/Chatbot_thumbnail.png";
import PACMAN_Thumbnail from "@/public/PAC-MAN/pacman_thumbnail.png";
import RPS_Thumbnail from "@/public/RPS/RPS_thumbnail.png";
import Calculator_Thumbnail from "@/public/Calculator/calculator_thumbnail.png";
import iExpense_Thumbnail from "@/public/iExpense/iExpense_thumbnail.png";
import BucketList_Thumbnail from "@/public/BucketList/BucketList_thumbnail.png";
import WordScramble_Thumbnail from "@/public/WordScramble/WordScramble_thumbnail.png";
import Instafilter_Thumbnail from "@/public/Instafilter/Instafilter_thumbnail.png";
import SpaceInvaders_Thumbnail from "@/public/SpaceInvaders/SpaceInvaders_thumbnail.png";
import NataliaSalon_Thumbnail from "@/public/NataliaSalon/NataliaSalon_thumbnail.png";
import PhotoGallery_Thumbnail from "@/public/PhotoGallery/PhotoGallery_thumbnail.png";
import MioPortfolio_Thumbnail from "@/public/MioPortfolio/MioPortfolio_thumbnail.png";

export type Project = {
	id: string;
	name: string;
	category: string;
	description: ReactNode;
	technologies: string[];
	thumbnail: StaticImageData;
	images: StaticImageData[];
	deployUrl?: string;
	githubUrl?: string;
};

export const projects: Project[] = [
	{
		id: "19",
		name: "Natalia's Salon and Beauty Supply Website",
		category: "Web Development",
		description: (
			<>
				<p>
					Natalia Salon and Beauty Supply is the official website for a beauty
					salon and supply store, designed to provide clients with a seamless
					online experience. Built with Next.js and styled with Tailwind CSS,
					the site offers detailed information on the salon’s services, team
					members, and contact details, along with a straightforward booking
					system for clients to schedule appointments.
				</p>
				<p>
					The website includes a dedicated admin dashboard for updating product
					inventory, allowing staff to manage the beauty supply offerings
					displayed on the site. This dashboard, built using Next.js API routes,
					enables easy product updates directly through the site without needing
					external tools. By combining a dynamic frontend with efficient backend
					routes, the platform offers a practical and maintainable solution
					tailored to the salon's needs.
				</p>
			</>
		),
		technologies: ["NextJS", "Tailwind CSS", "MongoDB", "Prisma"],
		thumbnail: NataliaSalon_Thumbnail,
		images: [RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail],
		githubUrl: "https://github.com/edwinperaza99/be-beauty",
		deployUrl: "https://be-beauty.edwinperaza.com/",
	},
	{
		id: "6",
		name: "SoloLevel",
		category: "Mobile Development",
		description: (
			<>
				<p>
					Solo Level is a self-improvement app inspired by the themes of
					progression and personal growth, akin to the journey of Sung Jinwoo in
					popular manwha and anime series "Solo Leveling". The app integrates a
					gamified level system where users can set daily challenges and earn
					experience points upon completion, with a focus on fostering
					consistency and discipline in personal goals.
				</p>
				<p>
					The app is built using SwiftUI and Firebase, combining a sleek and
					intuitive user interface with real-time data storage and
					authentication. Users can create accounts, set daily tasks, and track
					their progress over time, with the app providing motivational messages
					and rewards for achieving milestones. This project was a valuable
					learning experience in mobile development, UI/UX design, and
					integrating cloud services for data management.
				</p>
			</>
		),
		technologies: ["Swift", "SwiftUI", "Firebase"],
		thumbnail: RBR_Thumbnail,
		images: [RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail],
		githubUrl: "https://github.com/edwinperaza99/SoloLevel",
	},
	{
		id: "20",
		name: "Mio's Portfolio",
		category: "Web Development",
		description: (
			<>
				<p>
					Mio's Portfolio is a personal portfolio website built using NextJS and
					Tailwind CSS. The website showcases the projects, skills, and
					experience of Mio, a scenic designer and artist. The site features a
					modern design with a focus on visual elements and user experience,
				</p>
			</>
		),
		technologies: ["NextJs", "Tailwind CSS", "TypeScript"],
		thumbnail: MioPortfolio_Thumbnail,
		images: [RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail],
		githubUrl: "https://github.com/edwinperaza99/portfolio-mio",
		deployUrl: "https://www.okadamio.com/",
	},
	{
		id: "3",
		name: "Code Against Cancer",
		category: "Web Development",
		description: (
			<>
				<p>
					Code Against Cancer is an app designed to support cancer patients with
					accessible information and resources focused on nutrition. The app
					offers a recipe section that excludes ingredients potentially harmful
					to cancer patients and provides resources tailored to specific cancer
					types, making dietary planning easier and safer.
				</p>
				<p>
					This was my first project working with Django, where I focused on
					using its features to build a structured and maintainable application.
					I also integrated external APIs, such as the YouTube API for relevant
					video content and the PubMed API for accessing research articles, to
					provide users with reliable, up-to-date information. Combined with
					Bootstrap and jQuery, these integrations helped create a smooth,
					user-friendly experience.
				</p>
			</>
		),
		technologies: ["Django", "Bootstrap", "Jquery"],
		thumbnail: RBR_Thumbnail,
		images: [RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail],
		githubUrl: "https://github.com/DanOcho8/Code-Against-Cancer",
	},
	{
		id: "1",
		name: "RBR Inventory Formatter",
		category: "Web Development",
		description:
			"Tools for the circulation desk at the Pollak Library, it facilitates the processing of the inventory list. The tools reduces the task etc",
		technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
		thumbnail: RBR_Thumbnail,
		images: [RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail],
		deployUrl: "https://rbr-inventory-formatter.vercel.app/",
		githubUrl: "example.com",
	},
	{
		id: "2",
		name: "Spotify Clone",
		category: "Web Development",
		description: (
			<>
				<p>
					This project is a Spotify clone built using the Astro framework,
					designed to replicate the user interface of Spotify. As my first
					project with Astro, this endeavor serves as a hands-on exploration of
					the framework, showcasing its capabilities and my learning journey.
					The design stays true to the original Spotify interface, aiming to
					provide a familiar user experience.
				</p>
				<p>
					This project is currently in development. The current version focuses
					on replicating the Spotify user interface. More features and
					functionalities are planned and will be added progressively.
				</p>
			</>
		),
		technologies: ["Astro", "Tailwind CSS"],
		thumbnail: RBR_Thumbnail,
		images: [RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail],
		deployUrl: "https://spotify-clone-mocha-kappa.vercel.app/",
		githubUrl: "https://github.com/edwinperaza99/spotify-clone",
	},
	{
		id: "4",
		name: "Hikken",
		category: "Web Development",
		description: (
			<>
				<p>
					Hikken is a browser-based 2D fighting game where players can engage in
					thrilling battles using various characters and abilities. This game
					offers both single-player and multiplayer modes with unique attacks
					and special abilities for each character.
				</p>
				<p>
					This project was a collaborative effort with a team of developers,
					marking our first experience with web development. We worked closely
					to design game mechanics, implement character abilities, and optimize
					real-time interactions for a seamless user experience. This project
					taught me valuable skills in teamwork and problem-solving within a
					development environment.
				</p>
			</>
		),
		technologies: ["HTML", "CSS", "JavaScript"],
		thumbnail: Hikken_Thumbnail,
		images: [RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail],
		githubUrl: "https://github.com/edwinperaza99/Hikken",
		deployUrl: "https://edwinperaza99.github.io/Hikken/",
	},
	{
		id: "5",
		name: "CSUF Chatbot",
		category: "AI",
		description: (
			<>
				<p>
					A rule-based chatbot using regular expressions and predefined
					patterns. This AI chatbot is designed to assist students, faculty, and
					visitors of California State University, Fullerton with inquiries
					regarding the location of buildings, contact information, and
					operating hours. Our solution enhances user experience by providing an
					interactive and user-friendly interface for rapid information
					retrieval.
				</p>
				<p>
					This project was an opportunity to delve into natural language
					processing using rule-based methods. Instead of relying on machine
					learning models, we utilized regular expressions to identify common
					phrases and key terms, creating a lightweight and efficient solution.
					By carefully designing and testing these patterns, we ensured that the
					chatbot could recognize a wide range of user inputs and provide
					helpful responses to common campus-related queries.
				</p>
			</>
		),
		technologies: ["Python", "Tkinter", "Regex"],
		thumbnail: Chatbot_Thumbnail,
		images: [RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail],
		githubUrl: "https://github.com/edwinperaza99/CSUF-Chatbot",
	},
	{
		id: "7",
		name: "PAC-MAN",
		category: "Game Development",
		description: (
			<>
				<p>
					Classic PAC-MAN game built with pygame. This project is a recreation
					of the iconic arcade game, featuring the original gameplay mechanics
					and design. Players can navigate the maze, collect pellets, and avoid
					ghosts to achieve the highest score. The game includes multiple
					levels, power-ups, and challenging AI to provide an engaging and
					nostalgic experience.
				</p>
				<p>
					Working with pygame allowed me to explore game development concepts,
					such as collision detection, game loops, and sprite animations. I
					focused on optimizing game performance, implementing player controls,
					and designing interactive game elements to capture the essence of the
					original PAC-MAN game. This project was a fun and educational journey
					in game development and Python programming.
				</p>
			</>
		),
		technologies: ["Python", "Pygame"],
		thumbnail: PACMAN_Thumbnail,
		images: [RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail],
		githubUrl: "https://github.com/edwinperaza99/PAC-MAN",
	},
	{
		id: "8",
		name: "HotProspects",
		category: "Mobile Development",
		description: (
			<>
				<p>
					HotProspects is a mobile app that helps users manage and track
					potential leads and contacts. The app allows users to create and
					organize lists of contacts, set reminders for follow-ups, and track
					the progress of each lead. By providing a centralized platform for
					managing leads, HotProspects streamlines the process of converting
					prospects into clients and fosters better communication and engagement
					with potential customers.
				</p>
				<p>
					This project was developed using SwiftUI and Core Data, combining a
					modern and intuitive user interface with efficient data storage and
					management. Users can create custom lists, add contacts, and set
					reminders for each lead, with the app offering a seamless experience
					for tracking and organizing potential clients. HotProspects was a
					valuable learning experience in mobile development, data management,
					and user interface design.
				</p>
			</>
		),
		technologies: ["Swift", "SwiftUI", "Core Data"],
		thumbnail: RBR_Thumbnail,
		images: [RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail],
		githubUrl: "https://github.com/edwinperaza99/HotProspects",
	},
	{
		id: "9",
		name: "BucketList",
		category: "Mobile Development",
		description: (
			<>
				<p>
					BucketList is a dynamic iOS app built using SwiftUI, designed to help
					users create and manage a list of places they want to visit. The app
					integrates with MapKit for location services and Wikipedia for
					fetching interesting facts about each location. It uses the devices
					built in biometrics (Face ID or Touch ID) to authenticate the user.
				</p>
				<p>
					Users can add new locations to their bucket list, view details about
					each place, and mark them as visited once they have been explored. The
					app provides a seamless and interactive experience for users to
					discover new destinations and track their travel goals. This project
					taught me valuable skills in SwiftUI, CloudKit, and integrating
					external APIs for enhanced functionality.
				</p>
			</>
		),
		technologies: ["Swift", "SwiftUI", "MapKit", "Wikipedia API"],
		thumbnail: BucketList_Thumbnail,
		images: [RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail],
		githubUrl: "https://github.com/edwinperaza99/BucketList",
	},
	{
		id: "10",
		name: "InstaFilter",
		category: "Mobile Development",
		description: (
			<>
				<p>
					Instafilter is an engaging iOS application developed using SwiftUI,
					designed to allow users to apply various filters to their photos. With
					a clean and intuitive interface, Instafilter provides a seamless
					experience for users looking to enhance their images with different
					effects directly from their iOS devices.
				</p>
				<p>
					The app leverages Core Image to apply filters to images in real-time,
					allowing users to preview and select their preferred effects. Users
					can adjust filter intensity, save edited photos to their library, and
					share their creations with friends and family. This project was a
					valuable learning experience in SwiftUI, Core Image, and creating
					interactive photo editing applications for iOS devices.
				</p>
			</>
		),
		technologies: ["Swift", "SwiftUI", "Core Image"],
		thumbnail: Instafilter_Thumbnail,
		images: [RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail],
		githubUrl: "https://github.com/edwinperaza99/Instafilter",
	},
	{
		id: "11",
		name: "iExpense",
		category: "Mobile Development",
		description: (
			<>
				<p>
					iExpense is a comprehensive iOS app built using SwiftUI, designed to
					help users track and manage their expenses efficiently. With intuitive
					categorization and a user-friendly interface, iExpense allows users to
					monitor their spending habits, categorize expenses into personal or
					business, and view transaction details.
				</p>
			</>
		),
		technologies: ["Swift", "SwiftUI"],
		thumbnail: iExpense_Thumbnail,
		images: [RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail],
		githubUrl: "https://github.com/edwinperaza99/iExpense",
	},
	{
		id: "12",
		name: "WordScramble",
		category: "Mobile Development",
		description: (
			<>
				<p>
					WordScramble is an engaging iOS word game built using SwiftUI, where
					players form as many words as possible from a given root word. It
					encourages players to explore their vocabulary, offering points for
					each unique word created, and provides instant feedback on the
					validity of the words.
				</p>
				<p>
					The game features score tracking and a list of valid words, enhancing
					the user experience and challenging players to think creatively. This
					project was a valuable learning experience in SwiftUI, game
					development, and creating interactive applications for iOS devices.
				</p>
			</>
		),
		technologies: ["Swift", "SwiftUI"],
		thumbnail: WordScramble_Thumbnail,
		images: [RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail],
		githubUrl: "https://github.com/edwinperaza99/WordScramble",
	},
	{
		id: "13",
		name: "iPhone Calculator",
		category: "Mobile Development",
		description: (
			<>
				<p>
					Calculator is a simple iOS app built using SwiftUI that replicates the
					functionality of the built-in iPhone calculator. Users can perform
					basic arithmetic operations such as addition, subtraction,
					multiplication, and division, as well as calculate percentages.
				</p>
			</>
		),
		technologies: ["Swift", "SwiftUI"],
		thumbnail: Calculator_Thumbnail,
		images: [RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail],
		githubUrl: "https://github.com/edwinperaza99/iPhone-calculator",
	},
	{
		id: "14",
		name: "Space Invaders",
		category: "Game Development",
		description: (
			<>
				<p>
					Dive into the nostalgic realm of arcade games with this Python-based
					Space Invaders clone. Utilizing the Pygame library, this project is a
					tribute to the classic Space Invaders arcade game, offering a blend of
					retro gaming with modern programming.
				</p>
			</>
		),
		technologies: ["Python", "Pygame"],
		thumbnail: SpaceInvaders_Thumbnail,
		images: [RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail],
		githubUrl: "https://github.com/edwinperaza99/space-invaders",
	},
	{
		id: "15",
		name: "Santa, Please!",
		category: "Web Development",
		description: (
			<>
				<p>
					Santa, Please! Allows you to create wishlists with your favorite
					products. You can submit your wishlist to your loved ones (in the
					hopes to receive a present)
				</p>
			</>
		),
		technologies: ["React", "Tailwind CSS", "Pocketbase"],
		thumbnail: RBR_Thumbnail,
		images: [RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail],
		githubUrl: "https://github.com/edwinperaza99/cpsc349-project4",
	},
	{
		id: "16",
		name: "Rock, Paper, Scissors",
		category: "Web Development",
		description: (
			<>
				<p>
					Rock, Paper, Scissors is a classic game built using HTML, Tailwind
					CSS, and JavaScript. This project is a fun and interactive
					implementation of the popular game, allowing users to play against the
					computer and test their luck and strategy.
				</p>
			</>
		),
		technologies: ["HTML", "Tailwind CSS", "JavaScript"],
		thumbnail: RPS_Thumbnail,
		images: [RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail],
		githubUrl: "https://github.com/edwinperaza99/cpsc349-project3",
		deployUrl: "https://edwinperaza99.github.io/cpsc349-project3/",
	},
	{
		id: "17",
		name: "Movie Tracker App",
		category: "Web Development",
		description: (
			<>
				<p>
					The Movie Tracker App is a web application built with Remake that
					allows users to keep track of movies they want to watch or have
					already seen. Users can add movies to their personal list, mark them
					as watched, and organize their collection based on preferences.
				</p>
			</>
		),
		technologies: ["HTML", "Tailwind CSS", "Remake"],
		thumbnail: RBR_Thumbnail,
		images: [RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail],
		githubUrl: "https://github.com/edwinperaza99/cpsc349-project2",
	},
	{
		id: "18",
		name: "Photo Gallery Collection",
		category: "Web Development",
		description: (
			<>
				<p>
					Photo gallery collection using Eleventy as a static site generator.
					This project is a simple photo gallery collection that showcases a
					variety of images. Users can view the images, navigate through the
					gallery, and enjoy a visual experience.
				</p>
			</>
		),
		technologies: ["HTML", "Tailwind CSS", "Remake"],
		thumbnail: PhotoGallery_Thumbnail,
		images: [RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail, RBR_Thumbnail],
		githubUrl: "https://github.com/edwinperaza99/cpsc349-project1",
		deployUrl: "https://edwinperaza99.github.io/cpsc349-project1/",
	},
];

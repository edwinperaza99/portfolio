import AstroIcon from "@/public/icons/Astro.svg";
import BootstrapIcon from "@/public/icons/Bootstrap.svg";
import CIcon from "@/public/icons/C.svg";
import CPPIcon from "@/public/icons/CPP.svg";
import CSSIcon from "@/public/icons/CSS.svg";
import DjangoIcon from "@/public/icons/Django.svg";
import DynamoDBIcon from "@/public/icons/DynamoDB.svg";
import ExpressIcon from "@/public/icons/Express.svg";
import FastAPIIcon from "@/public/icons/FastAPI.svg";
import FigmaIcon from "@/public/icons/Figma.svg";
import FirebaseIcon from "@/public/icons/Firebase.svg";
import GitIcon from "@/public/icons/Git.svg";
import GitHubIcon from "@/public/icons/GitHub.svg";
import HTMLIcon from "@/public/icons/HTML.svg";
import JavaScriptIcon from "@/public/icons/JavaScript.svg";
import MongoDBIcon from "@/public/icons/MongoDB.svg";
import MySQLIcon from "@/public/icons/MySQL.svg";
import NextJSIcon from "@/public/icons/NextJS.svg";
import NodeJSIcon from "@/public/icons/Node.svg";
import PostmanIcon from "@/public/icons/Postman.svg";
import PythonIcon from "@/public/icons/Python.svg";
import ReactIcon from "@/public/icons/React.svg";
import ReactNative from "@/public/icons/ReactNative.svg";
import SQLite3Icon from "@/public/icons/SQLite3.svg";
import SwiftIcon from "@/public/icons/Swift.svg";
import SwiftUIIcon from "@/public/icons/SwiftUI.svg";
import TailwindCSSIcon from "@/public/icons/TailwindCSS.svg";
import TypeScript from "@/public/icons/TypeScript.svg";
import XCodeIcon from "@/public/icons/Xcode.svg";
import { StaticImageData } from "next/image";

export function resolveSkills(skillIds: string[]) {
	return skillIds.map((id) => skillRegistry.find((skill) => skill.id === id));
}

interface Skill {
	id: string;
	name: string;
	icon: StaticImageData;
	color?: string;
}

export const skillRegistry: Skill[] = [
	{ id: "c", name: "C", icon: CIcon, color: "168, 185, 204" },
	{ id: "cpp", name: "C++", icon: CPPIcon, color: "0, 89, 156" },
	{ id: "python", name: "Python", icon: PythonIcon, color: "3, 61, 255" },
	{ id: "swift", name: "Swift", icon: SwiftIcon, color: "252, 115, 67" },
	{
		id: "javascript",
		name: "JavaScript",
		icon: JavaScriptIcon,
		color: "247, 223, 30",
	},
	{
		id: "typescript",
		name: "TypeScript",
		icon: TypeScript,
		color: "0, 122, 204",
	},
	{ id: "html", name: "HTML", icon: HTMLIcon, color: "227, 76, 38" },
	{ id: "css", name: "CSS", icon: CSSIcon, color: "38, 77, 228" },
	{ id: "astro", name: "Astro", icon: AstroIcon, color: "255, 126, 90" },
	{
		id: "bootstrap",
		name: "Bootstrap",
		icon: BootstrapIcon,
		color: "86, 61, 124",
	},
	{ id: "react", name: "React", icon: ReactIcon, color: "97, 219, 251" },
	{ id: "nextjs", name: "Next.js", icon: NextJSIcon, color: "153, 153, 153" },
	{
		id: "tailwindcss",
		name: "Tailwind CSS",
		icon: TailwindCSSIcon,
		color: "6, 182, 212",
	},
	{ id: "nodejs", name: "Node.js", icon: NodeJSIcon, color: "51, 153, 51" },
	{ id: "express", name: "Express", icon: ExpressIcon, color: "153, 153, 153" },
	{ id: "python", name: "Python", icon: PythonIcon, color: "#3776AB" },
	{ id: "django", name: "Django", icon: DjangoIcon, color: "9, 46, 32" },
	{ id: "fastapi", name: "FastAPI", icon: FastAPIIcon, color: "0, 150, 136" },
	{
		id: "firebase",
		name: "Firebase",
		icon: FirebaseIcon,
		color: "255, 202, 40",
	},
	{ id: "mongodb", name: "MongoDB", icon: MongoDBIcon, color: "71, 162, 72" },
	{
		id: "dynamodb",
		name: "DynamoDB",
		icon: DynamoDBIcon,
		color: "64, 83, 214",
	},
	{ id: "git", name: "Git", icon: GitIcon, color: "240, 80, 50" },
	{ id: "github", name: "GitHub", icon: GitHubIcon, color: "153, 153, 153" },
	{ id: "figma", name: "Figma", icon: FigmaIcon, color: "242, 78, 30" },
	{ id: "postman", name: "Postman", icon: PostmanIcon, color: "255, 108, 55" },
	{
		id: "reactnative",
		name: "React Native",
		icon: ReactNative,
		color: "97, 219, 251",
	},
	{ id: "xcode", name: "Xcode", icon: XCodeIcon, color: "20, 126, 251" },
	{ id: "swiftui", name: "SwiftUI", icon: SwiftUIIcon, color: "0, 113, 230" },
	{ id: "mysql", name: "MySQL", icon: MySQLIcon, color: "68, 121, 161" },
	{ id: "sqlite3", name: "SQLite3", icon: SQLite3Icon, color: "0, 59, 87" },
];

interface SkillCategory {
	id: string;
	name: string;
	skills: string[];
}

export const skillCategories: SkillCategory[] = [
	{
		id: "languages",
		name: "Programming Languages",
		skills: ["c", "cpp", "python", "swift", "javascript", "typescript"],
	},
	{
		id: "mobile",
		name: "Mobile Development",
		skills: ["swift", "swiftui", "reactnative", "xcode"],
	},
	{
		id: "backend",
		name: "Back-End Skills",
		skills: ["nodejs", "express", "python", "django", "fastapi"],
	},
	{
		id: "frontend",
		name: "Front-End Skills",
		skills: [
			"html",
			"css",
			"bootstrap",
			"javascript",
			"typescript",
			"react",
			"nextjs",
			"tailwindcss",
			"astro",
		],
	},
	{
		id: "database",
		name: "Database",
		skills: ["firebase", "mongodb", "mysql", "sqlite3", "dynamodb"],
	},
	{
		id: "tools",
		name: "Tools",
		skills: ["git", "github", "figma", "postman"],
	},
];

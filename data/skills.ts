import { StaticImageData } from "next/image";

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
	{ id: "c", name: "C", icon: CIcon, color: "#A8B9CC" },
	{ id: "cpp", name: "C++", icon: CPPIcon, color: "#00599C" },
	{ id: "python", name: "Python", icon: PythonIcon, color: "#FFD343" },
	{ id: "swift", name: "Swift", icon: SwiftIcon, color: "#F05138" },
	{
		id: "javascript",
		name: "JavaScript",
		icon: JavaScriptIcon,
		color: "#F7DF1E",
	},
	{ id: "typescript", name: "TypeScript", icon: TypeScript, color: "#3178C6" },
	{ id: "html", name: "HTML", icon: HTMLIcon, color: "#E34F26" },
	{ id: "css", name: "CSS", icon: CSSIcon, color: "#1572B6" },
	{ id: "astro", name: "Astro", icon: AstroIcon, color: "#FF5A60" },
	{ id: "bootstrap", name: "Bootstrap", icon: BootstrapIcon, color: "#7952B3" },
	{ id: "react", name: "React", icon: ReactIcon, color: "#61DAFB" },
	{ id: "nextjs", name: "Next.js", icon: NextJSIcon, color: "#000000" },
	{
		id: "tailwindcss",
		name: "Tailwind CSS",
		icon: TailwindCSSIcon,
		color: "#38B2AC",
	},
	{ id: "nodejs", name: "Node.js", icon: NodeJSIcon, color: "#339933" },
	{ id: "express", name: "Express", icon: ExpressIcon, color: "#000000" },
	{ id: "python", name: "Python", icon: PythonIcon, color: "#3776AB" },
	{ id: "django", name: "Django", icon: DjangoIcon, color: "#092E20" },
	{ id: "fastapi", name: "FastAPI", icon: FastAPIIcon, color: "#009688" },
	{ id: "firebase", name: "Firebase", icon: FirebaseIcon, color: "#FFCA28" },
	{ id: "mongodb", name: "MongoDB", icon: MongoDBIcon, color: "#47A248" },
	{ id: "mysql", name: "MySQL", icon: MySQLIcon, color: "#4479A1" },
	{ id: "sqlite3", name: "SQLite3", icon: SQLite3Icon, color: "#003B57" },
	{ id: "dynamodb", name: "DynamoDB", icon: DynamoDBIcon, color: "#4053D6" },
	{ id: "git", name: "Git", icon: GitIcon, color: "#F05032" },
	{ id: "github", name: "GitHub", icon: GitHubIcon, color: "#181717" },
	{ id: "figma", name: "Figma", icon: FigmaIcon, color: "#F24E1E" },
	{ id: "postman", name: "Postman", icon: PostmanIcon, color: "#FF6C37" },
	{
		id: "reactnative",
		name: "React Native",
		icon: ReactNative,
		color: "#61DAFB",
	},
	{ id: "xcode", name: "Xcode", icon: XCodeIcon, color: "#147EFB" },
	{ id: "swiftui", name: "SwiftUI", icon: SwiftUIIcon, color: "#0071E6" },
	{ id: "firebase", name: "Firebase", icon: FirebaseIcon, color: "#FFCA28" },
	{ id: "mongodb", name: "MongoDB", icon: MongoDBIcon, color: "#47A248" },
	{ id: "mysql", name: "MySQL", icon: MySQLIcon, color: "#4479A1" },
	{ id: "sqlite3", name: "SQLite3", icon: SQLite3Icon, color: "#003B57" },
	{ id: "dynamodb", name: "DynamoDB", icon: DynamoDBIcon, color: "#4053D6" },
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
		id: "backend",
		name: "Back-End Skills",
		skills: ["nodejs", "express", "python", "django", "fastapi"],
	},
	{
		id: "mobile",
		name: "Mobile Development",
		skills: ["swift", "swiftui", "reactnative", "xcode"],
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

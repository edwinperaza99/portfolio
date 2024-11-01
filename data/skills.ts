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

interface Skill {
	id: string;
	name: string;
	icon: StaticImageData;
}

interface SkillCategory {
	id: string;
	name: string;
	skills: Skill[];
}

export const skills: SkillCategory[] = [
	{
		id: "languages",
		name: "Programming Languages",
		skills: [
			{ id: "c", name: "C", icon: CIcon },
			{ id: "cpp", name: "C++", icon: CPPIcon },
			{ id: "python", name: "Python", icon: PythonIcon },
			{ id: "swift", name: "Swift", icon: SwiftIcon },
			{ id: "swiftui", name: "SwiftUI", icon: SwiftUIIcon },
		],
	},
	{
		id: "frontend",
		name: "Front-End Skills",
		skills: [
			{ id: "html", name: "HTML", icon: HTMLIcon },
			{ id: "css", name: "CSS", icon: CSSIcon },
			{ id: "bootstrap", name: "Bootstrap", icon: BootstrapIcon },
			{ id: "javascript", name: "JavaScript", icon: JavaScriptIcon },
			{ id: "typescript", name: "TypeScript", icon: TypeScript },
			{ id: "react", name: "React", icon: ReactIcon },
			{ id: "nextjs", name: "Next.js", icon: NextJSIcon },
			{ id: "reactnative", name: "React Native", icon: ReactNative },
			{ id: "tailwindcss", name: "Tailwind CSS", icon: TailwindCSSIcon },
			{ id: "astro", name: "Astro", icon: AstroIcon },
		],
	},
	{
		id: "backend",
		name: "Back-End Skills",
		skills: [
			{ id: "nodejs", name: "Node.js", icon: NodeJSIcon },
			{ id: "express", name: "Express", icon: ExpressIcon },
			{ id: "python", name: "Python", icon: PythonIcon },
			{ id: "django", name: "Django", icon: DjangoIcon },
			{ id: "fastapi", name: "FastAPI", icon: FastAPIIcon },
		],
	},
	{
		id: "mobile",
		name: "Mobile Development",
		skills: [
			{ id: "swift", name: "Swift", icon: SwiftIcon },
			{ id: "swiftui", name: "SwiftUI", icon: SwiftUIIcon },
			{ id: "reactnative", name: "React Native", icon: ReactNative },
			{ id: "xcode", name: "Xcode", icon: XCodeIcon },
		],
	},
	{
		id: "database",
		name: "Database",
		skills: [
			{ id: "firebase", name: "Firebase", icon: FirebaseIcon },
			{ id: "mongodb", name: "MongoDB", icon: MongoDBIcon },
			{ id: "mysql", name: "MySQL", icon: MySQLIcon },
			{ id: "sqlite3", name: "SQLite3", icon: SQLite3Icon },
			{ id: "dynamodb", name: "DynamoDB", icon: DynamoDBIcon },
		],
	},
	{
		id: "tools",
		name: "Tools",
		skills: [
			{ id: "git", name: "Git", icon: GitIcon },
			{ id: "github", name: "GitHub", icon: GitHubIcon },
			{ id: "figma", name: "Figma", icon: FigmaIcon },
			{ id: "postman", name: "Postman", icon: PostmanIcon },
		],
	},
];

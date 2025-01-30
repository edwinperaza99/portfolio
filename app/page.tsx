import MainNavBar from "@/components/navigation/MainNavBar";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";

export default function Home() {
	return (
		<div className="overflow-x-hidden">
			<MainNavBar />
			<section>
				<Hero />
			</section>
			<section id="projects">
				<FeaturedProjects />
			</section>
			<section id="about">
				<About />
			</section>
			<section id="skills">
				<Skills />
			</section>
			<section id="contact">
				<Contact />
			</section>
		</div>
	);
}

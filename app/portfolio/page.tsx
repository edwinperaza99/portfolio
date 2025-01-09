import MainNavBar from "@/components/navigation/MainNavBar";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Skills from "@/components/sections/Skills";

export default function Portfolio() {
	return (
		<>
			<MainNavBar />
			<section id="about">
				<About />
			</section>
			<section id="projects">
				<FeaturedProjects />
			</section>
			<section id="skills">
				<Skills />
			</section>
			<section id="contact">
				<Contact />
			</section>
		</>
	);
}

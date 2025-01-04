import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Contact from "@/components/sections/Contact";

export default function Portfolio() {
	return (
		<>
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

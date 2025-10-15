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
			<section id="projects" className="border-t border-t-white/20">
				<FeaturedProjects />
			</section>
			<section id="about" className="border-t border-t-white/20">
				<About />
			</section>
			<section id="skills" className="border-t border-t-white/20">
				<Skills />
			</section>
			<section id="contact" className="border-t border-t-white/20">
				<Contact />
			</section>
		</div>
	);
}

import { AboutSection } from "components/AboutSection";
import { ContactSection } from "components/ContactSection";
import { HomeSection } from "components/HomeSection";
import { SEO } from "components/SEO";
import { DefaultLayout } from "layouts/Default";

export default function Home() {
	return (
		<DefaultLayout>
			<SEO />
			<HomeSection />
			<AboutSection />
			<ContactSection />
		</DefaultLayout>
	);
}

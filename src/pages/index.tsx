import { AboutSection } from "components/AboutSection";
import { ContactSection } from "components/ContactSection";
import { HomeSection } from "components/HomeSection";
import { DefaultLayout } from "layouts/Default";

export default function Home() {
	return (
		<DefaultLayout>
			<HomeSection />
			<AboutSection />
			<ContactSection />
		</DefaultLayout>
	);
}

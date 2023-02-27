import { Container } from "components/Container";
import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";
import personalInfo from "../config/personal_info.json";

export const ContactSection = () => {
	return (
		<section className="mb-36">
			<Container maxWidth="max-w-6xl">
				<div className="flex items-center flex-col mb-20">
					<div className="flex flex-col items-center mb-12">
						<h2 className="text-4xl md:text-6xl font-bold mb-2 whitespace-nowrap">Get In Touch</h2>
						<div className="border-b-4 border-accent w-20 self-center" />
					</div>
					<p className="text-center prose prose-lg max-w-full mb-12 md:px-32">
						Feel free to contact me directly on social media, or email me directly using the given
						link below. I will be glad to have a conversation with you.
					</p>
					<Link
						href={"mailto:" + personalInfo.emailId}
						target="_blank"
						rel="noreferrer"
						className="btn btn-primary btn-wide gap-4"
					>
						<HiOutlineMail className="text-2xl" />
						Say Hello
					</Link>
				</div>
			</Container>
		</section>
	);
};

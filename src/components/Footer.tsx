import { BsSuitHeartFill } from "react-icons/bs";
import { PageSocial } from "./PageSocial";
import Link from "next/link";
import personalInfo from "../config/personal_info.json";

export const Footer = () => {
	return (
		<footer className="footer footer-center bg-base-200 text-base-content rounded px-4 py-6">
			<PageSocial />
			<div>
				<Link
					href="https://github.com/codescientist703/portfolio-blog"
					target="_blank"
					aria-label="Github Repository Link"
				>
					<p>
						Made with &nbsp;
						<BsSuitHeartFill className="inline underline fill-red-500" />
						&nbsp; by {personalInfo.name}
					</p>
				</Link>
			</div>
		</footer>
	);
};

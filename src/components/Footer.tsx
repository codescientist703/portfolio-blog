import { BsSuitHeartFill } from "react-icons/bs";
import { PageSocial } from "./PageSocial";
import personalInfo from "../config/personal_info.json";

export const Footer = () => {
	return (
		<footer className="footer footer-center bg-base-200 text-base-content rounded px-4 py-6">
			<PageSocial />
			<div>
				<p>
					Made with &nbsp;
					<BsSuitHeartFill className="inline" />
					&nbsp; by {personalInfo.name}
				</p>
			</div>
		</footer>
	);
};

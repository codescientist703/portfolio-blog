import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import personalInfo from "../config/personal_info.json";

export const PageSocial = () => {
	const linkedinURL = "https://www.linkedin.com/in/" + personalInfo.linkedinId;
	const githubURL = "https://github.com/" + personalInfo.githubId;
	const twitterURL = "https://twitter.com/" + personalInfo.twitterId;

	return (
		<div className="grid grid-flow-col gap-8">
			<Link className="link" href={linkedinURL} target="_blank">
				<BsLinkedin className="w-6 h-6" />
			</Link>
			<Link className="link" href={githubURL} target="_blank">
				<BsGithub className="w-6 h-6" />
			</Link>
			<Link className="link" href={twitterURL} target="_blank">
				<BsTwitter className="w-6 h-6" />
			</Link>
		</div>
	);
};

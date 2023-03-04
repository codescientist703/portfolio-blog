import { Container } from "components/Container";
import Image from "next/image";
import personalInfo from "../config/personal_info.json";

export const AboutSection = () => {
	return (
		<section className="bg-base-300 relative pb-64 pt-36">
			<Container maxWidth="max-w-6xl">
				<div className="place-items-start hero">
					<div className="hero-content gap-20 flex-col-reverse lg:flex-row-reverse px-0">
						<div className="avatar lg:block mx-auto">
							<div className="rounded-xl max-w-xs lg:max-w-xl">
								<Image src="/assets/my_picture.jpeg" alt="Nihal Mittal" width={450} height={100} />
							</div>
						</div>
						<div className="w-full mb-6">
							<div className="flex space-x-4">
								<h2 className="text-4xl font-bold mb-6 whitespace-nowrap">About me</h2>
								<div className="divider w-full" />
							</div>
							<div className="prose max-w-full">
								{personalInfo.aboutMe.split("\n").map((data, index) => (
									<p key={index}>{data}</p>
								))}
								Here are some of the technologies I’ve worked with:
								<ul className="grid grid-cols-2 marker:text-base marker:content-['▹'] marker:text-accent marker:pr-8 pl-2 text-sm">
									{personalInfo.skills.map((skill, index) => (
										<li key={index} className="pl-4">
											{skill}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</Container>
			<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
					className="relative block h-[150px] md:h-[200px] w-[calc(100%+1.3px)]"
				>
					<path
						d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
						className="fill-base-100"
					></path>
				</svg>
			</div>
		</section>
	);
};

import { Container } from "components/Container";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import Link from "next/link";
import personalInfo from "../config/personal_info.json";

export const HomeSection = () => {
	const animationSequence = personalInfo.occupations.flatMap((data) => [data, 1000]);

	return (
		<section className="relative pb-36">
			<Container maxWidth="max-w-6xl">
				<div className="hero min-h-[95vh]">
					<div className="hero-content flex-col lg:flex-row-reverse px-0">
						<Image
							src="/assets/home_page_coder.svg"
							className="hidden lg:block"
							alt="Programmer"
							width={480}
							height={100}
						/>
						<div className="w-full">
							<div className="space-y-5">
								<div className="text-2xl text-primary">Hi, I&lsquo;m</div>
								<div className="text-5xl md:text-6xl font-bold">{personalInfo.name}</div>
								<TypeAnimation
									sequence={animationSequence}
									speed={45}
									className="text-lg md:text-2xl"
									wrapper="h2"
									repeat={Infinity}
								/>
							</div>
							<p className="py-6 prose">{personalInfo.shortDescription}</p>
							<Link className="btn btn-outline btn-info btn-md" href="/blog">
								Check out my blog
							</Link>
						</div>
					</div>
				</div>
			</Container>
			<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
					className="relative block h-[150px] md:h-[200px] w-[calc(100%+1.3px)]"
				>
					<path
						d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
						className="fill-base-300"
					></path>
				</svg>
			</div>
		</section>
	);
};

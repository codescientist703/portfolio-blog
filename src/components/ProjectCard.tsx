import Image from "next/image";
import { TagList } from "./TagList";
import { Project } from "types/project";
import Link from "next/link";

export const ProjectCard = ({ project }: { project: Project }) => {
	const { name, description, tags, githubLink, projectImage, liveLink } = project;

	return (
		<div className="card bg-base-300 shadow-xl max-w-md p-5 gap-8 border border-gray-700">
			<figure>
				<Image
					src={"/" + projectImage}
					alt="Project bru"
					width={500}
					height={200}
					className="rounded-xl"
				/>
			</figure>
			<div className="card-body p-0">
				<TagList tagList={tags} />
				<h2 className="card-title mt-6 text-2xl mb-2 font-extrabold">{name}</h2>
				<p className="mb-8 leading-relaxed font-extralight"> {description}</p>
				<div className="grid grid-cols-2 items-center text-center gap-3">
					<Link
						href={githubLink}
						className="btn btn-outline btn-primary"
						rel="noreferrer"
						target="_blank"
					>
						Source Code
					</Link>
					{liveLink && (
						<Link href={liveLink} className="btn btn-secondary" rel="noreferrer" target="_blank">
							Live
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

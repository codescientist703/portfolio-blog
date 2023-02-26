import { Container } from "components/Container";
import { PageTitle } from "components/PageTitle";
import { ProjectCard } from "components/ProjectCard";
import { DefaultLayout } from "layouts/Default";
import { InferGetStaticPropsType } from "next";
import { Project } from "types/project";
import allProjects from "../../../content/pages/projects.json";

export default function ProjectPage({
	projectsList,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<DefaultLayout>
			<Container maxWidth="max-w-6xl">
				<PageTitle title="Projects" />
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mb-14">
					{projectsList.map((project, key) => (
						<ProjectCard key={key} project={project} />
					))}
				</div>
			</Container>
		</DefaultLayout>
	);
}

export const getStaticProps = async () => {
	const projectsList: Project[] = allProjects.projects;

	return {
		props: { projectsList },
	};
};

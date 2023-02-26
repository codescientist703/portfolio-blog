import { DefaultLayout } from "layouts/Default";
import { BlogCard } from "components/BlogCard";
import { PageTitle } from "components/PageTitle";
import { getBlogPostsListData } from "utils/blog";
import { BlogPost } from "types/blog";
import { InferGetStaticPropsType } from "next";
import { SEO } from "components/SEO";
import { Container } from "components/Container";

export default function About({
	blogPostsListData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<DefaultLayout>
			<Container maxWidth="max-w-6xl">
				<SEO title="Nihal Mittal's Blog" />
				<PageTitle title="Blog" />
				<div className="space-y-5 max-w mx-auto mb-12">
					{blogPostsListData.map((blogPost, key) => (
						<BlogCard key={key} blogPost={blogPost} />
					))}
				</div>
			</Container>
		</DefaultLayout>
	);
}

export const getStaticProps = async () => {
	const blogPostsListData: BlogPost[] = getBlogPostsListData();
	return { props: { blogPostsListData } };
};

import { Pagination } from "components/Pagination";
import { TagList } from "components/TagList";
import { BlogPostComponents } from "components/MDXComponents";
import { DefaultLayout } from "layouts/Default";
import { PaginationBlogPost } from "types/blog";
import { getBlogPostFromSlug, getBlogPostsSlugs, getPaginationData } from "utils/blog";
import { InferGetStaticPropsType } from "next";
import { convertDateToReadableFormat } from "utils/common";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import rehypeImgSize from "rehype-img-size";
import remarkUnwrapImages from "remark-unwrap-images";
import { SEO } from "components/SEO";
import toc from "rehype-toc";
import rehypeSlug from "rehype-slug";
import { Container } from "components/Container";

export default function BlogPostPage({
	blogPostData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const {
		title,
		seoDescription,
		date,
		tags,
		previousBlogPostData,
		nextBlogPostData,
		content,
		blogImage,
	} = blogPostData;

	return (
		<DefaultLayout>
			<Container maxWidth="max-w-4xl">
				<SEO title={title} description={seoDescription} type="article" image="" />
				<div>
					<h1 className="text-4xl md:text-5xl font-extrabold mt-14 mb-6">{title}</h1>
					<div className="text-xl font-extralight text-gray-400 mb-5">
						Posted on {convertDateToReadableFormat(date)}
					</div>
					<div className="mb-8">
						<TagList tagList={tags} />
					</div>
					<article className="prose prose-lg max-w-full prose-headings:-mt-20 prose-headings:pt-20 mb-14">
						<MDXRemote {...content} components={BlogPostComponents} />
					</article>
					<Pagination prevBlogPost={previousBlogPostData} nextBlogPost={nextBlogPostData} />
				</div>
			</Container>
		</DefaultLayout>
	);
}
export const getStaticProps = async ({ params }: { params: any }) => {
	const slugs = getBlogPostsSlugs();
	const currentSlugIndex = slugs.indexOf(params.slug);
	const previousBlogPostData: PaginationBlogPost | null =
		currentSlugIndex < slugs.length - 1 ? getPaginationData(slugs[currentSlugIndex + 1]) : null;

	const nextBlogPostData: PaginationBlogPost | null =
		currentSlugIndex > 0 ? getPaginationData(slugs[currentSlugIndex - 1]) : null;

	const currentBlogPostData: any = getBlogPostFromSlug(params.slug);
	currentBlogPostData.previousBlogPostData = previousBlogPostData;
	currentBlogPostData.nextBlogPostData = nextBlogPostData;

	currentBlogPostData.content = await serialize(currentBlogPostData.content, {
		mdxOptions: {
			rehypePlugins: [
				//@ts-expect-error
				[rehypeImgSize, { dir: "public" }],
				[rehypeSlug],
				[
					toc,
					{
						cssClasses: {
							listItem: "pl-3",
						},
					},
				],
			],
			remarkPlugins: [[remarkUnwrapImages]],
		},
	});

	return { props: { blogPostData: currentBlogPostData } };
};

export const getStaticPaths = async () => {
	const paths = getBlogPostsSlugs().map((slug) => {
		return {
			params: { slug },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost, PaginationBlogPost } from "types/blog";

export const POSTS_PATH = path.join(process.cwd(), "content", "posts");

export const getBlogPostsPaths = () =>
	fs.readdirSync(POSTS_PATH).filter((path) => /\.mdx?$/.test(path));

export const getPathFromSlug = (blogSlug: string) => {
	const blogPath = getBlogPostsPaths().find((path) => path.includes(blogSlug));

	if (blogPath === undefined) {
		throw new TypeError("Path to blog post is not found");
	}
	return blogPath;
};

export const getBlogPostFromSlug = (blogSlug: string) => {
	const { data, content } = matter.read(path.join(POSTS_PATH, getPathFromSlug(blogSlug)));

	return {
		...data,
		content,
	};
};

export const getPaginationData = (blogSlug: string): PaginationBlogPost => {
	const { data } = matter.read(path.join(POSTS_PATH, getPathFromSlug(blogSlug)));

	return {
		slug: data.slug,
		title: data.title,
	};
};

export const getBlogPostsListData = () => {
	const blogPostListData = <BlogPost[]>getBlogPostsPaths()
		.map((blogPath) => {
			const { data } = matter.read(path.join(POSTS_PATH, blogPath));
			return { ...data };
		})
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return blogPostListData.map((blogPostData, i) => {
		return {
			...blogPostData,
		};
	});
};

export const getBlogPostsSlugs = () => {
	return getBlogPostsPaths()
		.map((path) => path.replace(/\.mdx?$/, ""))
		.sort()
		.reverse()
		.map((path) => path.split("_")[1]);
};

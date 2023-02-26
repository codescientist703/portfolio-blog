export type PaginationBlogPost = {
	slug: string;
	title: string;
};

export type BlogPost = {
	template: string;
	slug: string;
	title: string;
	summary: string;
	date: string;
	seoDescription: string;
	tags: string[];
	previousBlogPostData: PaginationBlogPost | null;
	nextBlogPostData: PaginationBlogPost | null;
	blogImage: string;
	content?: string;
};

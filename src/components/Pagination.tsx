import Link from "next/link";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";
import { PaginationBlogPost } from "types/blog";

const PrevBlogNavItem = ({ blogPost }: { blogPost: PaginationBlogPost }) => {
	const { slug, title } = blogPost;
	return (
		<Link href={slug} className="btn btn-ghost pl-0 gap-4 normal-case border-spacing-2 h-auto p-2">
			<CgArrowLongLeft className="h-8 w-8" />

			<div className="flex flex-col items-start max-w-[6rem] space-y-1 md:max-w-[16rem] sm:max-w-[10rem]">
				<span className="text-base-content/50 text-xs">Prev</span>
				<span className="text-start break-word">{title}</span>
			</div>
		</Link>
	);
};

const NextBlogNavItem = ({ blogPost }: { blogPost: PaginationBlogPost }) => {
	const { slug, title } = blogPost;
	return (
		<Link href={slug} className="btn btn-ghost pr-0 gap-4 normal-case h-auto p-2">
			<div className="flex flex-col items-end max-w-[6rem] space-y-1 md:max-w-[16rem] sm:max-w-[10rem]">
				<span className="text-base-content/50 text-xs">Next</span>
				<span className="text-end break-word">{title}</span>
			</div>
			<CgArrowLongRight className="h-8 w-8" />
		</Link>
	);
};

export const Pagination = ({
	prevBlogPost,
	nextBlogPost,
}: {
	prevBlogPost?: PaginationBlogPost;
	nextBlogPost?: PaginationBlogPost;
}) => {
	return (
		<>
			{prevBlogPost || nextBlogPost ? (
				<div className="mb-14">
					<div className="divider" />
					<div className="flex justify-between min-h-[8rem] items-center">
						{prevBlogPost ? <PrevBlogNavItem blogPost={prevBlogPost} /> : <div />}
						{nextBlogPost && <NextBlogNavItem blogPost={nextBlogPost} />}
					</div>
					<div className="divider" />
				</div>
			) : (
				<div className="py-7" />
			)}
		</>
	);
};

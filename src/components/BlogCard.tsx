import Link from "next/link";
import { TagList } from "./TagList";
import { BlogPost } from "types/blog";
import { convertDateToReadableFormat } from "utils/common";
import Image from "next/image";

export const BlogCard = ({ blogPost }: { blogPost: BlogPost }) => {
	const { title, slug, summary, date, tags, blogImage } = blogPost;
	return (
		<div className="card md:max-w-full max-w-md md:card-side bg-base-200 shadow-xl p-4 border border-gray-700 gap-8 mx-auto">
			<figure className="md:max-w-xs h-full">
				<Image
					src={"/" + blogImage}
					alt="Project"
					width={500}
					height={200}
					className="rounded-xl"
				/>
			</figure>
			<div className="card-body p-0">
				<Link href={`/blog/${slug}`} className="card-title text-3xl hover:text-primary">
					{title}
				</Link>
				<p className="font-thin text-gray-100  text-sm">
					Posted on {convertDateToReadableFormat(date)}
				</p>
				<p className="prose py-3 min-w-full">{summary}</p>
				<TagList tagList={tags} />
				<div className="card-actions justify-end"></div>
			</div>
		</div>
	);
};

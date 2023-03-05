import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { MdFormatListBulleted } from "react-icons/md";

export const BlogPostImg = (props: any) => (
	<figure className="text-center inline-block my-0">
		<Image
			src={"/" + props.src}
			alt={props.alt}
			width={props.width}
			height={props.height}
			className="rounded-lg"
		/>
		{props.title && <figcaption className="mt-2 text-xs">{props.title}</figcaption>}
	</figure>
);

export const BlogPostLink = (props: any) => {
	if (props.href.startsWith("#")) {
		return (
			<Link href={props.href} className="link link-hover opacity-80 no-underline " rel="noreferrer">
				{props.children}
			</Link>
		);
	}
	return (
		<Link href={props.href} className="link hover:text-primary" rel="noreferrer" target="_blank">
			{props.children}
		</Link>
	);
};

export const TableOfContent = ({ children }: { children: ReactNode }) => (
	<nav className="pt-8 mb-8 marker:text-sm marker:content-['➤']">
		<h3 className="uppercase flex items-center font-bold">
			<MdFormatListBulleted className="inline-block mr-3 text-secondary" />
			Table Of Contents
		</h3>
		{children}
	</nav>
);

export const BlogPostComponents = {
	img: BlogPostImg,
	a: BlogPostLink,
	p: ({ children }: { children: ReactNode }) => <p className="text-justify"> {children}</p>,
	nav: TableOfContent,
};

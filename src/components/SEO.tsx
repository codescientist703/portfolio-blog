import Head from "next/head";
import siteConfig from "../config/site.json";
import { useRouter } from "next/router";

export const SEO = ({
	title,
	description,
	image,
	type,
}: {
	title?: string;
	description?: string;
	image?: string;
	type?: string;
}) => {
	const { siteUrl, defaultTitle, defaultDescription, defaultImage } = siteConfig;

	const router = useRouter();
	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		image: image || defaultImage,
		siteUrl: `${siteUrl}${router.asPath}`,
		type: type || "website",
	};

	return (
		<Head>
			<title>{seo.title}</title>
			<link rel="canonical" href={seo.siteUrl} />
			<meta name="description" content={seo.description} />
			<meta property="og:title" content={seo.title} />
			<meta property="og:description" content={seo.description} />
			<meta property="og:image" content={seo.image} />
			<meta property="og:url" content={seo.siteUrl} />
			<meta property="og:type" content={seo.type} />
		</Head>
	);
};

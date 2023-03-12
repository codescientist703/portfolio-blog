import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
				<link rel="icon" href="/icons/favicon.ico" />
				<link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
				<link rel="manifest" href="/icons/site.webmanifest" />
			</Head>
			<Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
			<Component {...pageProps} />
		</>
	);
}

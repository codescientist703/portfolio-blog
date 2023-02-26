import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
			</Head>
			<Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
			<Component {...pageProps} />
		</>
	);
}

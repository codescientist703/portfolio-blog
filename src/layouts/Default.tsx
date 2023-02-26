import { Sidebar, Navbar } from "components/Header";
import { Footer } from "components/Footer";

import { ReactNode } from "react";
import { ScrollToTop } from "components/ScrollToTop";

export const DefaultLayout = ({
	children,
	isHighWidth,
}: {
	children: ReactNode;
	isHighWidth?: boolean;
}) => {
	const maxWidth = isHighWidth ? "max-w-6xl" : "max-w-4xl";

	return (
		<div className="drawer">
			<input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content" id="root-container">
				<Navbar />
				{children}
				<Footer />
			</div>
			<Sidebar />
			<ScrollToTop />
		</div>
	);
};

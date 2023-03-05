import { ImArrowUp2 } from "react-icons/im";
import React, { useState, useEffect } from "react";

export const ScrollToTop = () => {
	const [showTopBtn, setShowTopBtn] = useState(false);

	useEffect(() => {
		document.getElementById("root-container")?.addEventListener("scroll", () => {
			const rootContainer = document.getElementById("root-container");

			if (rootContainer != undefined && rootContainer.scrollTop > 3000) {
				setShowTopBtn(true);
			} else {
				setShowTopBtn(false);
			}
		});
	}, []);

	const goToTop = () => {
		document.getElementById("root-container")?.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div className="fixed bottom-6 right-8 z-10">
			{showTopBtn && (
				<ImArrowUp2
					onClick={goToTop}
					className="text-5xl p-2 bg-secondary fill-base-content rounded-full hover:cursor-pointer animate-bounce border-[1px] border-base-content"
				/>
			)}
		</div>
	);
};

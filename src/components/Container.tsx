import { ReactNode } from "react";

export const Container = ({ children, maxWidth }: { children: ReactNode; maxWidth?: string }) => {
	return <div className={`${maxWidth} mx-auto px-4 container min-h-full`}>{children}</div>;
};

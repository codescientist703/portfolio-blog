export const PageTitle = ({ title }: { title: string }) => {
	return (
		<div className="text-center my-14">
			<div className="inline-block text-center">
				<h1 className="md:text-6xl text-5xl text-center font-black pb-3">{title}</h1>
				<div className="border-b-4 border-accent w-1/3 self-start ml-1" />
			</div>
		</div>
	);
};

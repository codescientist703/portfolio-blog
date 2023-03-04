const Tag = ({ name }: { name: string }) => {
	return <div className="text-xl opacity-80">{name}</div>;
};

export const TagList = ({ tagList }: { tagList: Array<string> }) => {
	return (
		<div className="flex flex-wrap gap-2">
			{tagList.map((tag, index) => (
				<div className="badge badge-outline badge-info py-3 px-4 capitalize" key={index}>
					{tag}
				</div>
			))}
		</div>
	);
};

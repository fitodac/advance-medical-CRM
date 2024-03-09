export const HeaderSection = ({ title }: { title: string }) => {
	if (!title.length) return <></>

	return (
		<div className="text-teal border-b text-sm font-medium uppercase leading-tight py-1 select-none">
			{title}
		</div>
	)
}

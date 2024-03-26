export const Loading = () => {
	return (
		<>
			<div className="bg-white/80 inset-0 fixed z-[100]">
				<div className="grid place-content-center h-full">
					<div className="spinner border-l-teal w-10 after:border-opacity-30"></div>
				</div>
			</div>
		</>
	)
}

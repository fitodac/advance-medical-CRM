export const FetchError = ({
	validation,
	message,
}: {
	validation: boolean
	message: string
}) => {
	if (!validation) {
		return (
			<>
				<div className="bg-pink-100 text-pink-600 text-center p-8 rounded-xl">
					{message}
				</div>
			</>
		)
	}
	return <></>
}

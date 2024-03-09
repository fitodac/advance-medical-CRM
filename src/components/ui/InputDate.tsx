export const InputDate = ({
	value,
	onChange,
}: {
	value: string
	onChange: () => void
}) => {
	return (
		<>
			<input type="text" value={value} onChange={onChange} />
		</>
	)
}

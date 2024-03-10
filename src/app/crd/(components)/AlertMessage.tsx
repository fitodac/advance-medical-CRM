interface Props {
	children: React.ReactNode
	valid: boolean
}

export const AlertMessage = ({ children, valid = true }: Props) => {
	return (
		<div
			className={
				!valid
					? 'bg-pink-50 bg-opacity-30 border-l-8 border-pink-400 px-3 py-2 transition-all rounded-r-lg'
					: ''
			}
			role="alert"
		>
			{children}

			{!valid && (
				<span className="text-pink-400 text-sm font-medium">
					Por favor, confirme el valor
				</span>
			)}
		</div>
	)
}

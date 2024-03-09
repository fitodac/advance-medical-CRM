'use client'
type Props = {
	children?: React.ReactNode
	className?: string
	type?: 'submit' | 'button' | undefined
	onClick?: () => void
}

export const Button = ({
	children,
	type = 'submit',
	onClick,
	className,
}: Props): JSX.Element => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={className ? `btn ${className}` : 'btn'}
		>
			{children}
		</button>
	)
}

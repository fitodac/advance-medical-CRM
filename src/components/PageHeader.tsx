type Props = {
	title?: string
	children?: React.ReactNode
}

export const PageHeader = ({ title = '', children }: Props): JSX.Element => {
	return (
		<div className="flex justify-between">
			<h1 className="text-primary text-2xl font-semibold leading-none select-none md:text-3xl">
				{title}
			</h1>

			{children}
		</div>
	)
}

import Link from 'next/link'

type Props = {
	children: React.ReactNode
	href: string
	className: string
}

export const ButtonLink = ({
	children,
	href,
	className,
}: Props): JSX.Element => {
	return (
		<Link href={href} className={className ? `btn ${className}` : 'btn'}>
			{children}
		</Link>
	)
}

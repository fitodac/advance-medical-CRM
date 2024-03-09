'use client'
import Link from 'next/link'

const navItemClassName = 'transition-all hover:text-primary'
const navItemActiveClassName = 'text-teal'

type Props = {
	data?:
		| {
				title?: string
				active?: boolean
				current?: boolean
				link?: string
		  }[]
		| void[]
}

export const Breadcrumbs = ({ data = [] }: Props) => {
	return (
		<>
			<ul className="text-slate-400 text-sm leading-none flex items-center mt-2 select-none">
				<li className="flex items-center">
					<Link href="/" className={navItemClassName}>
						Dashboard
					</Link>
				</li>

				{data.length > 0 &&
					data.map((e) => (
						<li key={crypto.randomUUID()} className="flex items-center">
							<span className="bg-slate-200 w-px h-4 mx-2.5 inline-block" />
							{e?.current ? (
								<span className={navItemActiveClassName}>{e?.title}</span>
							) : (
								<Link href={e?.link ?? '/'} className={navItemClassName}>
									{e?.title}
								</Link>
							)}
						</li>
					))}
			</ul>
		</>
	)
}

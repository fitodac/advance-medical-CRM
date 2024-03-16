type Props = {
	header?: any[]
	children?: React.ReactNode
	pager?: any[]
}

export const Table = ({ header, children }: Props) => {
	return (
		<>
			<section className="border border-slate-100 max-w-full h-full p-0 overflow-x-auto scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-100 rounded-md">
				<table className="table table-striped hoverable">
					{header && (
						<thead>
							<tr>
								{header.map((e) => (
									<th key={e.title} className="text-slate-400 text-sm">
										<div className={e?.class}>{e?.title}</div>
									</th>
								))}
							</tr>
						</thead>
					)}

					<tbody>{children}</tbody>
				</table>
			</section>
		</>
	)
}

import Link from 'next/link'
import type { Pager } from 'types'

export const Pagination = ({ pager }: { pager: Pager }) => {
	return (
		<>
			<div className="pt-5">
				<div className="flex overflow-x-hidden justify-between items-center">
					<div className="text-slate-400 text-sm pl-2">
						Total: {pager.total} Pacientes
					</div>

					<div className="flex">
						{pager.prev_page_url && (
							<Link
								className="btn bg-transparent border-none text-base w-10 h-10 p-0 grid place-content-center select-none rounded transition-all hover:bg-teal hover:text-white"
								href={`?page=${pager.next_page_url}`}
							>
								<i className="ri-arrow-left-s-line relative transition-all top-px"></i>
							</Link>
						)}

						{pager.links.map((e) => (
							<span key={e.url}>
								{e.label !== '...' ? (
									<Link
										className={
											e.active
												? 'btn bg-transparent border-transparent text-slate-300 text-base w-10 h-10 p-0 grid place-content-center select-none rounded transition-all cursor-default'
												: 'btn bg-transparent border-none text-base w-10 h-10 p-0 grid place-content-center select-none rounded transition-all hover:bg-teal hover:text-white'
										}
										href={`?page=${e.label}`}
									>
										{e.label}
									</Link>
								) : (
									<span className="text-slate-300 w-10 h-10 p-0 grid place-content-center select-none">
										{e.label}
									</span>
								)}
							</span>
						))}

						{pager.next_page_url && (
							<Link
								className="btn bg-transparent border-none text-base w-10 h-10 p-0 grid place-content-center select-none rounded transition-all hover:bg-teal hover:text-white"
								href={`?page=${pager.next_page_url}`}
							>
								<i className="ri-arrow-right-s-line relative transition-all top-px"></i>
							</Link>
						)}
					</div>
				</div>
			</div>
		</>
	)
}

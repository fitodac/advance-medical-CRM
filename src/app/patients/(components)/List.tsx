'use client'
import { useSession } from 'next-auth/react'
import { useCrdStore } from '@/store'
import { DeletePatient } from '.'
import {
	ButtonLink,
	Table,
} from '@/components'
import type { Row, Pager } from 'type-patients'
import Link from 'next/link'

interface Props {
	content: any
}

const thead = [
	{ title: '#' },
	{ title: 'ID' },
	{ title: 'Fecha de nacimiento' },
	{ title: 'Doctor' },
	{ title: 'Visita 1' },
	{ title: 'Visita 2' },
	{ title: 'Acciones', class: 'text-end' },
]

const toCapitalize = (text: string) => {
	return text.toLowerCase().replace(/\b\w/g, function (l) {
		return l.toUpperCase()
	})
}

export const List = ({ content }: Props) => {
	const { data: session, status } = useSession()
	const { setPatient } = useCrdStore()

	const pager: Pager = {
		current_page: content.current_page,
		links: content.links.filter(
			(e: { url: string; label: string; active: boolean }) => {
				if (e.label !== 'Siguiente &raquo;' && e.label !== '&laquo; Anterior')
					return e
			}
		),
		prev_page_url: content.prev_page_url
			? content.prev_page_url.split('?page=')[1]
			: null,
		next_page_url: content.next_page_url
			? content.next_page_url.split('?page=')[1]
			: null,
		total: content.total,
		last_page: content.last_page,
	}

	return (
		<>
			<section className="w-full overflow-x-hidden pt-5">
				<Table
					header={
						'doctor' === session?.user.role
							? [...thead].filter((i) => i.title !== 'Doctor')
							: thead
					}
				>
					{content.data.map((patient: Row) => (
						<tr key={patient.code}>
							<td>
								<span className="text-slate-300 text-xs">{patient.id}</span>
							</td>

							<td>
								<span className="text-slate-500 text-sm font-bold">
									{patient.code}
								</span>
							</td>

							<td>
								{patient.visits[0] ? (
									<>
										<span className="text-slate-500 text-sm">
											{patient.visits[0].birth_date}
										</span>
									</>
								) : (
									<span className="text-slate-300 select-none">...</span>
								)}
							</td>

							{'doctor' !== session?.user.role && (
								<td className="text-sm leading-tight">
									{patient.doctor && (
										<div className="text-slate-500 font-medium whitespace-nowrap text-ellipsis">
											{`${patient.doctor.user.firstname} ${patient.doctor.user.lastname}`}
										</div>
									)}

									{patient.center ? (
										<small className="text-slate-500 text-xs font-light">
											{toCapitalize(patient.center.name)}
										</small>
									) : (
										<small className="text-slate-300 text-xs font-light">
											sin datos
										</small>
									)}
								</td>
							)}

							<td>
								{patient.visits[0] ? (
									<>
										<span className="text-slate-500 text-sm">
											{patient.visits[0].date}
										</span>
									</>
								) : (
									<span className="text-slate-300 select-none">...</span>
								)}
							</td>

							<td>
								{patient.visits[1] ? (
									<>
										<span className="text-slate-500 text-sm">
											{patient.visits[1].date}
										</span>
									</>
								) : (
									<span className="text-slate-300 select-none">...</span>
								)}
							</td>

							<td>
								<div className="flex gap-x-2 justify-end h-full">
									{'doctor' === session?.user.role && (
										<span
											onClick={() => {
												setPatient(patient)
											}}
										>
											<ButtonLink
												className="btn-sm bg-teal border-teal text-white"
												href={`/crd/${patient.id}`}
											>
												CRD
											</ButtonLink>
										</span>
									)}

									<DeletePatient id={patient.id} />
								</div>
							</td>
						</tr>
					))}
				</Table>
			</section>

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

			{/* <pre>{JSON.stringify(pager, null, 2)}</pre> */}
			{/* <pre>{JSON.stringify(content, null, 2)}</pre> */}
		</>
	)
}

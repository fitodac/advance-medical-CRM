import type { Metadata } from 'next'
import { api } from '@/config'
import { useFetchList, useGetSession, useHelpers } from '@/hooks'
import { NewPatient, EditCrd } from './(components)'
import {
	PageHeader,
	Breadcrumbs,
	Table,
	Pagination,
	FetchError,
} from '@/components'
import type { Row } from 'type-patients'
import type { Pager } from 'types'
import type { User } from 'next-auth'
import { DeletePatient } from './(components)'

export const metadata: Metadata = {
	title: `${process.env.APP_NAME} • Pacientes`,
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

const PatientsPage = async ({
	searchParams,
}: {
	searchParams: { page: string }
}) => {
	if (!api.patients) return <></>

	const url = searchParams.page
		? `${api.patients}?page=${searchParams.page}`
		: api.patients
	const list = await useFetchList(url)
	const session = await useGetSession()

	if (!session) {
		return FetchError({
			validation: session ? false : true,
			message: 'El servidor no puede devolver los datos de sesión',
		})
	}

	if (!list) {
		return FetchError({
			validation: list,
			message: 'El servidor no puede devolver el listado de pacientes',
		})
	}

	const { toCapitalize } = useHelpers()

	const user: User = session.user

	const tableHead: { title?: string; class?: string }[] = []

	thead.forEach((e) => {
		if (
			user.role &&
			['superadmin', 'admin'].includes(user.role) &&
			'Acciones' === e.title
		) {
		} else if (
			user.role &&
			['doctor'].includes(user.role) &&
			'Doctor' === e.title
		) {
		} else {
			tableHead.push(e)
		}
	})

	const pager: Pager = {
		current_page: list.data.current_page,
		links: list.data.links.filter(
			(e: { url: string; label: string; active: boolean }) => {
				if (e.label !== 'Siguiente &raquo;' && e.label !== '&laquo; Anterior')
					return e
			}
		),
		prev_page_url: list.data.prev_page_url
			? list.data.prev_page_url.split('?page=')[1]
			: null,
		next_page_url: list.data.next_page_url
			? list.data.next_page_url.split('?page=')[1]
			: null,
		total: list.data.total,
		last_page: list.data.last_page,
	}

	return (
		<>
			<PageHeader title="Pacientes">
				{user.role === 'doctor' && <NewPatient />}
			</PageHeader>

			<Breadcrumbs data={[{ title: 'Lista de pacientes', current: true }]} />

			{/* {list && <List content={list.data} />} */}

			<section className="w-full overflow-x-hidden pt-5">
				<Table header={tableHead}>
					{list.data.data.map((item: Row) => (
						<tr key={item.code}>
							<td>
								<span className="text-slate-300 text-xs">{item.id}</span>
							</td>

							<td>
								<span className="text-slate-500 text-sm font-bold">
									{item.code}
								</span>
							</td>

							<td>
								{item.visits[0] ? (
									<>
										<span className="text-slate-500 text-sm">
											{item.visits[0].birth_date}
										</span>
									</>
								) : (
									<span className="text-slate-300 select-none">...</span>
								)}
							</td>

							{'doctor' !== session?.user.role && (
								<td className="text-sm leading-tight">
									{item.doctor && (
										<div className="text-slate-500 font-medium whitespace-nowrap text-ellipsis">
											{`${item.doctor.user.firstname} ${item.doctor.user.lastname}`}
										</div>
									)}

									{item.center ? (
										<small className="text-slate-500 text-xs font-light">
											{toCapitalize(item.center.name)}
										</small>
									) : (
										<small className="text-slate-300 text-xs font-light">
											sin datos
										</small>
									)}
								</td>
							)}

							<td>
								{item.visits[0] ? (
									<>
										<span className="text-slate-500 text-sm">
											{item.visits[0].date}
										</span>
									</>
								) : (
									<span className="text-slate-300 select-none">...</span>
								)}
							</td>

							<td>
								{item.visits[1] ? (
									<>
										<span className="text-slate-500 text-sm">
											{item.visits[1].date}
										</span>
									</>
								) : (
									<span className="text-slate-300 select-none">...</span>
								)}
							</td>

							<td>
								<div className="flex gap-x-3 justify-end h-full">
									{'doctor' === session?.user.role && (
										<>
											<EditCrd patient={item} />
										</>
									)}

									<DeletePatient id={item.id} />
								</div>
							</td>
						</tr>
					))}
				</Table>

				<Pagination pager={pager} />
			</section>

			<div className="h-12" />

			{/* <pre>{JSON.stringify(list, null, 2)}</pre> */}
		</>
	)
}

export default PatientsPage

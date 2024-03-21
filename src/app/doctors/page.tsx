import type { Metadata } from 'next'
import { api } from '@/config'
import { useFetchList, useGetSession, useHelpers } from '@/hooks'
import {
	PageHeader,
	Breadcrumbs,
	Table,
	Pagination,
	ButtonLink,
	FetchError,
} from '@/components'
import { DeleteDoctor } from './(components)'
import type { Pager } from 'types'
import type { User } from 'next-auth'

export const metadata: Metadata = {
	title: `${process.env.APP_NAME} • Doctores`,
}

const thead = [
	{ title: '#' },
	{ title: 'Nombre' },
	{ title: 'Especialidad' },
	{ title: 'Centro' },
	{ title: 'Acciones', class: 'text-end' },
]

const DoctorsPage = async ({
	searchParams,
}: {
	searchParams: { page: string }
}) => {
	if (!api.doctors) return <></>

	const url = searchParams.page
		? `${api.doctors}?page=${searchParams.page}`
		: api.doctors

	const { toCapitalize } = useHelpers()
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
			message: 'El servidor no puede devolver el listado de doctores',
		})
	}

	const user: User = session.user

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
			<PageHeader title="Doctores">
				{user.role && ['superadmin', 'admin'].includes(user.role) && (
					<ButtonLink
						href="/doctors/new"
						className="bg-teal border-teal text-white"
					>
						Nuevo doctor
					</ButtonLink>
				)}
			</PageHeader>

			<Breadcrumbs data={[{ title: 'Lista de doctores', current: true }]} />

			<section className="w-full overflow-x-hidden pt-5">
				<Table header={thead}>
					{list.data.data.map((item: any) => (
						<tr key={item.code}>
							<td>
								<span className="text-slate-300 text-xs">{item.id}</span>
							</td>

							<td>
								<div className="text-slate-600 font-semibold">
									{`${item.user.firstname} ${item.user.lastname}`}
								</div>
								<div className="text-slate-400 text-xs font-light">
									{item.user.email}
								</div>
							</td>

							<td>
								<div className="text-slate-500 text-sm">
									{item.specialty.name}
								</div>
							</td>

							<td className="text-slate-500 text-sm capitalize max-w-56">
								{item.center ? (
									<div className="overflow-ellipsis overflow-hidden">
										<span className="whitespace-nowrap">
											{toCapitalize(item.center.name)}
										</span>
									</div>
								) : (
									<div className="text-pink-300 text-sm font-medium">
										Centro médico eliminado
									</div>
								)}
							</td>

							<td>
								<div className="flex gap-x-2 justify-end h-full">
									<ButtonLink
										href={`/doctors/edit/${item.id}`}
										className="btn btn-sm bg-primary border-primary text-white"
									>
										Editar
									</ButtonLink>

									<DeleteDoctor id={item.id} />
								</div>
							</td>
						</tr>
					))}
				</Table>

				<Pagination pager={pager} />
			</section>

			<div className="h-20" />

			{/* <pre>{JSON.stringify(session, null, 2)}</pre> */}
			{/* <pre>{JSON.stringify(list, null, 2)}</pre> */}
		</>
	)
}

export default DoctorsPage

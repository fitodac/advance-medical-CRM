import { api } from '@/config'
import { useFetchList, useGetSession } from '@/hooks'
import {
	PageHeader,
	Breadcrumbs,
	Pagination,
	FetchError,
	ButtonLink,
	Table,
} from '@/components'
import { DeleteUser } from './(components)'

import type { Metadata } from 'next'
import type { Pager } from 'types'
import type { User } from 'next-auth'

export const metadata: Metadata = {
	title: `${process.env.APP_NAME} • Usuarios`,
}

const thead = [
	{ title: '#' },
	{ title: 'Nombre' },
	{ title: 'Rol', class: 'text-center' },
	{ title: 'Email' },
	{ title: 'Acciones', class: 'text-end' },
]

const BadgeClassName = (role: string) => {
	switch (role) {
		case 'admin':
			return 'badge ghost bg-sky-200 text-sky-500 border-primary text-primary'
		case 'doctor':
			return 'badge ghost bg-green-200 text-green-500'
	}
}

const UsersPage = async ({
	searchParams,
}: {
	searchParams: { page: string }
}) => {
	if (!api.users) return <></>

	const url = searchParams.page
		? `${api.users}?page=${searchParams.page}`
		: api.users

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
			message: 'El servidor no puede devolver el listado de usuarios',
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
			<PageHeader title="Usuarios">
				{user.role && ['superadmin', 'admin'].includes(user.role) && (
					<ButtonLink
						href="/users/new"
						className="bg-teal border-teal text-white"
					>
						Nuevo usuario
					</ButtonLink>
				)}
			</PageHeader>

			<Breadcrumbs data={[{ title: 'Lista de usuarios', current: true }]} />

			<section className="w-full overflow-x-hidden pt-5">
				<Table header={thead}>
					{list.data.data.map((item: any) => (
						<tr key={item.email}>
							<td>
								<span className="text-slate-300 text-xs">{item.id}</span>
							</td>

							<td>
								<div className="text-slate-600 font-semibold">
									{`${item.firstname} ${item.lastname}`}
								</div>
								<div className="text-slate-400 text-xs font-light">
									{item.date}
								</div>
							</td>

							<td className="text-center">
								<span className={BadgeClassName(item.role)}>{item.role}</span>
							</td>

							<td className="text-slate-600">{item.email}</td>

							<td>
								<div className="flex gap-x-2 justify-end h-full">
									<ButtonLink
										href={`/users/edit/${item.id}`}
										className="btn btn-sm bg-primary border-primary text-white"
									>
										Editar
									</ButtonLink>

									<DeleteUser id={item.id} />
								</div>
							</td>
						</tr>
					))}
				</Table>

				<Pagination pager={pager} />
			</section>

			<div className="h-20" />

			{/* <pre>{JSON.stringify(list, null, 2)}</pre> */}
		</>
	)
}

export default UsersPage

import type { Metadata } from 'next'
import { api } from '@/config'
import { useFetchList, useHelpers } from '@/hooks'
import { PageHeader, Breadcrumbs } from '@/components'
import { ButtonLink, Table } from '@/components'

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

const BadgeClassName = (role) => {
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
	const { toCapitalize } = useHelpers()

	return (
		<>
			<PageHeader title="Usuarios">
				{/* {user.role === 'doctor' && <NewPatient />} */}
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
										href="#"
										className="btn btn-sm bg-primary border-primary text-white"
									>
										Editar
									</ButtonLink>
								</div>
							</td>
						</tr>
					))}
				</Table>

				<div className="h-20" />
			</section>

			{/* <pre>{JSON.stringify(list, null, 2)}</pre> */}
		</>
	)
}

export default UsersPage

import type { Metadata } from 'next'
import { api } from '@/config'
import { useFetchList, useHelpers } from '@/hooks'
import { PageHeader, Breadcrumbs } from '@/components'
import { ButtonLink, Table } from '@/components'

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

	const list = await useFetchList(url)
	const { toCapitalize } = useHelpers()

	return (
		<>
			<PageHeader title="Doctores">
				{/* {user.role === 'doctor' && <NewPatient />} */}
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

							<td className="text-slate-500 text-sm capitalize">
								{toCapitalize(item.center.name)}
							</td>

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

			{/* <pre>{JSON.stringify(session, null, 2)}</pre> */}
			{/* <pre>{JSON.stringify(list, null, 2)}</pre> */}
		</>
	)
}

export default DoctorsPage

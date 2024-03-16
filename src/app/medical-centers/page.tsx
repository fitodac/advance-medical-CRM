import type { Metadata } from 'next'
import { api } from '@/config'
import { useFetchList, useGetSession, useHelpers } from '@/hooks'
import { PageHeader, Breadcrumbs } from '@/components'
import { ButtonLink, Table } from '@/components'

export const metadata: Metadata = {
	title: `${process.env.APP_NAME} • Centros médicos`,
}

const thead = [
	{ title: '#' },
	{ title: 'Código' },
	{ title: 'Nombre' },
	{ title: 'Acciones', class: 'text-end' },
]

const MedicalCentersPage = async ({
	searchParams,
}: {
	searchParams: { page: string }
}) => {
	if (!api.centers) return <></>

	const url = searchParams.page
		? `${api.centers}?page=${searchParams.page}`
		: api.centers

	const list = await useFetchList(url)
	const { toCapitalize } = useHelpers()

	return (
		<>
			<PageHeader title="Centros médicos">
				{/* {user.role === 'doctor' && <NewPatient />} */}
			</PageHeader>

			<Breadcrumbs
				data={[{ title: 'Lista de centros médicos', current: true }]}
			/>

			<section className="w-full overflow-x-hidden pt-5">
				<Table header={thead}>
					{list.data.data.map((item: any) => (
						<tr key={item.code}>
							<td>
								<span className="text-slate-300 text-xs">{item.id}</span>
							</td>

							<td>
								<div className="text-slate-600">{item.code}</div>
							</td>

							<td className="">
								<div className="text-slate-600 font-semibold leading-tight">
									{item.name}
								</div>
								<div className="text-slate-400 text-xs font-light">
									creado el {item.date}
								</div>
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

			<pre>{JSON.stringify(list.data.data, null, 2)}</pre>
		</>
	)
}

export default MedicalCentersPage

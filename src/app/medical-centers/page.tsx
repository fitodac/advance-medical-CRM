import type { Metadata } from 'next'
import { api } from '@/config'
import { useFetchList, useGetSession } from '@/hooks'
import {
	PageHeader,
	Breadcrumbs,
	Table,
	Pagination,
	ButtonLink,
} from '@/components'
import type { Pager } from 'types'
import type { User } from 'next-auth'
import { NewCenter } from './(components)'
import type { MedicalCenter } from './types'

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
	const session = await useGetSession()
	if (!session) return <></>

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
			<PageHeader title="Centros médicos">
				{user.role && ['superadmin', 'admin'].includes(user.role) && (
					<NewCenter />
				)}
			</PageHeader>

			<Breadcrumbs
				data={[{ title: 'Lista de centros médicos', current: true }]}
			/>

			<section className="w-full overflow-x-hidden pt-5">
				<Table header={thead}>
					{list.data.data.map((item: MedicalCenter) => (
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
										href={`/medical-centers/edit/${item.id}`}
										className="btn btn-sm bg-primary border-primary text-white"
									>
										Editar
									</ButtonLink>
								</div>
							</td>
						</tr>
					))}
				</Table>

				<Pagination pager={pager} />
			</section>

			<div className="h-20" />
			<pre>{JSON.stringify(list.data.data, null, 2)}</pre>
		</>
	)
}

export default MedicalCentersPage

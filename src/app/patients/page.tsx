import type { Metadata } from 'next'
import { api } from '@/config'
import { useFetchList, useGetSession } from '@/hooks'
import { List, NewPatient } from './(components)'
import { PageHeader, Breadcrumbs } from '@/components'

export const metadata: Metadata = {
	title: `${process.env.APP_NAME} • Pacientes`,
}

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

	if (!session) return <></>

	const user = session.user

	return (
		<>
			<PageHeader title="Listado de pacientes">
				{user.role === 'doctor' && <NewPatient />}
			</PageHeader>

			<Breadcrumbs data={[{ title: 'Lista de pacientes', current: true }]} />

			{list && <List content={list.data} />}

			{/* <pre>{JSON.stringify(list, null, 2)}</pre> */}
			<div className="h-12" />
		</>
	)
}

export default PatientsPage

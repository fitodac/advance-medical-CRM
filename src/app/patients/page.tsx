import type { Metadata } from 'next'
import { api } from '@/config'
import { useFetchList, useGetSession } from '@/hooks'
import { List, NewPatient } from './(components)'
import { PageHeader, Breadcrumbs } from '@/components'

export const metadata: Metadata = {
	title: `${process.env.APP_NAME} • Pacientes`,
}

const PatientsPage = async () => {
	if (!api.patients) return <></>

	const list = await useFetchList(api.patients)

	const session = await useGetSession()
	if (!session) return <></>

	const user = session.user

	return (
		<>
			<PageHeader title="Listado de pacientes">
				{user.role === 'doctor' && <NewPatient />}
			</PageHeader>

			<Breadcrumbs data={[{ title: 'Lista de pacientes', current: true }]} />

			{list && <List data={list.data.data} />}

			{/* <pre>{JSON.stringify(session, null, 2)}</pre> */}
		</>
	)
}

export default PatientsPage

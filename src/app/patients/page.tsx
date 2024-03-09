import type { Metadata } from 'next'
import { api } from '@/config'
import { useFetchList } from '@/hooks'
import { Patients } from './(components)'

export const metadata: Metadata = {
	title: `${process.env.APP_NAME} • Pacientes`,
}

const PatientsPage = async () => {
	const list = await useFetchList(api.patients.get)

	return (
		<>
			{list && <Patients data={list.data.data} />}

			{/* <pre>{JSON.stringify(list, null, 2)}</pre> */}
		</>
	)
}

export default PatientsPage

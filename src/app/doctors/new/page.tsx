import type { Metadata } from 'next'
import { PageHeader, Breadcrumbs, FetchError } from '@/components'
import { Form } from '../(components)'
import { useGetMedicalCentersList, useGetSpecialtiesList } from '@/hooks'

export const metadata: Metadata = {
	title: `${process.env.APP_NAME} • Nuevo doctor`,
}

const NewDoctorPage = async () => {
	const specialties = await useGetSpecialtiesList()
	const medicalCenters = await useGetMedicalCentersList()

	if (!specialties.success) {
		return FetchError({
			validation: specialties.success,
			message: 'El servidor no puede devolver los datos de especialidades',
		})
	}

	if (!medicalCenters.success) {
		return FetchError({
			validation: medicalCenters.success,
			message: 'El servidor no puede devolver los datos de centros médicos',
		})
	}

	return (
		<>
			<PageHeader title="Nuevo doctor" />
			<Breadcrumbs
				data={[
					{ title: 'Lista de doctores', link: '/doctors' },
					{ title: 'Nuevo doctor', current: true },
				]}
			/>

			<Form
				specialties={specialties.data}
				medicalCenters={medicalCenters.data}
			/>
		</>
	)
}

export default NewDoctorPage

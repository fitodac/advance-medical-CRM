import type { Metadata } from 'next'
import { PageHeader, Breadcrumbs, FetchError } from '@/components'
import { Form } from '../../(components)'
import {
	useGetMedicalCentersList,
	useGetSpecialtiesList,
	useGetDoctor,
} from '@/hooks'

export const metadata: Metadata = {
	title: `${process.env.APP_NAME} • Doctor`,
}

const EditDoctorPage = async ({ params }: { params: { id: number } }) => {
	const doctor = await useGetDoctor(params.id)
	const specialties = await useGetSpecialtiesList()
	const medicalCenters = await useGetMedicalCentersList()

	if (!doctor.success) {
		return FetchError({
			validation: doctor.success,
			message: 'El servidor no puede devolver los datos de este doctor',
		})
	}

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
			<PageHeader title="Doctor" />
			<Breadcrumbs
				data={[
					{ title: 'Lista de doctores', link: '/doctors' },
					{ title: 'Doctor', current: true },
				]}
			/>

			<Form
				doctor={doctor.data}
				specialties={specialties.data}
				medicalCenters={medicalCenters.data}
			/>
		</>
	)
}

export default EditDoctorPage

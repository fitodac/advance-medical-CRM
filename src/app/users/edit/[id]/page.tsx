import type { Metadata } from 'next'
import { PageHeader, Breadcrumbs, FetchError } from '@/components'
import { Form } from '../../(components)'
import {
	useGetMedicalCentersList,
	useGetSpecialtiesList,
	useGetUser,
} from '@/hooks'

export const metadata: Metadata = {
	title: `${process.env.APP_NAME} • Usuario`,
}

const EditUserPage = async ({ params }: { params: { id: number } }) => {
	const user = await useGetUser(params.id)
	const specialties = await useGetSpecialtiesList()
	const medicalCenters = await useGetMedicalCentersList()

	if (!user.success) {
		return FetchError({
			validation: user.success,
			message: 'El servidor no puede devolver los datos del usuario',
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
			<PageHeader title="Usuario" />
			<Breadcrumbs
				data={[
					{ title: 'Lista de usuarios', link: '/users' },
					{ title: 'Usuario', current: true },
				]}
			/>

			<Form
				user={user.data}
				specialties={specialties.data}
				medicalCenters={medicalCenters.data}
			/>
		</>
	)
}

export default EditUserPage

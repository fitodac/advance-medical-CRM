import { Form } from './(components)'
import type { Metadata } from 'next'
import { useGetSession, useGetSpecialtiesList, useGetProfile } from '@/hooks'
import { PageHeader, Breadcrumbs, FetchError } from '@/components'

export const metadata: Metadata = {
	title: `${process.env.APP_NAME} • Mi cuenta`,
}

const ProfilePage = async () => {
	const session = await useGetSession()
	const specialties = await useGetSpecialtiesList()

	if (!session) {
		return FetchError({
			validation: session ? false : true,
			message: 'El servidor no puede devolver los datos de sesión',
		})
	}

	const profile = await useGetProfile(session?.user.id)

	if (!profile) {
		return FetchError({
			validation: profile,
			message: 'El servidor no puede devolver los datos de tu cuenta',
		})
	}

	return (
		<>
			<PageHeader title="Mi cuenta" />

			<Breadcrumbs data={[{ title: 'Mi cuenta', current: true }]} />
			<Form specialties={specialties.data} profile={profile.data} />
		</>
	)
}

export default ProfilePage

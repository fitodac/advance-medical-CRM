import { Form } from './(components)'
import type { Metadata } from 'next'
import { useGetSession, getSpecialties, getProfile } from '@/hooks'
import { PageHeader, Breadcrumbs } from '@/components'

export const metadata: Metadata = {
	title: `${process.env.APP_NAME} • Mi cuenta`,
}

const ProfilePage = async () => {
	const session = await useGetSession()
	const specialties = await getSpecialties()

	if (session) {
		const profile = await getProfile(session?.user.id)

		return (
			<>
				<PageHeader title="Mi cuenta" />

				<Breadcrumbs data={[{ title: 'Mi cuenta', current: true }]} />
				<Form specialties={specialties.data} profile={profile.data} />
			</>
		)
	} else {
		return <></>
	}
}

export default ProfilePage

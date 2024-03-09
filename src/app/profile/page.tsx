import { Profile } from './(components)'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: `${process.env.APP_NAME} • Mi cuenta`,
}

const ProfilePage = (): JSX.Element => {
	return (
		<div>
			<div>Mi cuenta</div>
			<Profile />
		</div>
	)
}

export default ProfilePage

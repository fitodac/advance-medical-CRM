import type { Metadata } from 'next'
import { api } from '@/config'
import { useFetchList } from '@/hooks'

export const metadata: Metadata = {
	title: `${process.env.APP_NAME} • Usuarios`,
}

const UsersPage = async () => {
	const list = await useFetchList(api.users.get)

	return (
		<div>
			<p>Users page</p>
			<pre>{JSON.stringify(list, null, 2)}</pre>
		</div>
	)
}

export default UsersPage

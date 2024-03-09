import type { Metadata } from 'next'
import { api } from '@/config'
import { useFetchList } from '@/hooks'

export const metadata: Metadata = {
	title: `${process.env.APP_NAME} • Doctores`,
}

const DoctorsPage = async () => {
	const list = await useFetchList(api.doctors.get)

	return (
		<div>
			<p>Doctors</p>

			<pre>{JSON.stringify(list, null, 2)}</pre>
		</div>
	)
}

export default DoctorsPage

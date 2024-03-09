import type { Metadata } from 'next'
import { api } from '@/config'
import { useFetchList } from '@/hooks'

export const metadata: Metadata = {
	title: `${process.env.APP_NAME} • Centros médicos`,
}

const MedicalCentersPage = async () => {
	const list = await useFetchList(api.centers.get)
	console.log(await 'LIST', list)

	return (
		<div>
			<div>Medical centers</div>

			<pre>{JSON.stringify(list, null, 2)}</pre>
		</div>
	)
}

export default MedicalCentersPage

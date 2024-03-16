import type { Metadata } from 'next'
import { PageHeader, Breadcrumbs } from '@/components'
import { Form } from '../../(components)'
import { useGetMedicalCenter } from '@/hooks'

export const metadata: Metadata = {
	title: `${process.env.APP_NAME} • Centro médico`,
}

const EditMedicalCenterPage = async ({
	params,
}: {
	params: { id: number }
}) => {
	const center = await useGetMedicalCenter(params.id)

	return (
		<>
			<PageHeader title="Centro médico" />
			<Breadcrumbs
				data={[
					{ title: 'Lista de centros médicos', link: '/medical-centers' },
					{ title: 'Centro médico', current: true },
				]}
			/>

			<Form center={center.data} />
		</>
	)
}

export default EditMedicalCenterPage

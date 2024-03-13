import { Form } from '../(components)'
import { PageHeader, Breadcrumbs } from '@/components'
import type { Metadata } from 'next'
import { useGetCRD } from '@/hooks'

export const metadata: Metadata = {
	title: `${process.env.APP_NAME} • CRD`,
}

const CrdPage = async ({ params }: { params: { patient_id: string } }) => {
	const form_data = await useGetCRD(params.patient_id)

	return (
		<div>
			<PageHeader title="CRD" />

			<Breadcrumbs
				data={[
					{ title: 'Lista de pacientes', link: '/patients' },
					{ title: 'CRD', current: true },
				]}
			/>

			{form_data && <Form retrievedData={form_data} />}

			{/* <pre>{JSON.stringify(form_data, null, 2)}</pre> */}
		</div>
	)
}

export default CrdPage

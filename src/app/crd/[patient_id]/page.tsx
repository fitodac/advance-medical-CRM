import { Form } from '../(components)'
import { PageHeader, Breadcrumbs } from '@/components'
import type { Metadata } from 'next'
import { useGetToken } from '@/hooks'

export const metadata: Metadata = {
	title: `${process.env.APP_NAME} • CRD`,
}

const CrdPage = async ({ params }: { params: { patient_id: string } }) => {
	const { sessionCookie } = await useGetToken()
	let form_data: {
		success: boolean
		data: { [key: string]: any }
		messages: ''
	} | null = null

	try {
		const fetchData = await fetch(
			`${process.env.NEXTAUTH_URL}/api/crd/${params.patient_id}`,
			{
				headers: {
					Cookie: sessionCookie,
				},
			}
		)
		const resp = await fetchData.json()
		if (resp.success) {
			form_data = resp
		}
	} catch (err) {
		console.log('Error', err)
	}

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
		</div>
	)
}

export default CrdPage

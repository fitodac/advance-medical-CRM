import type { Metadata } from 'next'
import { PageHeader, Breadcrumbs } from '@/components'
import { Form } from '../../(components)'

export const metadata: Metadata = {
	title: `${process.env.APP_NAME} • Doctor`,
}

const EditDoctorPage = () => {
	return (
		<>
			<PageHeader title="Doctor" />
			<Breadcrumbs
				data={[
					{ title: 'Lista de doctores', link: '/medical-centers' },
					{ title: 'Doctor', current: true },
				]}
			/>

			<Form />
		</>
	)
}

export default EditDoctorPage

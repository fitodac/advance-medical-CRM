import type { Metadata } from 'next'
import { PageHeader, Breadcrumbs } from '@/components'
import { Form } from '../(components)'

export const metadata: Metadata = {
	title: `${process.env.APP_NAME} • Nuevo doctor`,
}

const NewDoctorPage = () => {
	return (
		<>
			<PageHeader title="Nuevo doctor" />
			<Breadcrumbs
				data={[
					{ title: 'Lista de doctores', link: '/doctors' },
					{ title: 'Nuevo doctor', current: true },
				]}
			/>

			<Form />
		</>
	)
}

export default NewDoctorPage

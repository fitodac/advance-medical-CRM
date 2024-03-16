import type { Metadata } from 'next'
import { PageHeader, Breadcrumbs } from '@/components'
import { Form } from '../(components)'

export const metadata: Metadata = {
	title: `${process.env.APP_NAME} • Nuevo centros médico`,
}

const NewMedicalCenterPage = () => {
	return (
		<>
			<PageHeader title="Nuevo centro médico" />
			<Breadcrumbs
				data={[
					{ title: 'Lista de centros médicos', link: '/medical-centers' },
					{ title: 'Nuevo centro médico', current: true },
				]}
			/>

			<Form />
		</>
	)
}

export default NewMedicalCenterPage

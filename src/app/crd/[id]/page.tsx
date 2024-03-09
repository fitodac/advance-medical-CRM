import { Form } from '../(components)'
import { PageHeader, Breadcrumbs } from '@/components'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: `${process.env.APP_NAME} • CRD`,
}

const CrdPage = (): JSX.Element => {
	return (
		<div>
			<PageHeader title="CRD" />

			<Breadcrumbs
				data={[
					{ title: 'Lista de pacientes', link: '/patients' },
					{ title: 'CRD', current: true },
				]}
			/>

			<Form />
		</div>
	)
}

export default CrdPage

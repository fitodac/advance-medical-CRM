import type { Metadata } from 'next'
import { PageHeader, Breadcrumbs } from '@/components'
import { Form } from '../../(components)'
// import { useGetMedicalCenter } from '@/hooks'

export const metadata: Metadata = {
	title: `${process.env.APP_NAME} • Usuario`,
}

const EditUserPage = () => {
	return (
		<>
			<PageHeader title="Usuario" />
			<Breadcrumbs
				data={[
					{ title: 'Lista de usuarios', link: '/users' },
					{ title: 'Usuario', current: true },
				]}
			/>

			<Form />
		</>
	)
}

export default EditUserPage

import type { Metadata } from 'next'
import { PageHeader, Breadcrumbs } from '@/components'
import { Form } from '../(components)'
// import { useGetMedicalCenter } from '@/hooks'

export const metadata: Metadata = {
	title: `${process.env.APP_NAME} • Nuevo usuario`,
}

const NewUserPage = () => {
	return (
		<>
			<PageHeader title="Nuevo usuario" />
			<Breadcrumbs
				data={[
					{ title: 'Lista de usuarios', link: '/users' },
					{ title: 'Nuevo usuario', current: true },
				]}
			/>

			<Form />
		</>
	)
}

export default NewUserPage

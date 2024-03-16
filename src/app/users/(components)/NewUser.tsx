import { ButtonLink } from '@/components'

export const NewUser = () => {
	return <>
	<ButtonLink
				href="/users/new"
				className="bg-teal border-teal text-white"
			>
				Nuevo usuario
			</ButtonLink>
	</>
}

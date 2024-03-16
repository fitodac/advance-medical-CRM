import { ButtonLink } from '@/components'

export const NewDoctor = () => {
	return (
		<>
			<ButtonLink
				href="/doctors/new"
				className="bg-teal border-teal text-white"
			>
				Nuevo doctor
			</ButtonLink>
		</>
	)
}

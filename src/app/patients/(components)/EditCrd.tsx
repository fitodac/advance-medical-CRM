'use client'
import { useCrdStore } from '@/store'
import { ButtonLink } from '@/components'

export const EditCrd = ({ patient }: { patient: any }) => {
	const { setPatient } = useCrdStore()

	return (
		<>
			{/* <pre>{JSON.stringify(patient, null, 2)}</pre> */}
			<span
				onClick={() => {
					setPatient(patient)
				}}
			>
				<ButtonLink
					className="btn-sm bg-teal border-teal text-white"
					href={`/crd/${patient.id}`}
				>
					CRD
				</ButtonLink>
			</span>
		</>
	)
}

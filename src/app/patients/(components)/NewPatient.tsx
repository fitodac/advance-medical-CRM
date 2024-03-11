'use client'
import { Button } from '@/components'
import { useStore } from '@/store'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

export const NewPatient = () => {
	const { setLoading } = useStore()
	const router = useRouter()

	const createNewPatient = async () => {
		setLoading(true)

		const resp = await fetch('/api/patients', {
			method: 'post',
		})

		if (resp.ok) {
			const patient = await resp.json()
			// console.log(patient)
			toast.success(patient.message.message)
			router.push(`/crd/${patient.data.id}`)
			setTimeout(() => {
				setLoading(false)
			}, 500)
		}
	}

	return (
		<div className="relative top-1">
			<Button
				className="bg-teal border-teal text-white"
				onClick={createNewPatient}
			>
				Nuevo paciente
			</Button>
		</div>
	)
}

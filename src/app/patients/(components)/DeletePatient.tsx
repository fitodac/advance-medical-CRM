import { Button } from '@/components'
import { useStore } from '@/store'
import { toast } from 'react-toastify'

interface Props {
	id: number
}

export const DeletePatient = ({ id }: Props) => {
	const { setLoading } = useStore()

	const confirmDeletion = async () => {
		setLoading(true)

		const resp = await fetch(`/api/patients/${id}`, {
			method: 'delete',
		})

		if (resp.ok) {
			const patient = await resp.json()
			toast.success(patient.message.message)
			const checkbox = document.getElementById(`modal-${id}`)
			if (checkbox) checkbox.checked = false
			setLoading(false)

			console.log(patient)
		}
		// setLoading(true)
	}

	return (
		<>
			<label
				htmlFor={`modal-${id}`}
				className="btn btn-sm bg-pink-100 border-pink-100 text-red-300 hover:bg-red-700 hover:border-red-700 hover:text-white"
			>
				Borrar
			</label>

			<input type="checkbox" id={`modal-${id}`} className="hidden" />

			<div
				className="overlay"
				style={{ backgroundColor: 'rgba(255,255,255,.8)' }}
			>
				<div className="modal bg-red-100 w-96 space-y-3 px-4 py-6">
					<div className="text-center space-y-1 leading-none">
						<div className="text-red-700 text-lg font-bold">
							Estás por eliminar un paciente
						</div>
						<div className="text-red-700">
							¿Estás seguro? Por favor, confirmalo ya que esta acción no podrá
							deshacerse.
						</div>
					</div>

					<div className="flex justify-betwee gap-x-3 pt-3">
						<div className="flex-1">
							<Button
								className="bg-red-700 border-red-700 text-white w-full"
								onClick={confirmDeletion}
							>
								Lo quiero borrar
							</Button>
						</div>
						<div className="flex-1">
							<label
								htmlFor={`modal-${id}`}
								className="btn bg-white border-red-300 text-red-700 w-full"
							>
								Cancelar
							</label>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

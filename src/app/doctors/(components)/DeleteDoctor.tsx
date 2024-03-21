'use client'
import { Button } from '@/components'
import { useStore } from '@/store'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

interface Props {
	id: number
}

export const DeleteDoctor = ({ id }: Props) => {
	const { setLoading } = useStore()
	const router = useRouter()

	const confirmDeletion = async () => {
		setLoading(true)

		const resp = await fetch(`/api/doctors/${id}`, {
			method: 'delete',
		})

		if (resp.ok) {
			const resp_json = await resp.json()
			document
				.querySelectorAll<HTMLInputElement>('[type=checkbox]')
				.forEach((e) => (e.checked = false))
			router.refresh()

			setTimeout(() => {
				toast.success(resp_json.message)
				setLoading(false)
			}, 500)
		} else {
			setLoading(false)
		}
	}

	return (
		<>
			<label
				htmlFor={`modal-${id}`}
				className="btn btn-sm bg-pink-100 border-pink-100 text-pink-500 hover:bg-pink-700 hover:border-pink-700 hover:text-white"
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
							Estás por eliminar un médico
						</div>
						<div className="text-red-700">
							¿Estás seguro? Por favor, confírmalo, ya que esta acción no podrá
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

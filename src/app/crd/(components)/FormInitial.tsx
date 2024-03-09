'use client'
import { useCrdStore } from '@/store'
import { Button } from '@/components'
import { RequiredFieldsMessage } from '.'

export const FormInitial = () => {
	const { initial } = useCrdStore()

	return (
		<>
			<form>
				<div className="text-lg font-bold">Visita inicial</div>

				<div className="space-y-14 mt-8">
					<pre>{JSON.stringify(initial, null, 2)}</pre>

					<div className="bg-white w-full py-4 flex items-center gap-x-8 bottom-0 fixed z-20 shadow-2xl">
						<Button className="btn-lg text-base bg-primary border-primary text-white">
							Guardar
						</Button>
						<RequiredFieldsMessage />
					</div>
				</div>
			</form>
		</>
	)
}

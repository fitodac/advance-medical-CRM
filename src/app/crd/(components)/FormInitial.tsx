'use client'
import { useCrdStore } from '@/store'
import { Button } from '@/components'
import { RequiredFieldsMessage } from '.'
import { HeaderSection } from '.'
import { Date, CriteriosInclusion, CriteriosExclusion } from './(FormInitial)'

export const FormInitial = () => {
	const { initial } = useCrdStore()

	if (initial)
		return (
			<>
				<form>
					<div className="text-lg font-bold">Visita inicial</div>

					<div className="space-y-14 mt-8">
						<Date />

						<div className="space-y-5">
							<HeaderSection title="Criterios de inclusión y exclusión" />
							<CriteriosInclusion />
							<CriteriosExclusion />
						</div>

						<div>
							<HeaderSection title="Datos sociodemográficos" />
						</div>

						<div>
							<HeaderSection title="Ámbito asistencial" />
						</div>

						<div>
							<HeaderSection title="Tratamiento nutricional (si procede)" />
						</div>

						<div>
							<HeaderSection title="Actividad física - promoción" />
						</div>

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

	if (!initial)
		return (
			<>
				<div className="text-lg font-bold">Visita inicial</div>
				<div className="text-red-600 mt-10 space-x-2">
					<i className="ri-error-warning-fill ri-xl" />
					<span>
						Se ha producido un error al obtener los datos de este formulario
					</span>
				</div>
			</>
		)
}

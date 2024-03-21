'use client'
import type { FormEvent } from 'react'
import { useCrdStore } from '@/store'
import { Button, InputDate } from '@/components'
import { useSetValue, useVisit1Submit } from '../(hooks)'
import { RequiredFieldsMessage, HeaderSection } from '.'
import { toast } from 'react-toastify'
import { handleScroll } from '../(helpers)'
import {
	SituacionActualDelPaciente,
	ResultadoCribadoNutricional,
	ResultadoCribadoMuscular,
	Antropometria,
	ParametrosFuncionales,
	OtrasMedidasDeComposicionCorporal,
	ResultadoDeValidacionMuscular,
	PacienteHaSeguidoTratamientoNutricional,
	HaConseguidoElPacienteElObjetivoNutricional,
	ConsideraQuePacientePercibeMejoria,
	PacienteHaSeguidoActividadFisica,
} from './(FormVisit1)'

export const FormVisit1 = () => {
	const { visit1, visit1Errors, setVisit1Errors } = useCrdStore()
	const { setValue } = useSetValue('visit1')

	const { submit } = useVisit1Submit()

	/**
	 * Envía el formulario de VISITA 1
	 * @param e
	 * @returns
	 */
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (visit1) {
			if (visit1.date === '' || visit1.date.length < 10) {
				toast.error('La fecha es requerida')
				setVisit1Errors({ date: true })
				handleScroll('S7G2T9')
				return false
			}
		}

		const resp = await submit()

		if (!resp) {
			toast.error('Error al enviar el formulario')
		} else if (resp.success) {
			toast.success(resp.message)
		} else {
			toast.error(resp.error.message)
		}
	}

	/**
	 * Render:
	 */
	if (visit1)
		return (
			<>
				<form onSubmit={handleSubmit} className="pl-1">
					<div id="S7G2T9" className="text-lg font-bold">
						Visita Seguimiento 1
						{visit1.id && (
							<span className="text-xs font-medium text-gray-300 pl-2">
								#{visit1.id}
							</span>
						)}
					</div>

					<div className="space-y-10 mt-8">
						<div className="space-y-2">
							<label className="select-none leading-tight block">
								Fecha de la visita (día/mes/año) (≈3 meses de la visita basal)
							</label>

							<div className="max-w-[150px]">
								<InputDate
									name="date"
									value={visit1.date}
									onChange={setValue}
									className={visit1Errors.date ? 'input-error' : ''}
									onKeyUp={() => {
										setVisit1Errors({ date: false })
									}}
								/>
							</div>

							{visit1Errors.date && (
								<div className="text-pink-500 text-sm leading-tight mt-1">
									Complete la fecha de la visita
								</div>
							)}

							<div className="text-gray-500 text-sm pt-8 space-y-4">
								<p>
									La visita de seguimiento se realizará en todos los pacientes
									cribados, tanto los diagnosticados de desnutrición en la
									visita basal como los que no presentaron riesgo de
									desnutrición en visita basal.
								</p>

								<p className="italic">
									En aquellos pacientes que en visita basal no presentaran
									riesgo o presencia de desnutrición, se plantea realizar
									llamada de seguimiento realizado cribado en remoto con
									herramienta R-MAPP (acceso a través de
									<a
										href="https://rmappnutrition.com/es"
										target="_blank"
										rel="noreferrer"
									>
										https://rmappnutrition.com/es
									</a>
									) y la automedición de circunferencia de pantorrilla por parte
									del propio paciente, en línea con uno de los objetivos del
									proyecto. Si sale en riesgo, se activarán las líneas
									habituales de valoración de cada centro (directamente citar en
									consultas, remitir desde atención primaria, etc.)
								</p>
							</div>
						</div>

						<SituacionActualDelPaciente />
						<ResultadoCribadoNutricional />
						<ResultadoCribadoMuscular />

						<div className="">
							<HeaderSection title="Valoración del estado nutricional" />
							<div className="space-y-12 mt-6">
								<Antropometria />
								<ParametrosFuncionales />
								<OtrasMedidasDeComposicionCorporal />
							</div>
						</div>

						<ResultadoDeValidacionMuscular />

						<div className="space-y-4">
							<HeaderSection title="Tratamiento nutricional" />
							<div className="space-y-12 mt-6">
								<PacienteHaSeguidoTratamientoNutricional />
								<HaConseguidoElPacienteElObjetivoNutricional />
								<ConsideraQuePacientePercibeMejoria />
								<PacienteHaSeguidoActividadFisica />
							</div>
						</div>

						<div className="bg-white w-full py-4 -ml-1 flex items-center gap-x-8 bottom-0 fixed z-20 shadow-2xl">
							<Button className="btn-lg text-base bg-primary border-primary text-white">
								Guardar
							</Button>
							<RequiredFieldsMessage />
						</div>
					</div>
				</form>

				<div className="h-8" />

				{/* <div className="bg-black/70 text-white text-xs leading-relaxed w-1/3 p-6 right-0 inset-y-0 fixed overflow-y-auto z-40">
					<pre className="">{JSON.stringify(visit1, null, 2)}</pre>
				</div> */}
			</>
		)

	if (!visit1)
		return (
			<>
				<div className="text-lg font-bold">Visita Seguimiento 1</div>
				<div className="text-red-600 mt-10 space-x-2">
					<i className="ri-error-warning-fill ri-xl" />
					<span>
						Se ha producido un error al obtener los datos de este formulario
					</span>
				</div>
			</>
		)
}

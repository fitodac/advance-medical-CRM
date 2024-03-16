'use client'
import type { FormEvent } from 'react'
import { useCrdStore } from '@/store'
import { Button } from '@/components'
import { useVisitInitialSubmit } from '../(hooks)'
import { RequiredFieldsMessage, HeaderSection } from '.'
import { toast } from 'react-toastify'
import { handleScroll } from '../(helpers)'
import {
	Date,
	CriteriosInclusion,
	CriteriosExclusion,
	DatosSociodemograficos,
	AntecedentesMedicos,
	FechaValoracion,
	Antropometria,
	CribadoNutricional,
	ResultadoCribadoNutricional,
	CribadoMuscular,
	ResultadoCribadoMuscular,
	DiagnosticoNutricionalUtilizado,
	ResultadoValoracionNutricional,
	Sarcopenia,
	ParametrosFuncionales,
	OtrasMedidasDeComposicionCorporal,
	Dexa,
	Tc,
	EcografiaNutricional,
	EcografiaAbdominal,
	EcografiaMuscular,
	ResultadoValoracionMuscular,
	ObjetivosPlanteados,
	IniciaTratamientoNutricional,
	TipoDeTratamientoNutricionalIndicado,
	RefiereEndocrinologiaParaIniciarTratamientoNutricional,
	ActividadFisicaPrescripta,
	TiposDeEjercicios,
} from './(FormInitial)'

export const FormInitial = () => {
	const { initial, setInitialErrors } = useCrdStore()
	const { submit } = useVisitInitialSubmit()

	/**
	 * Envía el formulario de la primer visita
	 * @param e
	 * @returns
	 */
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (initial.date === '' || initial.date.length < 10) {
			toast.error('La fecha es requerida')
			setInitialErrors({ date: true })
			handleScroll('R4E5T2')
			return false
		}

		if (initial.birth_date === '' || initial.birth_date.length < 10) {
			toast.error('La fecha de nacimiento es requerida')
			setInitialErrors({ birth_date: true })
			handleScroll('M1N2O3')
			return false
		}

		const resp = await submit()

		if (!resp) {
			toast.error('Error al enviar el formulario')
		} else if (resp.success) {
			toast.success(resp.message.message)
		} else {
			toast.error(resp.error.message)
		}
	}

	/**
	 * Render:
	 */
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

	return (
		<>
			<form onSubmit={handleSubmit} className="pl-1">
				<div className="text-lg font-bold">
					Visita inicial
					{initial.id && (
						<span className="text-xs font-medium text-gray-300 pl-2">
							#{initial.id}
						</span>
					)}
				</div>

				<div className="space-y-14 mt-8">
					<Date />

					<div className="space-y-5">
						<HeaderSection title="Criterios de inclusión y exclusión" />

						<div className="space-y-8">
							<CriteriosInclusion />
							<CriteriosExclusion />
						</div>
					</div>

					<div className="space-y-5">
						<HeaderSection title="Datos sociodemográficos" />
						<div className="space-y-8">
							<DatosSociodemograficos />
							<AntecedentesMedicos />
						</div>
					</div>

					<div className="space-y-5">
						<HeaderSection title="Ámbito asistencial" />
						<div className="space-y-8">
							<FechaValoracion />
							<Antropometria />
							<CribadoNutricional />
							<ResultadoCribadoNutricional />
							<CribadoMuscular />
							<ResultadoCribadoMuscular />
							<DiagnosticoNutricionalUtilizado />
							<ResultadoValoracionNutricional />
							<Sarcopenia />
							<ParametrosFuncionales />
							<OtrasMedidasDeComposicionCorporal />
							<Dexa />
							<Tc />
							<EcografiaNutricional />
							<EcografiaAbdominal />
							<EcografiaMuscular />
							<ResultadoValoracionMuscular />
						</div>
					</div>

					<div className="space-y-5">
						<HeaderSection title="Tratamiento nutricional (si procede)" />
						<div className="space-y-8">
							<ObjetivosPlanteados />
							<IniciaTratamientoNutricional />
							<TipoDeTratamientoNutricionalIndicado />
							<RefiereEndocrinologiaParaIniciarTratamientoNutricional />
						</div>
					</div>

					<div className="space-y-5">
						<HeaderSection title="Actividad física - promoción" />
						<div className="space-y-8">
							<ActividadFisicaPrescripta />
							<TiposDeEjercicios />
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

			<div className="bg-black/70 text-white text-xs leading-relaxed w-1/3 p-6 right-0 inset-y-0 fixed overflow-y-auto z-40">
				<pre className="">{JSON.stringify(initial, null, 2)}</pre>
			</div>
		</>
	)
}

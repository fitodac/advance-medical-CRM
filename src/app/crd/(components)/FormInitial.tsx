'use client'
import { useCrdStore } from '@/store'
import { Button } from '@/components'
import { RequiredFieldsMessage } from '.'
import { HeaderSection } from '.'
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

						<div className="bg-white w-full py-4 flex items-center gap-x-8 bottom-0 fixed z-20 shadow-2xl">
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

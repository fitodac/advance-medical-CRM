import { useCrdStore } from '@/store'
import { FormGroup } from '..'
import { useCheckboxHandleChange, useInputHandleChange } from '../../(hooks)'

export const ResultadoValoracionNutricional = () => {
	const { initial } = useCrdStore()
	const { handleChange } = useCheckboxHandleChange('initial')
	const { handleInputChange } = useInputHandleChange('initial')

	if (!initial) return <></>

	return (
		<>
			<FormGroup
				id="Z0A1B2"
				title="Resultado de la valoración nutricional"
				subtitle="¿Está el paciente desnutrido?"
				required
			>
				<section className="grid gap-y-3">
					<label className="input-checkbox">
						<input
							type="radio"
							name="patient_malnourished"
							value="no"
							checked={initial.patient_malnourished === 'no'}
							onChange={handleChange}
						/>
						<span>No</span>
					</label>

					<label className="input-checkbox">
						<input
							type="radio"
							name="patient_malnourished"
							value="en riesgo"
							checked={initial.patient_malnourished === 'en riesgo'}
							onChange={handleChange}
						/>
						<span>En riesgo</span>
					</label>

					<div className="flex gap-6 items-start">
						<div className="w-40">
							<label className="input-checkbox">
								<input
									type="radio"
									name="patient_malnourished"
									value="si"
									checked={initial.patient_malnourished === 'si'}
									onChange={handleChange}
								/>
								<span>Sí, especifique</span>
							</label>
						</div>

						{initial.patient_malnourished === 'si' && (
							<div className="w-full grid grid-cols-2 gap-x-5 relative -top-2">
								<div className="">
									<label>Diagnóstico</label>
									<select
										name="patient_malnourished__diagnosis"
										value={initial.patient_malnourished__diagnosis ?? ''}
										onChange={handleInputChange}
									>
										<option value=""></option>
										<option value="E46 Riesgo nutricional (cribado positivo o solo un criterio GLIM que no permite diagnóstico)">
											E46 Riesgo nutricional (cribado positivo o solo un
											criterio GLIM que no permite diagnóstico)
										</option>
										<option value="E44.0 DRE moderada">
											E44.0 DRE moderada
										</option>
										<option value="E43 DRE grave">E43 DRE grave</option>
									</select>
								</div>

								<div className="">
									<label>Procedimiento</label>
									<select
										name="patient_malnourished__procedure"
										value={initial.patient_malnourished__procedure ?? ''}
										onChange={handleInputChange}
									>
										<option value=""></option>
										<option value="3E0436Z Nutrición parenteral por vía central">
											3E0436Z Nutrición parenteral por vía central
										</option>
										<option value="3E0336Z Nutrición parenteral por vía periférica">
											3E0336Z Nutrición parenteral por vía periférica
										</option>
										<option value="3E0G76Z Suplementos orales / nutrición enteral oral">
											3E0G76Z Suplementos orales / nutrición enteral oral
										</option>
										<option value="3E0H76Z Nutrición enteral por SNY">
											3E0H76Z Nutrición enteral por SNY
										</option>
										<option value="3E0G36Z Nutrición enteral por SNG / gastrostomía">
											3E0G36Z Nutrición enteral por SNG / gastrostomía
										</option>
										<option value="3E0H36Z Nutrición enteral por SNY/yeyunostomía">
											3E0H36Z Nutrición enteral por SNY/yeyunostomía
										</option>
									</select>
								</div>
							</div>
						)}
					</div>
				</section>
			</FormGroup>
		</>
	)
}

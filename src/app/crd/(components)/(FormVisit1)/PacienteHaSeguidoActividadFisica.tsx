import { useCrdStore } from '@/store'
import { FormGroup } from '..'
import { useCheckboxHandleChange } from '../../(hooks)'

export const PacienteHaSeguidoActividadFisica = () => {
	const { visit1 } = useCrdStore()

	const { handleChange } = useCheckboxHandleChange('visit1')

	if (!visit1) return <></>

	return (
		<>
			<FormGroup
				id="E9F0G1"
				title="¿El paciente ha seguido la recomendación de actividad física prescrita?"
			>
				<div className="space-y-2">
					<div className="flex gap-6 items-start">
						<label className="input-checkbox">
							<input
								type="radio"
								value="y"
								name="hfppar_followed_prescribed_physical_activity_recommendation"
								checked={
									visit1.hfppar_followed_prescribed_physical_activity_recommendation ===
									'y'
								}
								onChange={handleChange}
							/>
							<span>Sí</span>
						</label>

						<label className="input-checkbox">
							<input
								type="radio"
								value="n"
								name="hfppar_followed_prescribed_physical_activity_recommendation"
								checked={
									visit1.hfppar_followed_prescribed_physical_activity_recommendation ===
									'n'
								}
								onChange={handleChange}
							/>
							<span>No (especifique motivo/s)</span>
						</label>
					</div>

					<div className="">
						{visit1.hfppar_followed_prescribed_physical_activity_recommendation ===
							'y' && (
							<>
								<label>Especifique % de adherencia a las recomendaciones</label>
								<input
									type="text"
									value={
										visit1.hfppar_percentage_of_adherece_to_recommendations
									}
								/>
							</>
						)}
						{visit1.hfppar_followed_prescribed_physical_activity_recommendation ===
							'n' && (
							<>
								<div className="h-3"></div>
								<input
									type="text"
									value={visit1.hfppar__not_followed_prescribed_recommendation}
								/>
							</>
						)}
					</div>
				</div>
			</FormGroup>
		</>
	)
}

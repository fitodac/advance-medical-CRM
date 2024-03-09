import { useCrdStore } from '@/store'
import { FormGroup } from '..'
import { useCheckboxHandleChange } from '../../(hooks)'
import { InputDate } from '@/components'

export const PacienteHaSeguidoTratamientoNutricional = () => {
	const { visit1 } = useCrdStore()

	const { handleChange } = useCheckboxHandleChange()

	return (
		<>
			<FormGroup
				id="H2I3J4"
				title="¿El paciente ha seguido la recomendación nutricional prescrita?"
			>
				<div className="space-y-2">
					<div className="flex gap-6 items-start">
						<label className="input-checkbox">
							<input
								type="radio"
								value="y"
								name="hfnr__followed_prescribed_nutritional_recommendation"
								checked={
									visit1.hfnr__followed_prescribed_nutritional_recommendation ===
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
								name="hfnr__followed_prescribed_nutritional_recommendation"
								checked={
									visit1.hfnr__followed_prescribed_nutritional_recommendation ===
									'n'
								}
								onChange={handleChange}
							/>
							<span>No (especifique motivo/s)</span>
						</label>
					</div>

					<div className="">
						{visit1.hfnr__followed_prescribed_nutritional_recommendation ===
							'y' && (
							<>
								<label>Especifique % de adherencia a las recomendaciones</label>
								<input
									type="text"
									value={visit1.hfnr__percentage_of_adherece_to_recommendations}
								/>
							</>
						)}
						{visit1.hfnr__followed_prescribed_nutritional_recommendation ===
							'n' && (
							<>
								<div className="h-3"></div>
								<input
									type="text"
									value={visit1.hfnr__not_followed_prescribed_recommendation}
								/>
							</>
						)}
					</div>
				</div>
			</FormGroup>
		</>
	)
}

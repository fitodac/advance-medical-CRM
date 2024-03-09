import { useCrdStore } from '@/store'
import { FormGroup } from '..'
import { useCheckboxHandleChange } from '../../(hooks)'
import { InputDate } from '@/components'

export const HaConseguidoElPacienteElObjetivoNutricional = () => {
	const { visit1 } = useCrdStore()

	const { handleChange } = useCheckboxHandleChange()

	return (
		<>
			<FormGroup
				id="S7T8U9"
				title="¿Ha conseguido el paciente el objetivo nutricional planteado en la visita basal?"
			>
				<div className="space-y-2">
					<div className="flex gap-6 items-start">
						<label className="input-checkbox">
							<input
								type="radio"
								value="y"
								name="rng__has_reached_nutritional_goal"
								checked={
									visit1.rng__has_reached_nutritional_goal ===
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
								name="rng__has_reached_nutritional_goal"
								checked={
									visit1.rng__has_reached_nutritional_goal ===
									'n'
								}
								onChange={handleChange}
							/>
							<span>No (especifique motivo/s)</span>
						</label>
					</div>

					<div className="">
						
						{visit1.rng__has_reached_nutritional_goal ===
							'n' && (
							<>
								<div className="h-3"></div>
								<input
									type="text"
									value={visit1.rng__has_reached_nutritional_goal_reasons}
								/>
							</>
						)}
					</div>
				</div>
			</FormGroup>
		</>
	)
}

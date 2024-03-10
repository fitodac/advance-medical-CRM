import { useCrdStore } from '@/store'
import { FormGroup } from '..'
import { useCheckboxHandleChange } from '../../(hooks)'

export const ConsideraQuePacientePercibeMejoria = () => {
	const { visit1 } = useCrdStore()

	const { handleChange } = useCheckboxHandleChange('visit1')

	if (!visit1) return <></>

	return (
		<>
			<FormGroup
				id="X6Y7Z8"
				title="¿Tras la entrevista con el paciente, considera usted que el paciente percibe algún tipo de mejoría asociado al tratamiento nutricional indicado?"
			>
				<div className="space-y-2">
					<div className="flex gap-6 items-start">
						<label className="input-checkbox">
							<input
								type="radio"
								value="y"
								name="cppi__considers_that_patient_perceives_improvement"
								checked={
									visit1.cppi__considers_that_patient_perceives_improvement ===
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
								name="cppi__considers_that_patient_perceives_improvement"
								checked={
									visit1.cppi__considers_that_patient_perceives_improvement ===
									'n'
								}
								onChange={handleChange}
							/>
							<span>No (especifique motivo/s)</span>
						</label>
					</div>

					<div className="">
						{visit1.cppi__considers_that_patient_perceives_improvement ===
							'n' && (
							<>
								<div className="h-3"></div>
								<input
									type="text"
									value={
										visit1.cppi__considers_that_patient_perceives_improvement_reasons
									}
								/>
							</>
						)}
					</div>
				</div>
			</FormGroup>
		</>
	)
}

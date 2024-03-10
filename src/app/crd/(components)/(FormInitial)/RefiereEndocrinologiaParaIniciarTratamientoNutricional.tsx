import { useCrdStore } from '@/store'
import { FormGroup } from '..'
import { useCheckboxHandleChange } from '../../(hooks)'

export const RefiereEndocrinologiaParaIniciarTratamientoNutricional = () => {
	const { initial } = useCrdStore()

	const { handleChange } = useCheckboxHandleChange('initial')

	if (!initial) return <></>

	return (
		<>
			<FormGroup
				id="N8O9P0"
				title="Refiere al Servicio de Endocrinología y Nutrición para iniciar tratamiento nutricional"
			>
				<div className="flex gap-x-8">
					<div className="w-full grid gap-y-3">
						<label className="input-checkbox">
							<input
								type="radio"
								value="y"
								name="refers_patient_to_begin_nutritional_treatment"
								checked={
									initial.refers_patient_to_begin_nutritional_treatment === 'y'
								}
								onChange={handleChange}
							/>
							<span>Sí</span>
						</label>

						<label className="input-checkbox">
							<input
								type="radio"
								value="n"
								name="refers_patient_to_begin_nutritional_treatment"
								checked={
									initial.refers_patient_to_begin_nutritional_treatment === 'n'
								}
								onChange={handleChange}
							/>
							<span>No (yo gestiono el tratamiento del paciente)</span>
						</label>
					</div>
				</div>
			</FormGroup>
		</>
	)
}

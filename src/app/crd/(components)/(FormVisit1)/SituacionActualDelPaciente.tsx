import { useCrdStore } from '@/store'
import { FormGroup } from '..'
import { useSetValue, useCheckboxHandleChange } from '../../(hooks)'
import { InputDate } from '@/components'

export const SituacionActualDelPaciente = () => {
	const { visit1 } = useCrdStore()

	const { handleChange } = useCheckboxHandleChange('visit1')
	const { setValue } = useSetValue('visit1')

	if (!visit1) return <></>

	return (
		<>
			<FormGroup id="C3D4E5" title="Situación actual del paciente">
				<div className="flex gap-x-8">
					<div className="grid gap-y-3">
						<label className="input-checkbox">
							<input
								type="checkbox"
								value="Alta"
								name="patient_current_situation"
								checked={visit1.patient_current_situation === 'Alta'}
								onChange={handleChange}
							/>
							<span>Alta</span>
						</label>

						<label className="input-checkbox">
							<input
								type="checkbox"
								value="Reingreso"
								name="patient_current_situation"
								checked={visit1.patient_current_situation === 'Reingreso'}
								onChange={handleChange}
							/>
							<span>Reingreso</span>
						</label>

						<label className="input-checkbox">
							<input
								type="checkbox"
								value="Seguimiento telefónico"
								name="patient_current_situation"
								checked={
									visit1.patient_current_situation === 'Seguimiento telefónico'
								}
								onChange={handleChange}
							/>
							<span>Seguimiento telefónico</span>
						</label>

						<label className="input-checkbox">
							<input
								type="checkbox"
								value="Deceso"
								name="patient_current_situation"
								checked={visit1.patient_current_situation === 'Deceso'}
								onChange={handleChange}
							/>
							<span>Deceso</span>
						</label>

						<label className="input-checkbox">
							<input
								type="checkbox"
								value="No acude a control"
								name="patient_current_situation"
								checked={
									visit1.patient_current_situation === 'No acude a control'
								}
								onChange={handleChange}
							/>
							<span>No acude a control</span>
						</label>
					</div>

					<div className="flex-1">
						{(visit1.patient_current_situation === 'Alta' ||
							visit1.patient_current_situation === 'Reingreso' ||
							visit1.patient_current_situation === 'Deceso') && (
							<div className="max-w-[150px] space-y-2">
								<label className="select-none leading-tight block">Fecha</label>
								<InputDate
									name="patient_current_situation_date"
									value={visit1.patient_current_situation_date}
									onChange={setValue}
								/>
							</div>
						)}
					</div>
				</div>
			</FormGroup>
		</>
	)
}

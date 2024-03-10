import { useCrdStore } from '@/store'
import { FormGroup } from '..'
import { useCheckboxHandleChange } from '../../(hooks)'

export const Sarcopenia = () => {
	const { initial } = useCrdStore()
	const { handleChange } = useCheckboxHandleChange('initial')

	if (!initial) return <></>

	return (
		<>
			<FormGroup id="YXA2C3" subtitle="¿Tiene el paciente sarcopenia?">
				<section className="grid gap-y-3">
					<label className="input-checkbox">
						<input
							type="radio"
							name="does_the_patient_have_sarcopenia"
							value="no"
							checked={initial.does_the_patient_have_sarcopenia === 'no'}
							onChange={handleChange}
						/>
						<span>No</span>
					</label>

					<label className="input-checkbox">
						<input
							type="radio"
							name="does_the_patient_have_sarcopenia"
							value="en riesgo"
							checked={initial.does_the_patient_have_sarcopenia === 'en riesgo'}
							onChange={handleChange}
						/>
						<span>En riesgo</span>
					</label>

					<div className="flex gap-6 items-start">
						<div className="w-40">
							<label className="input-checkbox">
								<input
									type="radio"
									name="does_the_patient_have_sarcopenia"
									value="si"
									checked={initial.does_the_patient_have_sarcopenia === 'si'}
									onChange={handleChange}
								/>
								<span>Sí, especifique</span>
							</label>
						</div>

						{initial.does_the_patient_have_sarcopenia === 'si' && (
							<div className="w-full grid grid-cols-2 gap-x-5 relative -top-1">
								<div className="">
									<label>Diagnóstico</label>
									<select name="sarcopenia__diagnosis">
										<option value=""></option>
										<option value="M62.84 Sarcopenia">M62.84 Sarcopenia</option>
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

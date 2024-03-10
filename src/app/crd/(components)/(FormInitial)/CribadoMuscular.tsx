import { useCrdStore } from '@/store'
import { FormGroup } from '..'
import { useCheckboxHandleChange, useInputHandleChange } from '../../(hooks)'

export const CribadoMuscular = () => {
	const { initial } = useCrdStore()
	const { handleChange } = useCheckboxHandleChange('initial')
	const { handleInputChange } = useInputHandleChange('initial')

	if (!initial) return <></>

	return (
		<>
			<FormGroup id="A9B0C1" title="Cribado muscular" required>
				<section className="grid gap-y-3">
					<label className="input-checkbox">
						<input
							type="checkbox"
							name="ms__sarc_f"
							value="y"
							checked={initial.ms__sarc_f === 'y'}
							onChange={handleChange}
						/>
						<span>SARC-F</span>
					</label>

					<div className="flex gap-x-6 items-start">
						<label className="input-checkbox">
							<input
								type="checkbox"
								name="ms__other"
								value="y"
								checked={initial.ms__other === 'y'}
								onChange={handleChange}
							/>
							<span>Otros (especifique)</span>
						</label>

						{initial.ms__other === 'y' && (
							<div className="flex-1 relative -top-2">
								<input
									type="text"
									name="ms__other_description"
									value={initial.ms__other_description}
									onChange={handleInputChange}
								/>
							</div>
						)}
					</div>
				</section>
			</FormGroup>
		</>
	)
}

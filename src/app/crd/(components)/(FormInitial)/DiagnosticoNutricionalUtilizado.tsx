import { useCrdStore } from '@/store'
import { FormGroup } from '..'
import { useCheckboxHandleChange, useInputHandleChange } from '../../(hooks)'

export const DiagnosticoNutricionalUtilizado = () => {
	const { initial } = useCrdStore()
	const { handleChange } = useCheckboxHandleChange('initial')
	const { handleInputChange } = useInputHandleChange('initial')

	if (!initial) return <></>

	return (
		<>
			<FormGroup id="J8K9L0" title="Diagnóstico nutricional utilizado" required>
				<section className="grid gap-y-3">
					<label className="input-checkbox">
						<input
							type="checkbox"
							name="nd__glim"
							value="y"
							checked={initial.nd__glim === 'y'}
							onChange={handleChange}
						/>
						<span>GLIM</span>
					</label>

					<label className="input-checkbox">
						<input
							type="checkbox"
							name="nd__mna"
							value="y"
							checked={initial.nd__mna === 'y'}
							onChange={handleChange}
						/>
						<span>MNA</span>
					</label>

					<label className="input-checkbox">
						<input
							type="checkbox"
							name="nd__vgs"
							value="y"
							checked={initial.nd__vgs === 'y'}
							onChange={handleChange}
						/>
						<span>VGS</span>
					</label>

					<div className="flex gap-6 items-start">
						<label className="input-checkbox">
							<input
								type="checkbox"
								name="nd__other"
								value="y"
								checked={initial.nd__other === 'y'}
								onChange={handleChange}
							/>
							<span>Otros (especifique)</span>
						</label>

						{initial.nd__other === 'y' && (
							<div className="flex-1 relative -top-2">
								<input
									type="text"
									name="nd__other_description"
									value={initial.nd__other_description}
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

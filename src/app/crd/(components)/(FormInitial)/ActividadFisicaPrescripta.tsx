import { useCrdStore } from '@/store'
import { FormGroup } from '..'
import { useCheckboxHandleChange, useInputHandleChange } from '../../(hooks)'

export const ActividadFisicaPrescripta = () => {
	const { initial } = useCrdStore()

	const { handleChange } = useCheckboxHandleChange('initial')
	const { handleInputChange } = useInputHandleChange('initial')

	if (!initial) return <></>

	return (
		<>
			<FormGroup
				id="R8S9T0"
				title="¿Ha prescrito actividad física al paciente?"
			>
				<section className="w-full grid gap-y-3">
					<label className="input-checkbox">
						<input
							type="radio"
							value="y"
							name="pa__prescribed"
							checked={initial.pa__prescribed === 'y'}
							onChange={handleChange}
						/>
						<span>Sí</span>
					</label>

					<div className="flex gap-6 items-start">
						<label className="input-checkbox">
							<input
								type="radio"
								value="n"
								name="pa__prescribed"
								checked={initial.pa__prescribed === 'n'}
								onChange={handleChange}
							/>
							<span>No, especifique motivo/s</span>
						</label>

						<div className="w-full relative -top-2 flex-1">
							{initial.pa__prescribed === 'n' && (
								<>
									<input
										type="text"
										name="pa__prescribed_reasons"
										value={initial.pa__prescribed_reasons}
										className="w-full"
										onChange={handleInputChange}
									/>
								</>
							)}
						</div>
					</div>
				</section>
			</FormGroup>
		</>
	)
}

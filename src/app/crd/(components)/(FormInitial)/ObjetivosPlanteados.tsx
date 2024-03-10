import { useCrdStore } from '@/store'
import { FormGroup } from '..'
import { useCheckboxHandleChange, useInputHandleChange } from '../../(hooks)'

export const ObjetivosPlanteados = () => {
	const { initial } = useCrdStore()

	const { handleChange } = useCheckboxHandleChange('initial')
	const { handleInputChange } = useInputHandleChange('initial')

	return (
		<>
			<FormGroup
				id="Y3Z4A5"
				title="Objetivo/s planteado/s"
				subtitle="(Puede indicarse más de uno si en su opinión aplica)"
			>
				{initial && (
					<div className="flex gap-x-8">
						<div className="w-full grid gap-y-3">
							<label className="input-checkbox">
								<input
									type="checkbox"
									value="y"
									name="nt__planted_objectives__weight_gain"
									checked={initial.nt__planted_objectives__weight_gain === 'y'}
									onChange={handleChange}
								/>
								<span>Ganancia ponderal</span>
							</label>

							<label className="input-checkbox">
								<input
									type="checkbox"
									value="y"
									name="nt__planted_objectives__muscle_gain"
									checked={initial.nt__planted_objectives__muscle_gain === 'y'}
									onChange={handleChange}
								/>
								<span>
									Ganancia muscular / fuerza / mejoría de la funcionalidad
								</span>
							</label>

							<label className="input-checkbox">
								<input
									type="checkbox"
									value="y"
									name="nt__planted_objectives__preservation_status"
									checked={
										initial.nt__planted_objectives__preservation_status === 'y'
									}
									onChange={handleChange}
								/>
								<span>Preservación del estado nutricional y/o muscular</span>
							</label>

							<div className="flex gap-x-6 items-start">
								<label className="input-checkbox">
									<input
										type="checkbox"
										value="y"
										name="nt__planted_objectives__other"
										checked={initial.nt__planted_objectives__other === 'y'}
										onChange={handleChange}
									/>
									<span>Otro (especifique)</span>
								</label>

								<div className="flex-1 relative -top-2">
									{initial.nt__planted_objectives__other === 'y' && (
										<>
											<input
												type="text"
												name="nt__planted_objectives__other_description"
												value={
													initial.nt__planted_objectives__other_description
												}
												className="w-full"
												onChange={handleInputChange}
											/>
										</>
									)}
								</div>
							</div>
						</div>
					</div>
				)}
			</FormGroup>
		</>
	)
}

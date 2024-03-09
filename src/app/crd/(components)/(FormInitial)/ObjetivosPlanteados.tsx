import { useCrdStore } from '@/store'
import { FormGroup } from '..'
import { useCheckboxHandleChange } from '../../(hooks)'

export const ObjetivosPlanteados = () => {
	const { visit1 } = useCrdStore()

	const { handleChange } = useCheckboxHandleChange()

	return (
		<>
			<FormGroup
				id="Y3Z4A5"
				title="Objetivo/s planteado/s"
				subtitle="(Puede indicarse más de uno si en su opinión aplica)"
			>
				<div className="flex gap-x-8">
					<div className="w-full grid gap-y-3">
						<label className="input-checkbox">
							<input
								type="checkbox"
								value="y"
								name="nt__planted_objectives__weight_gain"
								checked={visit1.nt__planted_objectives__weight_gain === 'y'}
								onChange={handleChange}
							/>
							<span>Ganancia ponderal</span>
						</label>

						<label className="input-checkbox">
							<input
								type="checkbox"
								value="y"
								name="nt__planted_objectives__muscle_gain"
								checked={visit1.nt__planted_objectives__muscle_gain === 'y'}
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
									visit1.nt__planted_objectives__preservation_status === 'y'
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
									checked={visit1.nt__planted_objectives__other === 'y'}
									onChange={handleChange}
								/>
								<span>Otro (especifique)</span>
							</label>

							<div className="flex-1 relative -top-2">
								{visit1.nt__planted_objectives__other === 'y' && (
									<>
										<input
											type="text"
											name="nt__planted_objectives__other_description"
											value={visit1.nt__planted_objectives__other_description}
											className="w-full"
										/>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			</FormGroup>
		</>
	)
}

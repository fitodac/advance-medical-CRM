import { useCrdStore } from '@/store'
import { FormGroup } from '..'
import { useCheckboxHandleChange } from '../../(hooks)'

export const ParametrosFuncionales = () => {
	const { initial } = useCrdStore()
	const { handleChange } = useCheckboxHandleChange('initial')

	if (!initial) return <></>

	return (
		<>
			<FormGroup
				id="K5L6M7"
				title="Parámetros funcionales"
				subtitle="(Detalle de los valores obtenidos)"
				required
			>
				<section className="space-y-4">
					<div className="space-y-1">
						<div className="grid grid-cols-9 gap-x-4">
							<div className="col-span-4 flex items-center">
								<label className="text-sm font-normal select-none">
									Dinamometría (valor máximo de 3 mediciones)
								</label>
							</div>
							<div className="col-span-1">
								<input
									type="text"
									name="dynamometry"
									value={initial.dynamometry}
									onChange={() => {}}
								/>
							</div>
							<div className="col-span-1 flex items-center">
								<label className="text-sm font-normal select-none">kg</label>
							</div>
						</div>

						<label className="input-checkbox">
							<input
								type="checkbox"
								name="dynamometry__not_possible"
								value="y"
								checked={initial.dynamometry__not_possible === 'y'}
								onChange={handleChange}
							/>
							<span>No es posible realizarlo</span>
						</label>
					</div>

					<div className="space-y-1">
						<div className="grid grid-cols-9 gap-x-4">
							<div className="col-span-4 flex items-center">
								<label className="text-sm font-normal select-none">
									Test "Test de la silla 5 repeticiones"
								</label>
							</div>
							<div className="col-span-1">
								<input
									type="text"
									name="test_chair_five_repetitions"
									value={initial.test_chair_five_repetitions}
									onChange={() => {}}
								/>
							</div>
							<div className="col-span-1 flex items-center">
								<label className="text-sm font-normal select-none">seg</label>
							</div>
						</div>

						<label className="input-checkbox">
							<input
								type="checkbox"
								name="test_chair__not_possible"
								value="y"
								checked={initial.test_chair__not_possible === 'y'}
								onChange={handleChange}
							/>
							<span>No es posible realizarlo</span>
						</label>
					</div>
				</section>
			</FormGroup>
		</>
	)
}

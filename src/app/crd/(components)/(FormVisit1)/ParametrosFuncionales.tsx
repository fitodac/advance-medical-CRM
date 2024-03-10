import { useCrdStore } from '@/store'
import { FormGroup } from '..'
import { useCheckboxHandleChange } from '../../(hooks)'
import { InputMask } from '@/components'

export const ParametrosFuncionales = () => {
	const { visit1 } = useCrdStore()

	const { handleChange } = useCheckboxHandleChange('visit1')

	if (!visit1) return <></>

	return (
		<>
			<FormGroup
				id="K5L6M7"
				title="Parámetros funcionales"
				subtitle="(Detalle de los valores obtenidos)"
				required
			>
				<div className="space-y-5">
					<div className="space-y-2">
						{!visit1.dynamometry__not_possible && (
							<div className="grid grid-cols-9 gap-x-2">
								<div className="col-span-4 flex items-center">
									<label className="text-sm font-normal select-none">
										Dinamometría <br />
										(valor máximo de 3 mediciones)
									</label>
								</div>

								<div className="col-span-1">
									<InputMask name="dynamometry" />
								</div>
								<div className="col-span-1 flex items-center">
									<label className="leading-none w-full block select-none">
										kg
									</label>
								</div>
							</div>
						)}

						<label className="input-checkbox">
							<input
								type="checkbox"
								name="dynamometry__not_possible"
								value="y"
								onChange={handleChange}
								checked={visit1.dynamometry__not_possible === 'y'}
							/>
							<span>No es posible realizarlo</span>
						</label>
					</div>

					<div className="space-y-2">
						<div className="grid grid-cols-9 gap-x-2">
							<div className="col-span-4 flex items-center">
								<label className="text-sm font-normal select-none">
									Test "Test de la silla 5 repeticiones"
								</label>
							</div>

							<div className="col-span-1">
								<InputMask name="dynamometry" />
							</div>
							<div className="col-span-1 flex items-center">
								<label className="leading-none w-full block select-none">
									kg
								</label>
							</div>
						</div>

						<label className="input-checkbox">
							<input
								type="checkbox"
								name="test_chair__not_possible"
								value="y"
								onChange={handleChange}
								checked={visit1.test_chair__not_possible === 'y'}
							/>
							<span>No es posible realizarlo</span>
						</label>
					</div>
				</div>
			</FormGroup>
		</>
	)
}

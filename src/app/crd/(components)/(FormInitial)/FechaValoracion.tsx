import { useCrdStore } from '@/store'
import { FormGroup } from '..'
import {
	useSetValue,
	useCheckboxHandleChange,
	useInputHandleChange,
} from '../../(hooks)'
import { InputDate } from '@/components'

export const FechaValoracion = () => {
	const { initial } = useCrdStore()
	const { handleChange } = useCheckboxHandleChange('initial')
	const { handleInputChange } = useInputHandleChange('initial')

	const { setValue } = useSetValue('initial')

	if (!initial) return <></>

	return (
		<>
			<FormGroup id="P4Q5R6" title="Fecha de valoración" required>
				<section className="space-y-4">
					<div className="space-y-2">
						<label className="select-none leading-tight block">
							Fecha (día/mes/año)
						</label>
						<div className="max-w-[150px]">
							<InputDate
								name="valuation_date"
								value={initial.valuation_date}
								onChange={setValue}
							/>
						</div>
					</div>

					<div className="grid gap-y-3">
						<div className="flex gap-x-6 items-start">
							<label className="input-checkbox">
								<input
									type="checkbox"
									name="hospitalization"
									value="y"
									checked={initial.hospitalization === 'y'}
									onChange={handleChange}
								/>
								<span>Hospitalización, expecifique motivo de ingreso</span>
							</label>

							{initial.hospitalization === 'y' && (
								<div className="flex-1 relative -top-2">
									<input
										type="text"
										name="hospitalization_reason"
										value={initial.hospitalization_reason}
										onChange={handleInputChange}
									/>
								</div>
							)}
						</div>

						<label className="input-checkbox">
							<input
								type="checkbox"
								name="scheduled_visit"
								value="y"
								checked={initial.scheduled_visit === 'y'}
								onChange={handleChange}
							/>
							<span>Visita programada en consulta externa/planta</span>
						</label>
					</div>
				</section>
			</FormGroup>
		</>
	)
}

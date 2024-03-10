import { useCrdStore } from '@/store'
import { FormGroup } from '..'
import { useCheckboxHandleChange } from '../../(hooks)'

export const ActividadFisicaPrescripta = () => {
	const { initial } = useCrdStore()

	const { handleChange } = useCheckboxHandleChange('initial')

	if (!initial) return <></>

	return (
		<>
			<FormGroup
				id="R8S9T0"
				title="¿Ha prescrito actividad física al paciente?"
			>
				<div className="flex gap-x-8">
					<div className="w-full grid gap-y-3">
						<label className="input-checkbox">
							<input
								type="radio"
								value="y"
								name="pa__prescribed"
								checked={
									initial.pa__prescribed === 'y'
								}
								onChange={handleChange}
							/>
							<span>Sí</span>
						</label>

						<label className="input-checkbox">
							<input
								type="radio"
								value="n"
								name="pa__prescribed"
								checked={
									initial.pa__prescribed === 'n'
								}
								onChange={handleChange}
							/>
							<span>No, especifique motivo/s</span>
						</label>
					</div>
				</div>
			</FormGroup>
		</>
	)
}

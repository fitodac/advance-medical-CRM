import { useCrdStore } from '@/store'
import { FormGroup } from '..'
import { useCheckboxHandleChange } from '../../(hooks)'

export const IniciaTratamientoNutricional = () => {
	const { initial } = useCrdStore()

	const { handleChange } = useCheckboxHandleChange('initial')

	if (!initial) return <></>

	return (
		<>
			<FormGroup id="V0W1X2" title="Inicia tratamiento nutricional">
				<div className="flex gap-x-8">
					<div className="w-full grid gap-y-3">
						<label className="input-checkbox">
							<input
								type="radio"
								value="n"
								name="nt__start"
								checked={initial.nt__start === 'n'}
								onChange={handleChange}
							/>
							<span>No</span>
						</label>

						<label className="input-checkbox">
							<input
								type="radio"
								value="y"
								name="nt__start"
								checked={initial.nt__start === 'y'}
								onChange={handleChange}
							/>
							<span>Sí</span>
						</label>
					</div>
				</div>
			</FormGroup>
		</>
	)
}

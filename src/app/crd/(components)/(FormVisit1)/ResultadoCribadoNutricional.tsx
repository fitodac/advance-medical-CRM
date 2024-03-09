import { useCrdStore } from '@/store'
import { FormGroup } from '..'
import { useCheckboxHandleChange } from '../../(hooks)'

export const ResultadoCribadoNutricional = () => {
	const { visit1 } = useCrdStore()

	const { handleChange } = useCheckboxHandleChange()

	return (
		<>
			<FormGroup
				id="T4U5V6"
				title="Resultado del cribado nutricional"
				subtitle="¿Está el paciente en riesgo de desnutrición?"
				required
			>
				<div className="flex gap-6 items-start">
					<label className="input-checkbox">
						<input
							type="radio"
							name="ns__result"
							defaultValue="n"
							onChange={handleChange}
							checked={visit1.ns__result === 'n'}
						/>

						<span>No</span>
					</label>

					<label className="input-checkbox">
						<input
							type="radio"
							name="ns__result"
							defaultValue="y"
							onChange={handleChange}
							checked={visit1.ns__result === 'y'}
						/>

						<span>Sí</span>
					</label>
				</div>
			</FormGroup>
		</>
	)
}

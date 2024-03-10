import { useCrdStore } from '@/store'
import { FormGroup } from '..'
import { useCheckboxHandleChange } from '../../(hooks)'

export const ResultadoCribadoNutricional = () => {
	const { initial } = useCrdStore()
	const { handleChange } = useCheckboxHandleChange('initial')

	if (!initial) return <></>

	return (
		<>
			<FormGroup
				id="T4U5V6"
				title="Resultado del cribado nutricional"
				subtitle="¿Está el paciente en riesgo de desnutrición?"
				required
			>
				<section className="flex gap-x-4">
					<label className="input-checkbox">
						<input
							type="radio"
							name="ns__result"
							value="n"
							checked={initial.ns__result === 'n'}
							onChange={handleChange}
						/>
						<span>No</span>
					</label>

					<label className="input-checkbox">
						<input
							type="radio"
							name="ns__result"
							value="y"
							checked={initial.ns__result === 'y'}
							onChange={handleChange}
						/>
						<span>Sí</span>
					</label>
				</section>
			</FormGroup>
		</>
	)
}

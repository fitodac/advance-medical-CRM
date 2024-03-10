import { useCrdStore } from '@/store'
import { FormGroup } from '..'
import { useCheckboxHandleChange } from '../../(hooks)'

export const ResultadoCribadoMuscular = () => {
	const { initial } = useCrdStore()
	const { handleChange } = useCheckboxHandleChange('initial')

	if (!initial) return <></>

	return (
		<>
			<FormGroup
				id="Q1R2S3"
				title="Resultado del cribado muscular"
				subtitle="¿Está el paciente en riesgo de sarcopenia?"
				required
			>
				<section className="flex gap-x-4">
					<label className="input-checkbox">
						<input
							type="radio"
							name="ms__result"
							value="n"
							checked={initial.ms__result === 'n'}
							onChange={handleChange}
						/>
						<span>No</span>
					</label>

					<label className="input-checkbox">
						<input
							type="radio"
							name="ms__result"
							value="y"
							checked={initial.ms__result === 'y'}
							onChange={handleChange}
						/>
						<span>Sí</span>
					</label>
				</section>
			</FormGroup>
		</>
	)
}

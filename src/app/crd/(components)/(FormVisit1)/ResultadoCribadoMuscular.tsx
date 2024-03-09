import { useCrdStore } from '@/store'
import { FormGroup } from '..'
import { useCheckboxHandleChange } from '../../(hooks)'

export const ResultadoCribadoMuscular = () => {
	const { visit1 } = useCrdStore()

	const { handleChange } = useCheckboxHandleChange()

	return (
		<>
			<FormGroup
				id="Q1R2S3"
				title="Resultado del cribado muscular"
				subtitle="¿Está el paciente en riesgo de sarcopenia?"
				required
			>
				<div className="flex gap-6 items-start">
					<label className="input-checkbox">
						<input
							type="radio"
							name="ms__result"
							defaultValue="n"
							onChange={handleChange}
							checked={visit1.ms__result === 'n'}
						/>

						<span>No</span>
					</label>

					<label className="input-checkbox">
						<input
							type="radio"
							name="ms__result"
							defaultValue="y"
							onChange={handleChange}
							checked={visit1.ms__result === 'y'}
						/>

						<span>Sí</span>
					</label>
				</div>
			</FormGroup>
		</>
	)
}

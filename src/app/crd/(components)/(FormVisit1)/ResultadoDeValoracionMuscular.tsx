import { useCrdStore } from '@/store'
import { FormGroup } from '..'
import { useCheckboxHandleChange } from '../../(hooks)'

export const ResultadoDeValidacionMuscular = () => {
	const { visit1 } = useCrdStore()

	const { handleChange } = useCheckboxHandleChange()

	return (
		<>
			<FormGroup
				id="W7X8Y9"
				title="Resultado de la valoración muscular"
				subtitle="¿La masa muscular/función del paciente es normal?"
			>
				<div className="flex gap-6 items-start">
					<label className="input-checkbox">
						<input
							type="radio"
							name="mar__normal"
							defaultValue="n"
							onChange={handleChange}
							checked={visit1.mar__normal === 'n'}
						/>

						<span>No</span>
					</label>

					<label className="input-checkbox">
						<input
							type="radio"
							name="mar__normal"
							defaultValue="y"
							onChange={handleChange}
							checked={visit1.mar__normal === 'y'}
						/>

						<span>Sí</span>
					</label>
				</div>
			</FormGroup>
		</>
	)
}

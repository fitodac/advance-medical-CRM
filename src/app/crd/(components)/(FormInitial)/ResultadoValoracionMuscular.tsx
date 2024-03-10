import { useCrdStore } from '@/store'
import { FormGroup } from '..'
import { useCheckboxHandleChange } from '../../(hooks)'

export const ResultadoValoracionMuscular = () => {
	const { initial } = useCrdStore()
	const { handleChange } = useCheckboxHandleChange('initial')

	if (!initial) return <></>

	return (
		<>
			<FormGroup
				id="W7X8Y9"
				title="Resultado de la valoración muscular"
				subtitle="¿La masa muscular/función del paciente es normal?"
			>
				<section className="flex gap-x-4">
					<label className="input-checkbox">
						<input
							type="radio"
							name="mar__normal"
							value="n"
							checked={initial.mar__normal === 'n'}
							onChange={handleChange}
						/>
						<span>No</span>
					</label>

					<label className="input-checkbox">
						<input
							type="radio"
							name="mar__normal"
							value="y"
							checked={initial.mar__normal === 'y'}
							onChange={handleChange}
						/>
						<span>Sí</span>
					</label>
				</section>
			</FormGroup>
		</>
	)
}

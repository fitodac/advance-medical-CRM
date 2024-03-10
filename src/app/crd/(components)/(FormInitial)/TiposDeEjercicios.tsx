import { useCrdStore } from '@/store'
import { FormGroup } from '..'
import { useCheckboxHandleChange } from '../../(hooks)'

export const TiposDeEjercicios = () => {
	const { initial } = useCrdStore()

	const { handleChange } = useCheckboxHandleChange('initial')

	if (!initial) return <></>

	return (
		<>
			<FormGroup
				id="F6G7H8"
				title="¿Qué tipo de ejercicios ha recomendado?"
				subtitle="(Señale uno o varios si aplican)"
			>
				<div className="flex gap-x-8">
					<div className="w-full grid gap-y-3">
						<label className="input-checkbox">
							<input
								type="checkbox"
								value="y"
								name="pa__aerobic_predominance"
								checked={initial.pa__aerobic_predominance === 'y'}
								onChange={handleChange}
							/>
							<span>Predominio aeróbico</span>
						</label>

						<label className="input-checkbox">
							<input
								type="checkbox"
								value="y"
								name="pa__predominance_muscular_strength"
								checked={initial.pa__predominance_muscular_strength === 'y'}
								onChange={handleChange}
							/>
							<span>No, especifique motivo/s</span>
						</label>

						<label className="input-checkbox">
							<input
								type="checkbox"
								value="y"
								name="pa__mixed"
								checked={initial.pa__mixed === 'y'}
								onChange={handleChange}
							/>
							<span>Mixto</span>
						</label>
					</div>
				</div>
			</FormGroup>
		</>
	)
}

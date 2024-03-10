import { useCrdStore } from '@/store'
import { FormGroup } from '..'
import { useCheckboxHandleChange } from '../../(hooks)'

export const CribadoNutricional = () => {
	const { initial } = useCrdStore()
	const { handleChange } = useCheckboxHandleChange('initial')

	if (!initial) return <></>

	return (
		<>
			<FormGroup id="D2E3F4" title="Cribado nutricional" required>
				<section className="grid gap-y-3">
					<label className="input-checkbox">
						<input
							type="checkbox"
							name="ns__must"
							value="y"
							checked={initial.ns__must === 'y'}
							onChange={handleChange}
						/>
						<span>MUST</span>
					</label>

					<label className="input-checkbox">
						<input
							type="checkbox"
							name="ns__nrs_2002"
							value="y"
							checked={initial.ns__nrs_2002 === 'y'}
							onChange={handleChange}
						/>
						<span>NRS-2002</span>
					</label>

					<label className="input-checkbox">
						<input
							type="checkbox"
							name="ns__nrs_2002"
							value="y"
							checked={initial.ns__nrs_2002 === 'y'}
							onChange={handleChange}
						/>
						<span>MNA-SF</span>
					</label>

					<label className="input-checkbox">
						<input
							type="checkbox"
							name="ns__mis"
							value="y"
							checked={initial.ns__mis === 'y'}
							onChange={handleChange}
						/>
						<span>MIS</span>
					</label>

					<label className="input-checkbox">
						<input
							type="checkbox"
							name="ns__snaq"
							value="y"
							checked={initial.ns__snaq === 'y'}
							onChange={handleChange}
						/>
						<span>SNAQ</span>
					</label>

					<label className="input-checkbox">
						<input
							type="checkbox"
							name="ns__conut"
							value="y"
							checked={initial.ns__conut === 'y'}
							onChange={handleChange}
						/>
						<span>CONUT</span>
					</label>

					<div className="flex gap-6 items-start">
						<label className="input-checkbox">
							<input
								type="checkbox"
								name="ns__other"
								value="y"
								checked={initial.ns__other === 'y'}
								onChange={handleChange}
							/>
							<span>Otros (especifique)</span>
						</label>

						{initial.ns__other === 'y' && (
							<div className="flex-1 relative -top-1">
								<input type="text" name="ns__other_description" />
							</div>
						)}
					</div>
				</section>
			</FormGroup>
		</>
	)
}

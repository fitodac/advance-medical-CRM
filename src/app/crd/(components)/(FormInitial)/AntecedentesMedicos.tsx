import { useCrdStore } from '@/store'
import { FormGroup } from '..'
import { useCheckboxHandleChange, useInputHandleChange } from '../../(hooks)'

export const AntecedentesMedicos = () => {
	const { initial } = useCrdStore()
	const { handleChange } = useCheckboxHandleChange('initial')
	const { handleInputChange } = useInputHandleChange('initial')

	if (!initial) return <></>

	return (
		<>
			<FormGroup
				id="O5P6Q7"
				title="Antecedentes médicos"
				subtitle="(Especificar patología y estadío si procede)"
				required
			>
				<div className="grid gap-y-2.5">
					<label className="input-checkbox">
						<input
							type="checkbox"
							name="mh__diabetes"
							value="y"
							checked={initial.mh__diabetes === 'y'}
							onChange={handleChange}
						/>
						<span>Diabetes</span>
					</label>
					<label className="input-checkbox">
						<input
							type="checkbox"
							name="mh__epoc"
							value="y"
							checked={initial.mh__epoc === 'y'}
							onChange={handleChange}
						/>
						<span>EPOC</span>
					</label>

					<label className="input-checkbox">
						<input
							type="checkbox"
							name="mh__heart_failure"
							value="y"
							checked={initial.mh__heart_failure === 'y'}
							onChange={handleChange}
						/>
						<span>Insuficiencia cardíaca</span>
					</label>
					<label className="input-checkbox">
						<input
							type="checkbox"
							name="mh__cancer"
							value="y"
							checked={initial.mh__cancer === 'y'}
							onChange={handleChange}
						/>
						<span>Cáncer, incluyendo neoplasias hematológicas</span>
					</label>
					<label className="input-checkbox">
						<input
							type="checkbox"
							name="mh__neurological_disease"
							value="y"
							checked={initial.mh__neurological_disease === 'y'}
							onChange={handleChange}
						/>
						<span>Enfermedad neurológica</span>
					</label>
					<label className="input-checkbox">
						<input
							type="checkbox"
							name="mh__liver_diseases"
							value="y"
							checked={initial.mh__liver_diseases === 'y'}
							onChange={handleChange}
						/>
						<span>Enfermedades hepáticas</span>
					</label>
					<label className="input-checkbox">
						<input
							type="checkbox"
							name="mh__inflammatory_bowel_disease"
							value="y"
							checked={initial.mh__inflammatory_bowel_disease === 'y'}
							onChange={handleChange}
						/>
						<span>Enfermedad inflamatoria intestinal</span>
					</label>
					<label className="input-checkbox">
						<input
							type="checkbox"
							name="mh__renal_failure"
							value="y"
							checked={initial.mh__renal_failure === 'y'}
							onChange={handleChange}
						/>
						<span>Insuficiencia renal crónica</span>
					</label>
					<label className="input-checkbox">
						<input
							type="checkbox"
							name="mh__other_chronic_diseases"
							value="y"
							checked={initial.mh__other_chronic_diseases === 'y'}
							onChange={handleChange}
						/>
						<span>Otras enfermedades crónicas</span>
					</label>

					<div className="flex gap-x-6 items-start">
						<label className="input-checkbox">
							<input
								type="checkbox"
								name="mh__others"
								value="Otros"
								checked={initial.mh__others === 'Otros'}
								onChange={handleChange}
							/>
							<span>Otros (especifique)</span>
						</label>

						<div className="flex-1 relative -top-1">
							{initial.mh__others === 'Otros' && (
								<input
									type="text"
									name="mh__others_description"
									onChange={handleInputChange}
								/>
							)}
						</div>
					</div>
				</div>
			</FormGroup>
		</>
	)
}

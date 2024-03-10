import { useCrdStore } from '@/store'
import { FormGroup } from '..'
import { useCheckboxHandleChange, useInputHandleChange } from '../../(hooks)'

export const TipoDeTratamientoNutricionalIndicado = () => {
	const { initial } = useCrdStore()

	const { handleChange } = useCheckboxHandleChange('initial')
	const { handleInputChange } = useInputHandleChange('initial')

	if (!initial) return <></>

	return (
		<>
			<FormGroup id="I9J0K1" title="Tipo de tratamiento nutricional indicado">
				<section className="space-y-1">
					<div className="w-full grid gap-y-3">
						<label className="input-checkbox">
							<input
								type="checkbox"
								value="y"
								name="nti__parental_nutrition"
								checked={initial.nti__parental_nutrition === 'y'}
								onChange={handleChange}
							/>
							<span>Nutrición parenteral</span>
						</label>

						<label className="input-checkbox">
							<input
								type="checkbox"
								value="y"
								name="nti__dietary_modifications"
								checked={initial.nti__dietary_modifications === 'y'}
								onChange={handleChange}
							/>
							<span>Modificaciones dietéticas</span>
						</label>

						<label className="input-checkbox">
							<input
								type="checkbox"
								value="y"
								name="nti__son"
								checked={initial.nti__son === 'y'}
								onChange={handleChange}
							/>
							<span>
								SNO, tipo de fórmula <br />
								<small>
									(Seleccione la definición que aplica. Si se pautan diferentes
									dietas, puede señalar varias)
								</small>
							</span>
						</label>

						<div className="pb-3 pl-8 space-y-2">
							<div>
								<label className="input-checkbox">
									<input
										type="radio"
										name="nti__son__option"
										value="Hipercalórica/Hperproteica con ingrediente Músculo Específico (HBM y/o Leucina)"
										checked={
											initial.nti__son__option ===
											'Hipercalórica/Hperproteica con ingrediente Músculo Específico (HBM y/o Leucina)'
										}
										onChange={handleChange}
									/>
									<span>
										Hipercalórica/Hperproteica con ingrediente Músculo
										Específico (HBM y/o Leucina)
									</span>
								</label>
							</div>

							<div>
								<label className="input-checkbox">
									<input
										type="radio"
										name="nti__son__option"
										value="Hipercalórica/Hiperproteica sin ingrediente Músculo Específico (HMB y/o Leucina)"
										checked={
											initial.nti__son__option ===
											'Hipercalórica/Hiperproteica sin ingrediente Músculo Específico (HMB y/o Leucina)'
										}
										onChange={handleChange}
									/>
									<span>
										Hipercalórica/Hiperproteica sin ingrediente Músculo
										Específico (HMB y/o Leucina)
									</span>
								</label>
							</div>

							<div>
								<label className="input-checkbox">
									<input
										type="radio"
										name="nti__son__option"
										value="Normo calórica/Normoproteica sin ingrediente Músculo Específico (HMB y/o Leucina)"
										checked={
											initial.nti__son__option ===
											'Normo calórica/Normoproteica sin ingrediente Músculo Específico (HMB y/o Leucina)'
										}
										onChange={handleChange}
									/>
									<span>
										Normo calórica/Normoproteica sin ingrediente Músculo
										Específico (HMB y/o Leucina)
									</span>
								</label>
							</div>

							<div>
								<label className="input-checkbox">
									<input
										type="radio"
										name="nti__son__option"
										value="Específica para Diabético Hipercalórica/Hiperproteica con ingrediente Músculo Específico (HMB y/o Leucina)"
										checked={
											initial.nti__son__option ===
											'Específica para Diabético Hipercalórica/Hiperproteica con ingrediente Músculo Específico (HMB y/o Leucina)'
										}
										onChange={handleChange}
									/>
									<span>
										Específica para Diabético Hipercalórica/Hiperproteica con
										ingrediente Músculo Específico (HMB y/o Leucina)
									</span>
								</label>
							</div>

							<div>
								<label className="input-checkbox">
									<input
										type="radio"
										name="nti__son__option"
										value="Especifica para diabético normo calórica/normoproteica sin ingrediente Músculo Específico (HMB y Leucina)"
										checked={
											initial.nti__son__option ===
											'Especifica para diabético normo calórica/normoproteica sin ingrediente Músculo Específico (HMB y Leucina)'
										}
										onChange={handleChange}
									/>
									<span>
										Especifica para diabético normo calórica/normoproteica sin
										ingrediente Músculo Específico (HMB y Leucina)
									</span>
								</label>
							</div>

							<div>
								<label className="input-checkbox">
									<input
										type="radio"
										name="nti__son__option"
										value="Fórmulas peptídicas"
										checked={initial.nti__son__option === 'Fórmulas peptídicas'}
										onChange={handleChange}
									/>
									<span>Fórmulas peptídicas</span>
								</label>
							</div>

							<div className="flex gap-x-6 items-start">
								<label className="input-checkbox">
									<input
										type="radio"
										name="nti__son__option"
										value="Otras (especifique)"
										checked={initial.nti__son__option === 'Otras (especifique)'}
										onChange={handleChange}
									/>
									<span>Otras (especifique)</span>
								</label>

								<div className="flex-1 relative -top-2">
									{initial.nti__son__option === 'Otras (especifique)' && (
										<>
											<input
												type="text"
												name="nti__son__other_description"
												value={initial.nti__son__other_description}
												className="w-full"
												onChange={handleInputChange}
											/>
										</>
									)}
								</div>
							</div>
						</div>
					</div>

					<div className="w-full grid gap-y-3">
						<label className="input-checkbox">
							<input
								type="checkbox"
								value="y"
								name="nti__en"
								checked={initial.nti__en === 'y'}
								onChange={handleChange}
							/>
							<span>Nutrición enteral, tipo de fórmula</span>
						</label>

						<div className="pb-3 pl-8 space-y-2">
							<div>
								<label className="input-checkbox">
									<input
										type="radio"
										name="nti__en__option"
										value="Hipercalórica/Hiperproteica con ingrediente Músculo Especifico (HMB y/o Leucina)"
										checked={
											initial.nti__en__option ===
											'Hipercalórica/Hiperproteica con ingrediente Músculo Especifico (HMB y/o Leucina)'
										}
										onChange={handleChange}
									/>
									<span>
										Hipercalórica/Hiperproteica con ingrediente Músculo
										Especifico (HMB y/o Leucina)
									</span>
								</label>
							</div>

							<div>
								<label className="input-checkbox">
									<input
										type="radio"
										name="nti__en__option"
										value="Hipercalórica/Hiperproteica sin ingrediente Músculo Específico (HMB y/o Leucina)"
										checked={
											initial.nti__en__option ===
											'Hipercalórica/Hiperproteica sin ingrediente Músculo Específico (HMB y/o Leucina)'
										}
										onChange={handleChange}
									/>
									<span>
										Hipercalórica/Hiperproteica sin ingrediente Músculo
										Específico (HMB y/o Leucina)
									</span>
								</label>
							</div>

							<div>
								<label className="input-checkbox">
									<input
										type="radio"
										name="nti__en__option"
										value="Normo calórica/Normoproteica sin ingrediente Músculo Específico (HMB y/o Leucina)"
										checked={
											initial.nti__en__option ===
											'Normo calórica/Normoproteica sin ingrediente Músculo Específico (HMB y/o Leucina)'
										}
										onChange={handleChange}
									/>
									<span>
										Normo calórica/Normoproteica sin ingrediente Músculo
										Específico (HMB y/o Leucina)
									</span>
								</label>
							</div>

							<div>
								<label className="input-checkbox">
									<input
										type="radio"
										name="nti__en__option"
										value="Específica para Diabético Hipercalórica/Hiperproteica con ingrediente Músculo Específico (HMB y/o Leucina)"
										checked={
											initial.nti__en__option ===
											'Específica para Diabético Hipercalórica/Hiperproteica con ingrediente Músculo Específico (HMB y/o Leucina)'
										}
										onChange={handleChange}
									/>
									<span>
										Específica para Diabético Hipercalórica/Hiperproteica con
										ingrediente Músculo Específico (HMB y/o Leucina)
									</span>
								</label>
							</div>

							<div>
								<label className="input-checkbox">
									<input
										type="radio"
										name="nti__en__option"
										value="Específica para Diabético Hipercalórica/Hiperproteica con ingrediente Músculo Específico (HMB y/o Leucina)"
										checked={
											initial.nti__en__option ===
											'Específica para Diabético Hipercalórica/Hiperproteica con ingrediente Músculo Específico (HMB y/o Leucina)'
										}
										onChange={handleChange}
									/>
									<span>
										Específica para Diabético Hipercalórica/Hiperproteica con
										ingrediente Músculo Específico (HMB y/o Leucina)
									</span>
								</label>
							</div>

							<div>
								<label className="input-checkbox">
									<input
										type="radio"
										name="nti__en__option"
										value="Fórmulas peptídicas"
										checked={initial.nti__en__option === 'Fórmulas peptídicas'}
										onChange={handleChange}
									/>
									<span>Fórmulas peptídicas</span>
								</label>
							</div>

							<div>
								<label className="input-checkbox">
									<input
										type="radio"
										name="nti__en__option"
										value="Específica para paciente nefrópata"
										checked={
											initial.nti__en__option ===
											'Específica para paciente nefrópata'
										}
										onChange={handleChange}
									/>
									<span>Específica para paciente nefrópata</span>
								</label>
							</div>

							<div className="flex gap-x-6 items-start">
								<label className="input-checkbox">
									<input
										type="radio"
										name="nti__en__option"
										value="Otras (especifique)"
										checked={initial.nti__en__option === 'Otras (especifique)'}
										onChange={handleChange}
									/>
									<span>Otras (especifique)</span>
								</label>

								<div className="flex-1 relative -top-2">
									{initial.nti__en__option === 'Otras (especifique)' && (
										<>
											<input
												type="text"
												name="nti__en__other_description"
												value={initial.nti__en__other_description}
												className="w-full"
												onChange={handleInputChange}
											/>
										</>
									)}
								</div>
							</div>
						</div>
					</div>
				</section>
			</FormGroup>
		</>
	)
}

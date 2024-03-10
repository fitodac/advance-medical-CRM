import { ChangeEvent } from 'react'
import { useCrdStore } from '@/store'
import { FormGroup } from '..'
import { useCheckboxHandleChange } from '../../(hooks)'

export const TipoDeTratamientoNutricionalIndicado = () => {
	const { initial, setInitial } = useCrdStore()

	const { handleChange } = useCheckboxHandleChange('initial')

	const handleChangeSONoption = (e: ChangeEvent<HTMLInputElement>) => {
		if (!initial) return
		const { value } = e.target

		const node = [...initial.nti__son__option]

		if (node.indexOf(value) >= 0) {
			node.splice(node.indexOf(value), 1)
		} else {
			node.push(value)
		}

		setInitial({ ...initial, nti__son__option: node })
	}

	const handleChangeENoption = (e: ChangeEvent<HTMLInputElement>) => {
		if (!initial) return
		const { value } = e.target

		const node = [...initial.nti__en__option]

		if (node.indexOf(value) >= 0) {
			node.splice(node.indexOf(value), 1)
		} else {
			node.push(value)
		}

		setInitial({ ...initial, nti__en__option: node })
	}

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

						{initial.nti__son__option && (
							<div className="pb-3 pl-8 space-y-2">
								<div>
									<label className="input-checkbox">
										<input
											type="checkbox"
											value="Hipercalórica/Hperproteica con ingrediente Músculo Específico (HBM y/o Leucina)"
											checked={
												initial.nti__son__option.indexOf(
													'Hipercalórica/Hperproteica con ingrediente Músculo Específico (HBM y/o Leucina)'
												) >= 0
											}
											onChange={handleChangeSONoption}
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
											type="checkbox"
											value="Hipercalórica/Hiperproteica sin ingrediente Músculo Específico (HMB y/o Leucina)"
											checked={
												initial.nti__son__option.indexOf(
													'Hipercalórica/Hiperproteica sin ingrediente Músculo Específico (HMB y/o Leucina)'
												) >= 0
											}
											onChange={handleChangeSONoption}
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
											type="checkbox"
											value="Normo calórica/Normoproteica sin ingrediente Músculo Específico (HMB y/o Leucina)"
											checked={
												initial.nti__son__option.indexOf(
													'Normo calórica/Normoproteica sin ingrediente Músculo Específico (HMB y/o Leucina)'
												) >= 0
											}
											onChange={handleChangeSONoption}
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
											type="checkbox"
											value="Específica para Diabético Hipercalórica/Hiperproteica con ingrediente Músculo Específico (HMB y/o Leucina)"
											checked={
												initial.nti__son__option.indexOf(
													'Específica para Diabético Hipercalórica/Hiperproteica con ingrediente Músculo Específico (HMB y/o Leucina)'
												) >= 0
											}
											onChange={handleChangeSONoption}
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
											type="checkbox"
											value="Especifica para diabético normo calórica/normoproteica sin ingrediente Músculo Específico (HMB y Leucina)"
											checked={
												initial.nti__son__option.indexOf(
													'Especifica para diabético normo calórica/normoproteica sin ingrediente Músculo Específico (HMB y Leucina)'
												) >= 0
											}
											onChange={handleChangeSONoption}
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
											type="checkbox"
											value="Fórmulas peptídicas"
											checked={
												initial.nti__son__option.indexOf(
													'Fórmulas peptídicas'
												) >= 0
											}
											onChange={handleChangeSONoption}
										/>
										<span>Fórmulas peptídicas</span>
									</label>
								</div>

								<div>
									<div className="flex gap-x-6 items-start">
										<label className="input-checkbox">
											<input
												type="checkbox"
												value="Otras (especifique)"
												checked={
													initial.nti__son__option.indexOf(
														'Otras (especifique)'
													) >= 0
												}
												onChange={handleChangeSONoption}
											/>
											<span>Otras (especifique)</span>
										</label>
									</div>

									<div className="flex-1 relative -top-2">
										{initial.nti__son__option.indexOf('Otras (especifique)') >=
											0 && (
											<>
												<input
													type="text"
													name="nti__son__other_description"
													value={initial.nti__son__other_description}
													className="w-full"
												/>
											</>
										)}
									</div>
								</div>
							</div>
						)}
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

						{initial.nti__en__option && (
							<div className="pb-3 pl-8 space-y-2">
								<div>
									<label className="input-checkbox">
										<input
											type="checkbox"
											value="Hipercalórica/Hiperproteica con ingrediente Músculo Especifico (HMB y/o Leucina)"
											checked={
												initial.nti__en__option.indexOf(
													'Hipercalórica/Hiperproteica con ingrediente Músculo Especifico (HMB y/o Leucina)'
												) >= 0
											}
											onChange={handleChangeENoption}
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
											type="checkbox"
											value="Hipercalórica/Hiperproteica sin ingrediente Músculo Específico (HMB y/o Leucina)"
											checked={
												initial.nti__en__option.indexOf(
													'Hipercalórica/Hiperproteica sin ingrediente Músculo Específico (HMB y/o Leucina)'
												) >= 0
											}
											onChange={handleChangeENoption}
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
											type="checkbox"
											value="Normo calórica/Normoproteica sin ingrediente Músculo Específico (HMB y/o Leucina)"
											checked={
												initial.nti__en__option.indexOf(
													'Normo calórica/Normoproteica sin ingrediente Músculo Específico (HMB y/o Leucina)'
												) >= 0
											}
											onChange={handleChangeENoption}
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
											type="checkbox"
											value="Específica para Diabético Hipercalórica/Hiperproteica con ingrediente Músculo Específico (HMB y/o Leucina)"
											checked={
												initial.nti__en__option.indexOf(
													'Específica para Diabético Hipercalórica/Hiperproteica con ingrediente Músculo Específico (HMB y/o Leucina)'
												) >= 0
											}
											onChange={handleChangeENoption}
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
											type="checkbox"
											value="Específica para Diabético Hipercalórica/Hiperproteica con ingrediente Músculo Específico (HMB y/o Leucina)"
											checked={
												initial.nti__en__option.indexOf(
													'Específica para Diabético Hipercalórica/Hiperproteica con ingrediente Músculo Específico (HMB y/o Leucina)'
												) >= 0
											}
											onChange={handleChangeENoption}
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
											type="checkbox"
											value="Fórmulas peptídicas"
											checked={
												initial.nti__en__option.indexOf(
													'Fórmulas peptídicas'
												) >= 0
											}
											onChange={handleChangeENoption}
										/>
										<span>Fórmulas peptídicas</span>
									</label>
								</div>

								<div>
									<label className="input-checkbox">
										<input
											type="checkbox"
											value="Específica para paciente nefrópata"
											checked={
												initial.nti__en__option.indexOf(
													'Específica para paciente nefrópata'
												) >= 0
											}
											onChange={handleChangeENoption}
										/>
										<span>Específica para paciente nefrópata</span>
									</label>
								</div>

								<div className="flex gap-x-6 items-start">
									<label className="input-checkbox">
										<input
											type="checkbox"
											value="Otras (especifique)"
											checked={
												initial.nti__en__option.indexOf(
													'Otras (especifique)'
												) >= 0
											}
											onChange={handleChangeENoption}
										/>
										<span>Otras (especifique)</span>
									</label>

									<div className="flex-1 relative -top-2">
										{initial.nti__en__option.indexOf('Otras (especifique)') >=
											0 && (
											<>
												<input
													type="text"
													name="nti__en__other_description"
													value={initial.nti__en__other_description}
													className="w-full"
												/>
											</>
										)}
									</div>
								</div>
							</div>
						)}
					</div>
				</section>
			</FormGroup>
		</>
	)
}

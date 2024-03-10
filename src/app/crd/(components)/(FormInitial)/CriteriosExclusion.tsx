'use client'
import { useState, useEffect } from 'react'
import { useCrdStore } from '@/store'
import { FormGroup } from '..'
import { useCheckboxHandleChange } from '../../(hooks)'

export const CriteriosExclusion = () => {
	const { initial } = useCrdStore()
	const { handleChange } = useCheckboxHandleChange('initial')
	const [valid, setValid] = useState<boolean>(true)

	useEffect(() => {
		if (initial) {
			if (
				initial.exclusion_q1 === 'y' ||
				initial.exclusion_q2 === 'y' ||
				initial.exclusion_q3 === 'y' ||
				initial.exclusion_q4 === 'y' ||
				initial.exclusion_q5 === 'y'
			) {
				setValid(false)
			} else {
				setValid(true)
			}
		}
	}, [initial])

	if (!initial) return <></>

	return (
		<>
			<FormGroup id="G5H6I7" title="Criterios de exclusión" required>
				<section className="space-y-7">
					<div className="space-y-3">
						<div
							className={
								!valid
									? 'bg-pink-50 bg-opacity-30 border-l-8 border-pink-400 px-3 py-4 transition-all rounded-r-lg'
									: ''
							}
						>
							<div className="space-y-6">
								<div className="flex gap-5 items-start">
									<label className="input-checkbox">
										<input
											type="radio"
											name="exclusion_q1"
											value="y"
											checked={initial?.exclusion_q1 === 'y'}
											onChange={handleChange}
										/>
										<span>Sí</span>
									</label>

									<label className="input-checkbox">
										<input
											type="radio"
											name="exclusion_q1"
											value="n"
											checked={initial?.exclusion_q1 === 'n'}
											onChange={handleChange}
										/>
										<span>No</span>
									</label>

									<div className="text-slate-500 text-sm leading-tight pl-4 select-none">
										Personas que no accedan a formar parte del registro y no
										firmen el consentimiento informado.
									</div>
								</div>

								<div className="flex gap-5 items-start">
									<label className="input-checkbox">
										<input
											type="radio"
											name="exclusion_q2"
											value="y"
											checked={initial?.exclusion_q2 === 'y'}
											onChange={handleChange}
										/>
										<span>Sí</span>
									</label>

									<label className="input-checkbox">
										<input
											type="radio"
											name="exclusion_q2"
											value="n"
											checked={initial?.exclusion_q2 === 'n'}
											onChange={handleChange}
										/>
										<span>No</span>
									</label>

									<div className="text-slate-500 text-sm leading-tight pl-4 select-none">
										Personas sin diagnóstico de enfermedad crónica.
									</div>
								</div>

								<div className="flex gap-5 items-start">
									<label className="input-checkbox">
										<input
											type="radio"
											name="exclusion_q3"
											value="y"
											checked={initial?.exclusion_q3 === 'y'}
											onChange={handleChange}
										/>
										<span>Sí</span>
									</label>

									<label className="input-checkbox">
										<input
											type="radio"
											name="exclusion_q3"
											value="n"
											checked={initial?.exclusion_q3 === 'n'}
											onChange={handleChange}
										/>
										<span>No</span>
									</label>

									<div className="text-slate-500 text-sm leading-tight pl-4 select-none">
										Personas con trastornos de la conducta alimentaria.
									</div>
								</div>

								<div className="flex gap-5 items-start">
									<label className="input-checkbox">
										<input
											type="radio"
											name="exclusion_q4"
											value="y"
											checked={initial?.exclusion_q4 === 'y'}
											onChange={handleChange}
										/>
										<span>Sí</span>
									</label>

									<label className="input-checkbox">
										<input
											type="radio"
											name="exclusion_q4"
											value="n"
											checked={initial?.exclusion_q4 === 'n'}
											onChange={handleChange}
										/>
										<span>No</span>
									</label>

									<div className="text-slate-500 text-sm leading-tight pl-4 select-none">
										Personas con esperanza de vida inferior a 6 meses.
									</div>
								</div>

								<div className="flex gap-5 items-start">
									<label className="input-checkbox">
										<input
											type="radio"
											name="exclusion_q5"
											value="y"
											checked={initial?.exclusion_q5 === 'y'}
											onChange={handleChange}
										/>
										<span>Sí</span>
									</label>

									<label className="input-checkbox">
										<input
											type="radio"
											name="exclusion_q5"
											value="n"
											checked={initial?.exclusion_q5 === 'n'}
											onChange={handleChange}
										/>
										<span>No</span>
									</label>

									<div className="text-slate-500 text-sm leading-tight pl-4 select-none">
										Demencia conocida u otros ajenos a un trastorno neurológico
										o psiquiátrico significativo, o cualquier otra condición
										psicológica que pueda interferir con el desarrollo del
										estudio.
									</div>
								</div>
							</div>

							{!valid && (
								<div className="text-pink-500 text-sm leading-tight mt-4">
									Compruebe la información. No se cumplen los criterios de
									exclusión.
								</div>
							)}
						</div>
					</div>
				</section>
			</FormGroup>
		</>
	)
}

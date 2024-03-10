'use client'
import { useState, useEffect } from 'react'
import { useCrdStore } from '@/store'
import { FormGroup } from '..'
import { useCheckboxHandleChange } from '../../(hooks)'

export const CriteriosInclusion = () => {
	const { initial } = useCrdStore()
	const { handleChange } = useCheckboxHandleChange('initial')
	const [valid, setValid] = useState<boolean>(true)

	useEffect(() => {
		if (initial) {
			if (
				initial.inclusion_q1 === 'n' ||
				initial.inclusion_q2 === 'n' ||
				initial.inclusion_q3 === 'n'
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
			<FormGroup id="G5H6I7" title="Criterios de inclusión" required>
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
											name="inclusion_q1"
											value="y"
											checked={initial.inclusion_q1 === 'y'}
											onChange={handleChange}
										/>
										<span>Sí</span>
									</label>

									<label className="input-checkbox">
										<input
											type="radio"
											name="inclusion_q1"
											value="n"
											checked={initial.inclusion_q1 === 'n'}
											onChange={handleChange}
										/>
										<span>No</span>
									</label>

									<div className="text-slate-500 text-sm leading-tight pl-4 select-none">
										Personas con antecedentes de una enfermedad crónica.
									</div>
								</div>

								<div className="flex gap-5 items-start">
									<label className="input-checkbox">
										<input
											type="radio"
											name="inclusion_q2"
											value="y"
											checked={initial.inclusion_q2 === 'y'}
											onChange={handleChange}
										/>
										<span>Sí</span>
									</label>

									<label className="input-checkbox">
										<input
											type="radio"
											name="inclusion_q2"
											value="n"
											checked={initial.inclusion_q2 === 'n'}
											onChange={handleChange}
										/>
										<span>No</span>
									</label>

									<div className="text-slate-500 text-sm leading-tight pl-4 select-none">
										Edad ›18 años.
									</div>
								</div>

								<div className="flex gap-5 items-start">
									<label className="input-checkbox">
										<input
											type="radio"
											name="inclusion_q3"
											value="y"
											checked={initial.inclusion_q3 === 'y'}
											onChange={handleChange}
										/>
										<span>Sí</span>
									</label>

									<label className="input-checkbox">
										<input
											type="radio"
											name="inclusion_q3"
											value="n"
											checked={initial.inclusion_q3 === 'n'}
											onChange={handleChange}
										/>
										<span>No</span>
									</label>

									<div className="text-slate-500 text-sm leading-tight pl-4 select-none">
										Accede a formar parte del estudio y firma el consentimiento
										informado.
									</div>
								</div>
							</div>

							{!valid && (
								<div className="text-pink-500 text-sm leading-tight mt-4">
									Compruebe la información. No se cumplen los criterios de
									inclusión.
								</div>
							)}
						</div>
					</div>
				</section>
			</FormGroup>
		</>
	)
}

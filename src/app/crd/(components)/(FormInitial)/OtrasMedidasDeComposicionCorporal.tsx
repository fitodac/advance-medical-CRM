import { useEffect, useState } from 'react'
import { useCrdStore } from '@/store'
import { FormGroup } from '..'
import { useSetValue } from '../../(hooks)'
import { InputNumber } from '@/components'
import { AlertMessage } from '..'
import { convertToNumber } from '../../(helpers)'

export const OtrasMedidasDeComposicionCorporal = () => {
	const { initial } = useCrdStore()
	const { setValue } = useSetValue('initial')

	const [bi__hydratation_valid, set_bi__hydratation_valid] =
		useState<boolean>(true)
	const [bi__ffm_valid, set_bi__ffm_valid] = useState<boolean>(true)
	const [bi__fm_valid, set_bi__fm_valid] = useState<boolean>(true)
	const [bi__bcm_valid, set_bi__bcm_valid] = useState<boolean>(true)
	const [bi__phase_angle_valid, set_bi__phase_angle_valid] =
		useState<boolean>(true)

	if (initial) {
		useEffect(() => {
			set_bi__hydratation_valid(true)

			if (
				(initial.bi__hydratation &&
					convertToNumber(initial.bi__hydratation) < 50) ||
				convertToNumber(initial.bi__hydratation) > 80
			) {
				set_bi__hydratation_valid(false)
			}
		}, [initial.bi__hydratation])

		useEffect(() => {
			set_bi__ffm_valid(true)

			if (
				(initial.bi__ffm && convertToNumber(initial.bi__ffm) < 20) ||
				convertToNumber(initial.bi__ffm) > 70
			) {
				set_bi__ffm_valid(false)
			}
		}, [initial.bi__ffm])

		useEffect(() => {
			set_bi__fm_valid(true)

			if (
				(initial.bi__fm && convertToNumber(initial.bi__fm) < 10) ||
				convertToNumber(initial.bi__fm) > 35
			) {
				set_bi__fm_valid(false)
			}
		}, [initial.bi__fm])

		useEffect(() => {
			set_bi__bcm_valid(true)

			if (
				(initial.bi__bcm && convertToNumber(initial.bi__bcm) < 10) ||
				convertToNumber(initial.bi__bcm) > 40
			) {
				set_bi__bcm_valid(false)
			}
		}, [initial.bi__bcm])

		useEffect(() => {
			set_bi__phase_angle_valid(true)

			if (
				(initial.bi__phase_angle &&
					convertToNumber(initial.bi__phase_angle) < 3) ||
				convertToNumber(initial.bi__phase_angle) > 25
			) {
				set_bi__phase_angle_valid(false)
			}
		}, [initial.bi__phase_angle])
	}

	if (!initial) return <></>

	return (
		<>
			<FormGroup id="B6C7D8" title="Otras medidas de composición corporal">
				<section className="">
					<div className="text-slate-600 text-base font-medium">
						Bioimpedancia eléctrica
					</div>

					<div className="space-y-3 pt-1">
						<AlertMessage valid={bi__hydratation_valid}>
							<div className="grid grid-cols-12 gap-x-4">
								<div className="col-span-4 flex items-center">
									<label className="text-sm leading-none font-normal w-full block select-none">
										Porcentaje de hidratación
									</label>
								</div>
								<div className="col-span-2 lg:col-span-2">
									<InputNumber
										name="bi__hydratation"
										value={initial.bi__hydratation}
										onChange={setValue}
									/>
								</div>
								<div className="col-span-3 flex items-center">
									<label className="leading-none w-full block select-none">
										%
									</label>
								</div>
							</div>
						</AlertMessage>

						<div className="grid grid-cols-12 gap-x-4">
							<div className="col-span-4 flex items-center">
								<label className="text-sm leading-none font-normal w-full block select-none">
									TBW <br />
									(aguacorporal total)
								</label>
							</div>
							<div className="col-span-2 lg:col-span-2">
								<InputNumber
									name="bi__tbm"
									value={initial.bi__tbm}
									onChange={setValue}
								/>
							</div>
							<div className="col-span-3 flex items-center">
								<label className="leading-none w-full block select-none">
									L
								</label>
							</div>
						</div>

						<div className="grid grid-cols-12 gap-x-4">
							<div className="col-span-4 flex items-center">
								<label className="text-sm leading-none font-normal w-full block select-none">
									ECW <br />
									(agua extracelular)
								</label>
							</div>
							<div className="col-span-2 lg:col-span-2">
								<InputNumber
									name="bi__ecw"
									value={initial.bi__ecw}
									onChange={setValue}
								/>
							</div>
							<div className="col-span-3 flex items-center">
								<label className="leading-none w-full block select-none">
									L
								</label>
							</div>
						</div>

						<div className="grid grid-cols-12 gap-x-4">
							<div className="col-span-4 flex items-center">
								<label className="text-sm leading-none font-normal w-full block select-none">
									ICW <br />
									(agua intracelular)
								</label>
							</div>
							<div className="col-span-2 lg:col-span-2">
								<InputNumber
									name="bi__icw"
									value={initial.bi__icw}
									onChange={setValue}
								/>
							</div>
							<div className="col-span-3 flex items-center">
								<label className="leading-none w-full block select-none">
									L
								</label>
							</div>
						</div>

						<AlertMessage valid={bi__ffm_valid}>
							<div className="grid grid-cols-12 gap-x-4">
								<div className="col-span-4 flex items-center">
									<label className="text-sm leading-none font-normal w-full block select-none">
										FFM <br />
										(masa magra)
									</label>
								</div>
								<div className="col-span-2 lg:col-span-2">
									<InputNumber
										name="bi__ffm"
										value={initial.bi__ffm}
										onChange={setValue}
									/>
								</div>
								<div className="col-span-3 flex items-center">
									<label className="leading-none w-full block select-none">
										kg
									</label>
								</div>
							</div>
						</AlertMessage>

						<AlertMessage valid={bi__fm_valid}>
							<div className="grid grid-cols-12 gap-x-4">
								<div className="col-span-4 flex items-center">
									<label className="text-sm leading-none font-normal w-full block select-none">
										FM <br />
										(masa grasa)
									</label>
								</div>
								<div className="col-span-2 lg:col-span-2">
									<InputNumber
										name="bi__fm"
										value={initial.bi__fm}
										onChange={setValue}
									/>
								</div>
								<div className="col-span-3 flex items-center">
									<label className="leading-none w-full block select-none">
										kg
									</label>
								</div>
							</div>
						</AlertMessage>

						<AlertMessage valid={bi__bcm_valid}>
							<div className="grid grid-cols-12 gap-x-4">
								<div className="col-span-4 flex items-center">
									<label className="text-sm leading-none font-normal w-full block select-none">
										BCM <br />
										(masa celular, kg)
									</label>
								</div>
								<div className="col-span-2 lg:col-span-2">
									<InputNumber
										name="bi__bcm"
										value={initial.bi__bcm}
										onChange={setValue}
									/>
								</div>
								<div className="col-span-3 flex items-center">
									<label className="leading-none w-full block select-none">
										kg
									</label>
								</div>
							</div>
						</AlertMessage>

						<div className="grid grid-cols-12 gap-x-4">
							<div className="col-span-4 flex items-center">
								<label className="text-sm leading-none font-normal w-full block select-none">
									BCM/h† <br />
									(masa celular dividido entre altura)
								</label>
							</div>
							<div className="col-span-2 lg:col-span-2">
								<InputNumber
									name="bi__bcm_h"
									value={initial.bi__bcm_h}
									onChange={setValue}
								/>
							</div>
							<div className="col-span-3 flex items-center">
								<label className="leading-none w-full block select-none">
									kg/m
								</label>
							</div>
						</div>

						<div className="grid grid-cols-12 gap-x-4">
							<div className="col-span-4 flex items-center">
								<label className="text-sm leading-none font-normal w-full block select-none">
									ASMM <br />
									(masa celular apendicular, kg)
								</label>
							</div>
							<div className="col-span-2 lg:col-span-2">
								<InputNumber
									name="bi__asmm"
									value={initial.bi__asmm}
									onChange={setValue}
								/>
							</div>
							<div className="col-span-3 flex items-center">
								<label className="leading-none w-full block select-none">
									kg
								</label>
							</div>
						</div>

						<div className="grid grid-cols-12 gap-x-4">
							<div className="col-span-4 flex items-center">
								<label className="text-sm leading-none font-normal w-full block select-none">
									SMI <br />
									(índice de masa muscular, kg)
								</label>
							</div>
							<div className="col-span-2 lg:col-span-2">
								<InputNumber
									name="bi__smi"
									value={initial.bi__smi}
									onChange={setValue}
								/>
							</div>
							<div className="col-span-3 flex items-center">
								<label className="leading-none w-full block select-none">
									kg
								</label>
							</div>
						</div>

						<div className="grid grid-cols-12 gap-x-4">
							<div className="col-span-4 flex items-center">
								<label className="text-sm leading-none font-normal w-full block select-none">
									Grasa corporal
								</label>
							</div>
							<div className="col-span-2 lg:col-span-2">
								<InputNumber
									name="bi__body_fat"
									value={initial.bi__body_fat}
									onChange={setValue}
								/>
							</div>
							<div className="col-span-3 flex items-center">
								<label className="leading-none w-full block select-none">
									%
								</label>
							</div>
						</div>

						<div className="grid grid-cols-12 gap-x-4">
							<div className="col-span-4 flex items-center">
								<label className="text-sm leading-none font-normal w-full block select-none">
									Resistencia
									<br />
									(Xc/h, Ohm)
								</label>
							</div>
							<div className="col-span-2 lg:col-span-2">
								<InputNumber
									name="bi__resistance"
									value={initial.bi__resistance}
									onChange={setValue}
								/>
							</div>
							<div className="col-span-3 flex items-center">
								<label className="leading-none w-full block select-none">
									Ohm/m
								</label>
							</div>
						</div>

						<div className="grid grid-cols-12 gap-x-4">
							<div className="col-span-4 flex items-center">
								<label className="text-sm leading-none font-normal w-full block select-none">
									Reactancia
									<br />
									(Xc/h, Ohm)
								</label>
							</div>
							<div className="col-span-2 lg:col-span-2">
								<InputNumber
									name="bi__reactance"
									value={initial.bi__reactance}
									onChange={setValue}
								/>
							</div>
							<div className="col-span-3 flex items-center">
								<label className="leading-none w-full block select-none">
									%
								</label>
							</div>
						</div>

						<AlertMessage valid={bi__phase_angle_valid}>
							<div className="grid grid-cols-12 gap-x-4">
								<div className="col-span-4 flex items-center">
									<label className="text-sm leading-none font-normal w-full block select-none">
										Ángulo de fase (PA)
									</label>
								</div>
								<div className="col-span-2 lg:col-span-2">
									<InputNumber
										name="bi__phase_angle"
										value={initial.bi__phase_angle}
										onChange={setValue}
									/>
								</div>
								<div className="col-span-3 flex items-center">
									<label className="leading-none w-full block select-none">
										%
									</label>
								</div>
							</div>
						</AlertMessage>

						<div className="grid grid-cols-12 gap-x-4">
							<div className="col-span-4 flex items-center">
								<label className="text-sm leading-none font-normal w-full block select-none">
									Ángulo de fase estandarizado* <br />
									(PA/talla en m)
								</label>
							</div>
							<div className="col-span-2 lg:col-span-2">
								<InputNumber
									name="bi__standarized_phase_angle"
									value={initial.bi__standarized_phase_angle}
									onChange={setValue}
								/>
							</div>
							<div className="col-span-3 flex items-center"></div>
						</div>

						<div className="text-slate-500 text-sm leading-tight pt-4 space-y-2">
							<p>
								† Masa celular (kg) dividido por altura (BCM/h) en metros, cuyo
								valor normal es entre 14-21 en varones y entre 10-17 en mujeres.
							</p>
							<p>
								* Desviación del ángulo de fase con respecto a su grupo etario.
								Parámetro estadístico que expresa la relación entre el ángulo de
								fase menos el ángulo de fase medio y su desviación estándar.
								Este parámetro es útil para comprender si el valor del ángulo de
								fase relacionado con la edad de la persona es superior o
								inferior al de referencia.
							</p>
						</div>
					</div>
				</section>
			</FormGroup>
		</>
	)
}

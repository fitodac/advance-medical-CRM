import { useCrdStore } from '@/store'
import { FormGroup } from '..'
import { useCheckboxHandleChange } from '../../(hooks)'

export const OtrasMedidasDeComposicionCorporal = () => {
	const { initial } = useCrdStore()
	const { handleChange } = useCheckboxHandleChange('initial')

	if (!initial) return <></>

	return (
		<>
			<FormGroup id="B6C7D8" title="Otras medidas de composición corporal">
				<section className="">
					<div className="text-slate-600 text-base font-medium">
						Bioimpedancia eléctrica
					</div>

					<div className="space-y-3 pt-1">
						<div className="grid grid-cols-12 gap-x-4">
							<div className="col-span-4 flex items-center">
								<label className="text-sm leading-none font-normal w-full block select-none">
									Porcentaje de hidratación
								</label>
							</div>
							<div className="col-span-2 lg:col-span-2">
								<input type="text" name="bi__hydratation" />
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
									TBW <br />
									(aguacorporal total)
								</label>
							</div>
							<div className="col-span-2 lg:col-span-2">
								<input type="text" name="bi__tbm" />
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
								<input type="text" name="bi__ecw" />
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
								<input type="text" name="bi__icw" />
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
									FFM <br />
									(masa magra)
								</label>
							</div>
							<div className="col-span-2 lg:col-span-2">
								<input type="text" name="bi__ffm" />
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
									FM <br />
									(masa grasa)
								</label>
							</div>
							<div className="col-span-2 lg:col-span-2">
								<input type="text" name="bi__fm" />
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
									BCM <br />
									(masa celular, kg)
								</label>
							</div>
							<div className="col-span-2 lg:col-span-2">
								<input type="text" name="bi__bcm" />
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
									BCM/h† <br />
									(masa celular dividido entre altura)
								</label>
							</div>
							<div className="col-span-2 lg:col-span-2">
								<input type="text" name="bi__bcm_h" />
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
								<input type="text" name="bi__asmm" />
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
								<input type="text" name="bi__smi" />
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
								<input type="text" name="bi__body_fat" />
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
								<input type="text" name="bi__hydratation" />
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
								<input type="text" name="bi__hydratation" />
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
									Ángulo de fase (PA)
								</label>
							</div>
							<div className="col-span-2 lg:col-span-2">
								<input type="text" name="bi__hydratation" />
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
									Ángulo de fase estandarizado* <br />
									(PA/talla en m)
								</label>
							</div>
							<div className="col-span-2 lg:col-span-2">
								<input type="text" name="bi__hydratation" />
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

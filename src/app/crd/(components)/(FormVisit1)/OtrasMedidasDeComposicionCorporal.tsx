import { useCrdStore } from '@/store'
import { FormGroup } from '..'
import { useCheckboxHandleChange } from '../../(hooks)'
import { InputMask } from '@/components'

export const OtrasMedidasDeComposicionCorporal = () => {
	const { visit1 } = useCrdStore()

	const { handleChange } = useCheckboxHandleChange()

	return (
		<>
			<FormGroup id="B6C7D8" title="Otras medidas de composición corporal">
				<section className="space-y-8">
					<div>
						<label className="input-checkbox">
							<span className="text-slate-600 text-base font-medium">
								Bioimpedancia eléctrica
							</span>
						</label>

						<div className="space-y-3">
							<div className="grid grid-cols-12 gap-x-4">
								<div className="col-span-4 flex items-center">
									<label className="text-sm leading-none font-normal w-full block select-none">
										Porcentaje de hidratación
									</label>
								</div>

								<div className="col-span-2 lg:col-span-2">
									<InputMask name="bi__hydratation" />
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
									<InputMask name="bi__tbm" />
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
									<InputMask name="bi__ecw" />
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
									<InputMask name="bi__icw" />
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
									<InputMask name="bi__ffm" />
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
									<InputMask name="bi__fm" />
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
									<InputMask name="bi__bcm" />
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
									<InputMask name="bi__bcm_h" />
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
									<InputMask name="bi__asmm" />
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
										(Índice de masa muscular, kg)
									</label>
								</div>

								<div className="col-span-2 lg:col-span-2">
									<InputMask name="bi__smi" />
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
									<InputMask name="bi__body_fat" />
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
										Resistencia <br />
										(Xc/h, Ohm)
									</label>
								</div>

								<div className="col-span-2 lg:col-span-2">
									<InputMask name="bi__resistance" />
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
										Reactancia <br />
										(Xc/h, Ohm)
									</label>
								</div>

								<div className="col-span-2 lg:col-span-2">
									<InputMask name="bi__reactance" />
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
										Ángulo de fase (PA)
									</label>
								</div>

								<div className="col-span-2 lg:col-span-2">
									<InputMask name="bi__phase_angle" />
								</div>

								<div className="col-span-3 flex items-center">
									<label className="leading-none w-full block select-none">
										deg
									</label>
								</div>
							</div>

							<div className="grid grid-cols-12 gap-x-4">
								<div className="col-span-4 flex items-center">
									<label className="text-sm leading-none font-normal w-full block select-none">
										Ángulo de fase estandarizado* <br />
										(PA/talla en m<sup>2</sup>
									</label>
								</div>

								<div className="col-span-2 lg:col-span-2">
									<InputMask name="bi__standarized_phase_angle" />
								</div>

								<div className="col-span-3 flex items-center"></div>
							</div>

							<div className="text-slate-500 text-sm leading-tight pt-4 space-y-2">
								<p>
									† Masa celular (kg) dividido por altura (BCM/h) en metros,
									cuyo valor normal es entre 14-21 en varones y entre 10-17 en
									mujeres.
								</p>
								<p>
									* Desviación del ángulo de fase con respecto a su grupo
									etario. Parámetro estadístico que expresa la relación entre el
									ángulo de fase menos el ángulo de fase medio y su desviación
									estándar. Este parámetro es útil para comprender si el valor
									del ángulo de fase relacionado con la edad de la persona es
									superior o inferior al de referencia.
								</p>
							</div>
						</div>
					</div>

					<div>
						<label className="input-checkbox">
							<span className="text-slate-600 text-base font-medium">DEXA</span>
						</label>

						<div className="space-y-3">
							<div className="grid grid-cols-12 gap-x-4">
								<div className="col-span-4 flex items-center">
									<label className="text-sm leading-none font-normal w-full block select-none">
										FFM (masa magra)
									</label>
								</div>

								<div className="col-span-2 lg:col-span-2">
									<InputMask name="dexa__ffm" />
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
										FFM (masa grasa)
									</label>
								</div>

								<div className="col-span-2 lg:col-span-2">
									<InputMask name="dexa__fm" />
								</div>

								<div className="col-span-3 flex items-center">
									<label className="leading-none w-full block select-none">
										kg
									</label>
								</div>
							</div>
						</div>
					</div>

					<div>
						<label className="input-checkbox">
							<span className="text-slate-600 text-base font-medium">TC</span>
						</label>

						<div className="space-y-3">
							<div className="grid grid-cols-12 gap-x-4">
								<div className="col-span-4 flex items-center">
									<label className="text-sm leading-none font-normal w-full block select-none">
										FFM (masa magra)
									</label>
								</div>

								<div className="col-span-2 lg:col-span-2">
									<InputMask name="tc__ffm" />
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
										FFM (masa grasa)
									</label>
								</div>

								<div className="col-span-2 lg:col-span-2">
									<InputMask name="tc__fm" />
								</div>

								<div className="col-span-3 flex items-center">
									<label className="leading-none w-full block select-none">
										kg
									</label>
								</div>
							</div>
						</div>
					</div>

					<div>
						<label className="input-checkbox">
							<span className="text-slate-600 text-base font-medium">
								Ecografía nutricional
							</span>
						</label>

						<div className="text-slate-500 text-sm leading-tight pt-5 space-y-2">
							<p>
								Realizar de acuerdo con el protocolo SEEN (anotar la referencia
								medida en cm en la que se ha realizado la medición en abdomen y
								recto anterior. Para más información acceder a García-Almeida
								JM, García-García C, Vegas-Aguilar IM, Ballesteros Pomar MD,
								Cornejo-Pareja IM, Fernández Medina B, de Luis Román DA, Bellido
								Guerrero D, Bretón Lesmes I, Tinahones Madueño FJ. Nutritional
								ultrasound®: Conceptualisation, technical considerations and
								standardisation. Endocrinol Diabetes Nutr (Engl Ed). 2023 Mar;70
								Suppl 1:74-84. doi: 10.1016/j.endien.2022.11.010. PMID:
								36935167.) Acceso:
							</p>
							<p>
								<a
									href="https://www.sciencedirect.com/science/article/abs/pii/S2530018022001688?via%3Dihub"
									target="_blank"
									rel="noreferrer"
									className="text-primary italic underline"
								>
									https://www.sciencedirect.com/science/article/abs/pii/S2530018022001688?via%3Dihub
								</a>
							</p>
						</div>

						<div className="space-y-3 pt-5">
							<div className="font-medium">Ecografía abdominal</div>

							<div className="grid grid-cols-12 gap-x-4">
								<div className="col-span-4 flex items-center">
									<label className="text-sm leading-none font-normal w-full block select-none">
										Tejido adiposo total
									</label>
								</div>

								<div className="col-span-2 lg:col-span-2">
									<InputMask name="au__total_adipose_tissue" />
								</div>

								<div className="col-span-3 flex items-center">
									<label className="leading-none w-full block select-none">
										cm
									</label>
								</div>
							</div>

							<div className="grid grid-cols-12 gap-x-4">
								<div className="col-span-4 flex items-center">
									<label className="text-sm leading-none font-normal w-full block select-none">
										Superficial
									</label>
								</div>

								<div className="col-span-2 lg:col-span-2">
									<InputMask name="au__superficial" />
								</div>

								<div className="col-span-3 flex items-center">
									<label className="leading-none w-full block select-none">
										cm
									</label>
								</div>
							</div>

							<div className="grid grid-cols-12 gap-x-4">
								<div className="col-span-4 flex items-center">
									<label className="text-sm leading-none font-normal w-full block select-none">
										Preperitoneal
									</label>
								</div>

								<div className="col-span-2 lg:col-span-2">
									<InputMask name="au__preperitoneal" />
								</div>

								<div className="col-span-3 flex items-center">
									<label className="leading-none w-full block select-none">
										cm
									</label>
								</div>
							</div>
						</div>

						<div className="space-y-3 pt-5">
							<div className="font-medium">Ecografía muscular</div>

							<div className="grid grid-cols-12 gap-x-4">
								<div className="col-span-4 flex items-center">
									<label className="text-sm leading-none font-normal w-full block select-none">
										Área
									</label>
								</div>

								<div className="col-span-2 lg:col-span-2">
									<InputMask name="mu__area" />
								</div>

								<div className="col-span-3 flex items-center">
									<label className="leading-none w-full block select-none">
										cm<sup>2</sup>
									</label>
								</div>
							</div>

							<div className="grid grid-cols-12 gap-x-4">
								<div className="col-span-4 flex items-center">
									<label className="text-sm leading-none font-normal w-full block select-none">
										Circunferencia
									</label>
								</div>

								<div className="col-span-2 lg:col-span-2">
									<InputMask name="mu__circumference" />
								</div>

								<div className="col-span-3 flex items-center">
									<label className="leading-none w-full block select-none">
										cm
									</label>
								</div>
							</div>

							<label className="">Ejes:</label>

							<div className="grid grid-cols-12 gap-x-4">
								<div className="col-span-4 flex items-center">
									<label className="text-sm leading-none font-normal w-full block select-none">
										X-ax
									</label>
								</div>

								<div className="col-span-2 lg:col-span-2">
									<InputMask name="mu__axes_xax" />
								</div>

								<div className="col-span-3 flex items-center">
									<label className="leading-none w-full block select-none">
										cm
									</label>
								</div>
							</div>

							<div className="grid grid-cols-12 gap-x-4">
								<div className="col-span-4 flex items-center">
									<label className="text-sm leading-none font-normal w-full block select-none">
										Y-ax
									</label>
								</div>

								<div className="col-span-2 lg:col-span-2">
									<InputMask name="mu__axes_yax" />
								</div>

								<div className="col-span-3 flex items-center">
									<label className="leading-none w-full block select-none">
										cm
									</label>
								</div>
							</div>

							<div className="grid grid-cols-12 gap-x-4">
								<div className="col-span-4 flex items-center">
									<label className="text-sm leading-none font-normal w-full block select-none">
										Tejido adiposo
									</label>
								</div>

								<div className="col-span-2 lg:col-span-2">
									<InputMask name="mu__adipose_tissue" />
								</div>

								<div className="col-span-3 flex items-center">
									<label className="leading-none w-full block select-none">
										cm
									</label>
								</div>
							</div>
						</div>
					</div>
				</section>
			</FormGroup>
		</>
	)
}

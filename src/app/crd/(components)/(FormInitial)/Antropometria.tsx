import { useCrdStore } from '@/store'
import { FormGroup } from '..'
import { useCheckboxHandleChange } from '../../(hooks)'

export const Antropometria = () => {
	const { initial } = useCrdStore()
	const { handleChange } = useCheckboxHandleChange('initial')

	if (!initial) return <></>

	return (
		<>
			<FormGroup id="L2M3N4" title="Antropometría" required>
				<section className="space-y-3">
					<div className="grid grid-cols-12 gap-x-4">
						<div className="col-span-3 flex items-center">
							<label className="text-sm leading-none font-normal w-full block select-none indent-0">
								Peso corporal actual
							</label>
						</div>
						<div className="col-span-2 lg:col-span-2">
							<input
								type="text"
								name="current_body_weight"
								value={initial.current_body_weight}
								onChange={() => {}}
							/>
						</div>
						<div className="col-span-3 flex items-center">
							<label className="leading-none w-full block select-none">
								kg
							</label>
						</div>
					</div>

					<div className="grid grid-cols-12 gap-x-4">
						<div className="col-span-3 flex items-center">
							<label className="text-sm leading-none font-normal w-full block select-none indent-0">
								Peso corporal habitual (últimos 6 meses)
							</label>
						</div>
						<div className="col-span-2 lg:col-span-2">
							<input
								type="text"
								name="usual_body_weight"
								value={initial.usual_body_weight}
								onChange={() => {}}
							/>
						</div>
						<div className="col-span-3 flex items-center">
							<label className="leading-none w-full block select-none">
								kg
							</label>
						</div>
					</div>

					<div className="grid grid-cols-12 gap-x-4">
						<div className="col-span-3 flex items-center">
							<label className="text-sm leading-none font-normal w-full block select-none indent-0">
								Pérdida en los últimos 6 meses
							</label>
						</div>
						<div className="col-span-2 lg:col-span-2">
							<input
								type="text"
								name="loss_last_six_months"
								readOnly
								style={{ backgroundColor: '#ebfcfdc9' }}
								value={initial.loss_last_six_months}
								onChange={() => {}}
							/>
						</div>
						<div className="col-span-3 flex items-center">
							<label className="leading-none w-full block select-none">
								kg
							</label>
						</div>
					</div>

					<div className="grid grid-cols-12 gap-x-4">
						<div className="col-span-3 flex items-center">
							<label className="text-sm leading-none font-normal w-full block select-none indent-0">
								Porcentaje de pérdida de peso
							</label>
						</div>
						<div className="col-span-2 lg:col-span-2">
							<input
								type="text"
								name="weight_loss_percentage"
								readOnly
								style={{ backgroundColor: '#ebfcfdc9' }}
								value={initial.weight_loss_percentage}
								onChange={() => {}}
							/>
						</div>
						<div className="col-span-3 flex items-center">
							<label className="leading-none w-full block select-none">%</label>
						</div>
					</div>

					<div className="grid grid-cols-12 gap-x-4">
						<div className="col-span-3 flex items-center">
							<label className="text-sm leading-none font-normal w-full block select-none indent-0">
								Altura
							</label>
						</div>
						<div className="col-span-2 lg:col-span-2">
							<input
								type="text"
								name="height"
								value={initial.height}
								onChange={() => {}}
							/>
						</div>
						<div className="col-span-3 flex items-center">
							<label className="leading-none w-full block select-none">
								metros (medida o estimada)
							</label>
						</div>
					</div>

					<div className="grid grid-cols-12 gap-x-4">
						<div className="col-span-3 flex items-center">
							<label className="text-sm leading-none font-normal w-full block select-none indent-0">
								IMC
							</label>
						</div>
						<div className="col-span-2 lg:col-span-2">
							<input
								type="text"
								name="BMI"
								readOnly
								style={{ backgroundColor: '#ebfcfdc9' }}
								value={initial.BMI}
								onChange={() => {}}
							/>
						</div>
						<div className="col-span-3 flex items-center">
							<label className="leading-none w-full block select-none">
								kg/m2
							</label>
						</div>
					</div>

					<div className="grid grid-cols-12 gap-x-4">
						<div className="col-span-3 flex items-center">
							<label className="text-sm leading-none font-normal w-full block select-none indent-0">
								Perímetro de pantorrilla (ajustado por IMC)
							</label>
						</div>
						<div className="col-span-2 lg:col-span-2">
							<input
								type="text"
								name="calf_circumference"
								value={initial.calf_circumference}
								onChange={() => {}}
							/>
						</div>
						<div className="col-span-3 flex items-center">
							<label className="leading-none w-full block select-none">
								cm
							</label>
						</div>
					</div>
				</section>
			</FormGroup>
		</>
	)
}

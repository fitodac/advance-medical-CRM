import { useEffect, useState } from 'react'
import { useCrdStore } from '@/store'
import { FormGroup } from '..'
import { useSetValue } from '../../(hooks)'
import { InputNumber } from '@/components'
import { AlertMessage } from '..'
import {
	calculateLossLastSixMonths,
	calculateWeightLossPercentage,
	calculateBmi,
	convertToNumber,
} from '../../(helpers)'

export const Antropometria = () => {
	const { initial, setInitial } = useCrdStore()

	const [current_body_weight_valid, set_current_body_weight_valid] =
		useState<boolean>(true)
	const [height_valid, set_height_valid] = useState<boolean>(true)
	const [calf_circumference_valid, set_calf_circumference_valid] =
		useState<boolean>(true)
	const [BMI_valid, set_BMI_valid] = useState<boolean>(true)

	const { setValue } = useSetValue('initial')

	if (initial) {
		useEffect(() => {
			setInitial({
				...initial,
				loss_last_six_months: calculateLossLastSixMonths(initial),
				weight_loss_percentage: calculateWeightLossPercentage(initial),
				BMI: calculateBmi(initial),
			})
		}, [
			initial.current_body_weight,
			initial.usual_body_weight,
			initial.height,
			initial.calf_circumference,
		])

		useEffect(() => {
			set_current_body_weight_valid(true)

			if (
				(initial.current_body_weight &&
					convertToNumber(initial.current_body_weight) < 30) ||
				convertToNumber(initial.current_body_weight) > 150
			) {
				set_current_body_weight_valid(false)
			}
		}, [initial.current_body_weight])

		useEffect(() => {
			set_height_valid(true)

			if (
				(initial.height && convertToNumber(initial.height) < 1.3) ||
				convertToNumber(initial.height) > 2
			) {
				set_height_valid(false)
			}
		}, [initial.height])

		useEffect(() => {
			set_calf_circumference_valid(true)

			if (
				(initial.calf_circumference &&
					convertToNumber(initial.calf_circumference) < 20) ||
				convertToNumber(initial.calf_circumference) > 50
			) {
				set_calf_circumference_valid(false)
			}
		}, [initial.calf_circumference])

		useEffect(() => {
			set_BMI_valid(false)

			if (
				(initial.BMI && convertToNumber(initial.BMI) < 15) ||
				convertToNumber(initial.BMI) > 35
			) {
				set_BMI_valid(true)
			}
		}, [initial.BMI])
	}

	if (!initial) return <></>

	return (
		<>
			<FormGroup id="L2M3N4" title="Antropometría" required>
				<section className="space-y-3">
					<AlertMessage valid={current_body_weight_valid}>
						<div className="grid grid-cols-12 gap-x-4">
							<div className="col-span-3 flex items-center">
								<label className="text-sm leading-none font-normal w-full block select-none indent-0">
									Peso corporal actual
								</label>
							</div>
							<div className="col-span-2 lg:col-span-2">
								<InputNumber
									name="current_body_weight"
									value={initial.current_body_weight}
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
						<div className="col-span-3 flex items-center">
							<label className="text-sm leading-none font-normal w-full block select-none indent-0">
								Peso corporal habitual (últimos 6 meses)
							</label>
						</div>
						<div className="col-span-2 lg:col-span-2">
							<InputNumber
								name="usual_body_weight"
								value={initial.usual_body_weight}
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

					<AlertMessage valid={height_valid}>
						<div className="grid grid-cols-12 gap-x-4">
							<div className="col-span-3 flex items-center">
								<label className="text-sm leading-none font-normal w-full block select-none indent-0">
									Altura
								</label>
							</div>
							<div className="col-span-2 lg:col-span-2">
								<InputNumber
									name="height"
									value={initial.height}
									onChange={setValue}
								/>
							</div>
							<div className="col-span-3 flex items-center">
								<label className="leading-none w-full block select-none">
									metros (medida o estimada)
								</label>
							</div>
						</div>
					</AlertMessage>

					<AlertMessage valid={BMI_valid}>
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
					</AlertMessage>

					<AlertMessage valid={calf_circumference_valid}>
						<div className="grid grid-cols-12 gap-x-4">
							<div className="col-span-3 flex items-center">
								<label className="text-sm leading-none font-normal w-full block select-none indent-0">
									Perímetro de pantorrilla <br />
									(ajustado por IMC)
								</label>
							</div>
							<div className="col-span-2 lg:col-span-2">
								<InputNumber
									name="calf_circumference"
									value={initial.calf_circumference}
									onChange={setValue}
								/>
							</div>
							<div className="col-span-3 flex items-center">
								<label className="leading-none w-full block select-none">
									cm
								</label>
							</div>
						</div>
					</AlertMessage>
				</section>
			</FormGroup>
		</>
	)
}

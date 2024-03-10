import { useEffect, useState } from 'react'
import { useCrdStore } from '@/store'
import { useSetValue } from '../../(hooks)'
import { InputNumber } from '@/components'
import { AlertMessage } from '..'
import { convertToNumber } from '../../(helpers)'

export const EcografiaMuscular = () => {
	const { initial } = useCrdStore()
	const { setValue } = useSetValue('initial')

	const [mu__area_valid, set_mu__area_valid] = useState<boolean>(true)
	const [mu__circumference_valid, set_mu__circumference_valid] =
		useState<boolean>(true)
	const [mu__axes_xax_valid, set_mu__axes_xax_valid] = useState<boolean>(true)
	const [mu__axes_yax_valid, set_mu__axes_yax_valid] = useState<boolean>(true)
	const [mu__adipose_tissue_valid, set_mu__adipose_tissue_valid] =
		useState<boolean>(true)

	if (initial) {
		useEffect(() => {
			set_mu__area_valid(true)

			if (initial.mu__area && convertToNumber(initial.mu__area) < 5) {
				set_mu__area_valid(false)
			}
		}, [initial.mu__area])

		useEffect(() => {
			set_mu__circumference_valid(true)

			if (
				initial.mu__circumference &&
				convertToNumber(initial.mu__circumference) > 25
			) {
				set_mu__circumference_valid(false)
			}
		}, [initial.mu__circumference])

		useEffect(() => {
			set_mu__axes_xax_valid(true)

			if (initial.mu__axes_xax && convertToNumber(initial.mu__axes_xax) > 12) {
				set_mu__axes_xax_valid(false)
			}
		}, [initial.mu__axes_xax])

		useEffect(() => {
			set_mu__axes_yax_valid(true)

			if (initial.mu__axes_yax && convertToNumber(initial.mu__axes_yax) > 12) {
				set_mu__axes_yax_valid(false)
			}
		}, [initial.mu__axes_yax])

		useEffect(() => {
			set_mu__adipose_tissue_valid(true)

			if (
				initial.mu__adipose_tissue &&
				convertToNumber(initial.mu__adipose_tissue) > 12
			) {
				set_mu__adipose_tissue_valid(false)
			}
		}, [initial.mu__adipose_tissue])
	}

	if (!initial) return <></>

	return (
		<>
			<section className="">
				<div className="text-slate-600 text-base font-medium">
					Ecografía muscular
				</div>

				<div className="space-y-3">
					<AlertMessage valid={mu__area_valid}>
						<div className="grid grid-cols-12 gap-x-4">
							<div className="col-span-4 flex items-center">
								<label className="text-sm leading-none font-normal w-full block select-none indent-0">
									Área
								</label>
							</div>
							<div className="col-span-2 lg:col-span-2">
								<InputNumber
									name="mu__area"
									value={initial.mu__area}
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

					<AlertMessage valid={mu__circumference_valid}>
						<div className="grid grid-cols-12 gap-x-4">
							<div className="col-span-4 flex items-center">
								<label className="text-sm leading-none font-normal w-full block select-none indent-0">
									Circunferencia
								</label>
							</div>
							<div className="col-span-2 lg:col-span-2">
								<InputNumber
									name="mu__circumference"
									value={initial.mu__circumference}
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
				</div>

				<div className="pt-2">
					<label>Ejes:</label>
				</div>

				<div className="space-y-3">
					<AlertMessage valid={mu__axes_xax_valid}>
						<div className="grid grid-cols-12 gap-x-4">
							<div className="col-span-4 flex items-center">
								<label className="text-sm leading-none font-normal w-full block select-none indent-0">
									X-ax
								</label>
							</div>
							<div className="col-span-2 lg:col-span-2">
								<InputNumber
									name="mu__axes_xax"
									value={initial.mu__axes_xax}
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

					<AlertMessage valid={mu__axes_yax_valid}>
						<div className="grid grid-cols-12 gap-x-4">
							<div className="col-span-4 flex items-center">
								<label className="text-sm leading-none font-normal w-full block select-none indent-0">
									Y-ax
								</label>
							</div>
							<div className="col-span-2 lg:col-span-2">
								<InputNumber
									name="mu__axes_yax"
									value={initial.mu__axes_yax}
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
				</div>

				<div className="pt-8">
					<AlertMessage valid={mu__adipose_tissue_valid}>
						<div className="grid grid-cols-12 gap-x-4">
							<div className="col-span-4 flex items-center">
								<label className="text-sm leading-none font-normal w-full block select-none indent-0">
									Tejido adiposo
								</label>
							</div>
							<div className="col-span-2 lg:col-span-2">
								<InputNumber
									name="mu__adipose_tissue"
									value={initial.mu__adipose_tissue}
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
				</div>
			</section>
		</>
	)
}

import { useEffect, useState } from 'react'
import { useCrdStore } from '@/store'
import { useSetValue } from '../../(hooks)'
import { InputNumber } from '@/components'
import { AlertMessage } from '..'
import { convertToNumber } from '../../(helpers)'

export const EcografiaAbdominal = () => {
	const { initial } = useCrdStore()
	const { setValue } = useSetValue('initial')

	const [au__total_adipose_tissue_valid, set_au__total_adipose_tissue_valid] =
		useState<boolean>(true)
	const [au__superficial_valid, set_au__superficial_valid] =
		useState<boolean>(true)
	const [au__preperitoneal_valid, set_au__preperitoneal_valid] =
		useState<boolean>(true)

	if (initial) {
		useEffect(() => {
			set_au__total_adipose_tissue_valid(true)

			if (
				initial.au__total_adipose_tissue &&
				convertToNumber(initial.au__total_adipose_tissue) > 12
			) {
				set_au__total_adipose_tissue_valid(false)
			}
		}, [initial.au__total_adipose_tissue])

		useEffect(() => {
			set_au__superficial_valid(true)

			if (
				initial.au__superficial &&
				convertToNumber(initial.au__superficial) > 12
			) {
				set_au__superficial_valid(false)
			}
		}, [initial.au__superficial])

		useEffect(() => {
			set_au__preperitoneal_valid(true)

			if (
				initial.au__preperitoneal &&
				convertToNumber(initial.au__preperitoneal) > 12
			) {
				set_au__preperitoneal_valid(false)
			}
		}, [initial.au__preperitoneal])
	}

	if (!initial) return <></>

	return (
		<>
			<section className="">
				<div className="text-slate-600 text-base font-medium">
					Ecografía abdominal
				</div>

				<div className="space-y-3">
					<AlertMessage valid={au__total_adipose_tissue_valid}>
						<div className="grid grid-cols-12 gap-x-4">
							<div className="col-span-4 flex items-center">
								<label className="text-sm leading-none font-normal w-full block select-none">
									Tejido adiposo total
								</label>
							</div>
							<div className="col-span-2 lg:col-span-2">
								<InputNumber
									name="au__total_adipose_tissue"
									value={initial.au__total_adipose_tissue}
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

					<AlertMessage valid={au__superficial_valid}>
						<div className="grid grid-cols-12 gap-x-4">
							<div className="col-span-4 flex items-center">
								<label className="text-sm leading-none font-normal w-full block select-none">
									Superficial
								</label>
							</div>
							<div className="col-span-2 lg:col-span-2">
								<InputNumber
									name="au__superficial"
									value={initial.au__superficial}
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

					<AlertMessage valid={au__preperitoneal_valid}>
						<div className="grid grid-cols-12 gap-x-4">
							<div className="col-span-4 flex items-center">
								<label className="text-sm leading-none font-normal w-full block select-none">
									Preperitoneal
								</label>
							</div>
							<div className="col-span-2 lg:col-span-2">
								<InputNumber
									name="au__preperitoneal"
									value={initial.au__preperitoneal}
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

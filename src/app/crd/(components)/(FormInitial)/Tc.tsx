import { useCrdStore } from '@/store'
import { useSetValue } from '../../(hooks)'
import { InputNumber } from '@/components'

export const Tc = () => {
	const { initial } = useCrdStore()
	const { setValue } = useSetValue('initial')

	if (!initial) return <></>

	return (
		<>
			<section className="">
				<div className="text-slate-600 text-base font-medium">TC</div>

				<div className="space-y-3">
					<div className="grid grid-cols-12 gap-x-4">
						<div className="col-span-4 flex items-center">
							<label className="text-sm leading-none font-normal w-full block select-none">
								FFM (masa magra)
							</label>
						</div>
						<div className="col-span-2 lg:col-span-2">
							<InputNumber
								name="tc__ffm"
								value={initial.tc__ffm}
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
								FFM (masa grasa)
							</label>
						</div>
						<div className="col-span-2 lg:col-span-2">
							<InputNumber
								name="tc__fm"
								value={initial.tc__fm}
								onChange={setValue}
							/>
						</div>
						<div className="col-span-3 flex items-center">
							<label className="leading-none w-full block select-none">
								kg
							</label>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

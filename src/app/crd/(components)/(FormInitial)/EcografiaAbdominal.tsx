import { useCrdStore } from '@/store'
import { useCheckboxHandleChange } from '../../(hooks)'

export const EcografiaAbdominal = () => {
	const { initial } = useCrdStore()
	const { handleChange } = useCheckboxHandleChange('initial')

	if (!initial) return <></>

	return (
		<>
			<section className="">
				<div className="text-slate-600 text-base font-medium">
					Ecografía abdominal
				</div>

				<div className="space-y-3">
					<div className="grid grid-cols-12 gap-x-4">
						<div className="col-span-4 flex items-center">
							<label className="text-sm leading-none font-normal w-full block select-none">
								Tejido adiposo total
							</label>
						</div>
						<div className="col-span-2 lg:col-span-2">
							<input type="text" name="au__total_adipose_tissue" />
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
							<input type="text" name="au__superficial" />
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
							<input type="text" name="au__preperitoneal" />
						</div>
						<div className="col-span-3 flex items-center">
							<label className="leading-none w-full block select-none">
								cm
							</label>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

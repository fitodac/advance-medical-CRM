import { useCrdStore } from '@/store'
import { useCheckboxHandleChange } from '../../(hooks)'

export const EcografiaMuscular = () => {
	const { initial } = useCrdStore()
	const { handleChange } = useCheckboxHandleChange('initial')

	if (!initial) return <></>

	return (
		<>
			<section className="">
				<div className="text-slate-600 text-base font-medium">
					Ecografía muscular
				</div>

				<div className="space-y-3">
					<div className="grid grid-cols-12 gap-x-4">
						<div className="col-span-4 flex items-center">
							<label className="text-sm leading-none font-normal w-full block select-none indent-0">
								Área
							</label>
						</div>
						<div className="col-span-2 lg:col-span-2">
							<input type="text" name="mu__area" />
						</div>
						<div className="col-span-3 flex items-center">
							<label className="leading-none w-full block select-none">
								cm
							</label>
						</div>
					</div>

					<div className="grid grid-cols-12 gap-x-4">
						<div className="col-span-4 flex items-center">
							<label className="text-sm leading-none font-normal w-full block select-none indent-0">
								Circunferencia
							</label>
						</div>
						<div className="col-span-2 lg:col-span-2">
							<input type="text" name="mu__circumference" />
						</div>
						<div className="col-span-3 flex items-center">
							<label className="leading-none w-full block select-none">
								cm
							</label>
						</div>
					</div>
				</div>

				<div className="pt-2">
					<label>Ejes:</label>
				</div>

				<div className="space-y-3">
					<div className="grid grid-cols-12 gap-x-4">
						<div className="col-span-4 flex items-center">
							<label className="text-sm leading-none font-normal w-full block select-none indent-0">
								X-ax
							</label>
						</div>
						<div className="col-span-2 lg:col-span-2">
							<input type="text" name="mu__axes_xax" />
						</div>
						<div className="col-span-3 flex items-center">
							<label className="leading-none w-full block select-none">
								cm
							</label>
						</div>
					</div>

					<div className="grid grid-cols-12 gap-x-4">
						<div className="col-span-4 flex items-center">
							<label className="text-sm leading-none font-normal w-full block select-none indent-0">
								Y-ax
							</label>
						</div>
						<div className="col-span-2 lg:col-span-2">
							<input type="text" name="mu__axes_yax" />
						</div>
						<div className="col-span-3 flex items-center">
							<label className="leading-none w-full block select-none">
								cm
							</label>
						</div>
					</div>
				</div>

				<div className="pt-8">
					<div className="grid grid-cols-12 gap-x-4">
						<div className="col-span-4 flex items-center">
							<label className="text-sm leading-none font-normal w-full block select-none indent-0">
								Tejido adiposo
							</label>
						</div>
						<div className="col-span-2 lg:col-span-2">
							<input type="text" name="mu__adipose_tissue" />
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

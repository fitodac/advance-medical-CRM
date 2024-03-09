import { useCrdStore } from '@/store'
import { FormGroup } from '..'
import { useCheckboxHandleChange } from '../../(hooks)'
import { InputMask } from '@/components'

export const Antropometria = () => {
	const { visit1 } = useCrdStore()

	const { handleChange } = useCheckboxHandleChange()

	return (
		<>
			<FormGroup id="L2M3N4" title="Antropometría" required>
				<section className="space-y-3">
					<div className="grid grid-cols-12 gap-x-4">
						<div className="col-span-3 flex items-center">
							<label className="text-sm leading-none font-normal w-full block select-none">
								Peso corporal actual
							</label>
						</div>

						<div className="col-span-2 lg:col-span-2">
							<InputMask />
						</div>

						<div className="col-span-3 flex items-center">
							<label className="leading-none w-full block select-none">
								Kg
							</label>
						</div>
					</div>

					<div className="grid grid-cols-12 gap-x-4">
						<div className="col-span-3 flex items-center">
							<label className="text-sm leading-none font-normal w-full block select-none">
								Peso corporal inicial
							</label>
						</div>

						<div className="col-span-2 lg:col-span-2">
							<InputMask />
						</div>

						<div className="col-span-3 flex items-center">
							<label className="leading-none w-full block select-none">
								Kg
							</label>
						</div>
					</div>

					<div className="grid grid-cols-12 gap-x-4">
						<div className="col-span-3 flex items-center">
							<label className="text-sm leading-none font-normal w-full block select-none">
								Porcentaje de diferencia
							</label>
						</div>

						<div className="col-span-2 lg:col-span-2">
							<InputMask />
						</div>

						<div className="col-span-3 flex items-center">
							<label className="leading-none w-full block select-none">%</label>
						</div>
					</div>

					<div className="grid grid-cols-12 gap-x-4">
						<div className="col-span-3 flex items-center">
							<label className="text-sm leading-none font-normal w-full block select-none">
								IMC actual
							</label>
						</div>

						<div className="col-span-2 lg:col-span-2">
							<InputMask />
						</div>

						<div className="col-span-3 flex items-center">
							<label className="leading-none w-full block select-none">
								kg/m2
							</label>
						</div>
					</div>

					<div className="grid grid-cols-12 gap-x-4">
						<div className="col-span-3 flex items-center">
							<label className="text-sm font-normal w-full block select-none">
								Perímetro de pantorrilla <br />
								(ajustado por IMC)
							</label>
						</div>

						<div className="col-span-2 lg:col-span-2">
							<InputMask />
						</div>

						<div className="col-span-3 flex items-center">
							<label className="leading-none w-full block select-none">
								cm
							</label>
						</div>
					</div>

					<div className="text-slate-400 text-xs">
						*En caso de que el seguimiento se realice de manera remota
						(telefónicamente, se pedirá al paciente/cuidador que comunique los
						datos)
					</div>
				</section>
			</FormGroup>
		</>
	)
}

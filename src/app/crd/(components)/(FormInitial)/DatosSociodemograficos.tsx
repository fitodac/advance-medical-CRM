import { useCrdStore } from '@/store'
import { useSetValue, useCheckboxHandleChange } from '../../(hooks)'
import { InputDate } from '@/components'

export const DatosSociodemograficos = () => {
	const { initial } = useCrdStore()
	const { handleChange } = useCheckboxHandleChange('initial')
	const { setValue } = useSetValue('initial')

	if (!initial) return <></>

	return (
		<>
			<section className="grid grid-cols-3 gap-x-10 justify-between relative">
				<div id="M1N2O3" className="-top-16 absolute" />

				<div className="space-y-2">
					<label className="select-none leading-tight block">
						Fecha de nacimiento (día/mes/año)
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							className="fill-red-600 w-3 pl-0.5 inline -top-1 relative"
						>
							<path d="M12.9993 3L12.9991 10.267L19.2935 6.63397L20.2935 8.36602L14.0001 11.999L20.2935 15.634L19.2935 17.366L12.9991 13.732L12.9993 21H10.9993L10.9991 13.732L4.70508 17.366L3.70508 15.634L9.99808 12L3.70508 8.36602L4.70508 6.63397L10.9991 10.267L10.9993 3H12.9993Z"></path>
						</svg>
					</label>

					<div className="max-w-[150px]">
						<InputDate
							name="birth_date"
							value={initial.birth_date}
							onChange={setValue}
						/>
					</div>
				</div>

				<div className="space-y-1">
					<label>
						Sexo
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							className="fill-red-600 w-3 pl-0.5 inline -top-1 relative"
						>
							<path d="M12.9993 3L12.9991 10.267L19.2935 6.63397L20.2935 8.36602L14.0001 11.999L20.2935 15.634L19.2935 17.366L12.9991 13.732L12.9993 21H10.9993L10.9991 13.732L4.70508 17.366L3.70508 15.634L9.99808 12L3.70508 8.36602L4.70508 6.63397L10.9991 10.267L10.9993 3H12.9993Z"></path>
						</svg>
					</label>

					<div className="flex gap-x-6">
						<label className="input-checkbox">
							<input
								type="radio"
								name="gender"
								value="hombre"
								checked={initial.gender === 'hombre'}
								onChange={handleChange}
							/>
							<span>Hombre</span>
						</label>

						<label className="input-checkbox">
							<input
								type="radio"
								name="gender"
								value="mujer"
								checked={initial.gender === 'mujer'}
								onChange={handleChange}
							/>
							<span>Mujer</span>
						</label>
					</div>
				</div>
			</section>
		</>
	)
}

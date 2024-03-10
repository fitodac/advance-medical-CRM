import { useCrdStore } from '@/store'
import { InputDate } from '@/components'
import { useSetDate } from '../../(hooks)'

export const Date = () => {
	const { initial, patient } = useCrdStore()
	const { setDate } = useSetDate('initial')

	if (!initial) return <></>

	return (
		<>
			<div className="space-y-2">
				<div className="leading-none mt-4">
					<label htmlFor="">Paciente</label>
					<div className="text-xl font-semibold">{patient?.code}</div>
				</div>

				<div className="space-y-2">
					<label className="select-none leading-tight block">
						Fecha (día/mes/año)
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							className="fill-red-600 w-3 pl-0.5 inline -top-1 relative"
						>
							<path d="M12.9993 3L12.9991 10.267L19.2935 6.63397L20.2935 8.36602L14.0001 11.999L20.2935 15.634L19.2935 17.366L12.9991 13.732L12.9993 21H10.9993L10.9991 13.732L4.70508 17.366L3.70508 15.634L9.99808 12L3.70508 8.36602L4.70508 6.63397L10.9991 10.267L10.9993 3H12.9993Z" />
						</svg>
					</label>

					<div className="max-w-[150px]">
						<InputDate
							name="date"
							value={initial.date}
							onChange={(e) => setDate(e)}
						/>
					</div>
				</div>

				<div className="text-pink-500 text-sm leading-tight mt-1">
					Complete la fecha de la visita
				</div>
			</div>
		</>
	)
}

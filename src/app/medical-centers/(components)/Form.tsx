'use client'
import { useState, ChangeEvent, FormEvent } from 'react'
import { ButtonLink, Button } from '@/components'
import { useHelpers } from '@/hooks'
import { useForm } from '../(hooks)'
import type { MedicalCenter } from '../types'

interface Props {
	center?: MedicalCenter
}

export const Form = ({ center }: Props) => {
	const [state, setState] = useState(
		center ? { name: center.name, code: center.code } : { name: '', code: '' }
	)

	const { toCapitalize } = useHelpers()

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target
		const val: string = name === 'name' ? toCapitalize(value) : value
		setState({ ...state, [name]: val })
	}

	const submit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
	}

	return (
		<>
			<section className="max-w-lg pt-5">
				<form onSubmit={submit}>
					<div className="space-y-4">
						<div className="space-y-2">
							<label className="select-none leading-tight block">Nombre</label>
							<input
								type="text"
								name="name"
								value={state.name}
								onChange={handleChange}
							/>
						</div>

						<div className="w-32">
							<div className="space-y-2">
								<label className="select-none leading-tight block">
									Código
								</label>
								<input
									type="text"
									name="code"
									value={state.code}
									className="uppercase"
									maxLength={5}
									onChange={handleChange}
								/>
							</div>
						</div>

						<div className="flex gap-x-5 justify-between pt-4">
							<div>
								<ButtonLink href="/medical-centers">Cancelar</ButtonLink>
							</div>

							<div className="w-32">
								<Button className="bg-primary border-primary text-white w-full">
									Guardar
								</Button>
							</div>
						</div>
					</div>
				</form>
			</section>

			<pre className="mt-10">{JSON.stringify(center, null, 2)}</pre>
		</>
	)
}

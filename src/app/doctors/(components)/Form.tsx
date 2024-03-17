'use client'
import { useState, ChangeEvent, FormEvent } from 'react'
import { ButtonLink, Button } from '@/components'
import type { Doctor } from '../types'

interface Props {
	doctor?: Doctor
}

export const Form = ({ doctor }: Props) => {
	const [state, setState] = useState(
		doctor
			? { firstname: doctor.firstname, lastname: doctor.lastname }
			: { firstname: '', lastname: '' }
	)

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target
		setState({ ...state, [name]: value })
	}

	const submit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
	}

	return (
		<>
			<section className="max-w-3xl pt-5">
				<form onSubmit={submit}>
					<div className="grid grid-cols-2 gap-x-5 gap-y-4">
						<div className="space-y-1">
							<label className="select-none leading-tight block">Nombre</label>
							<input type="text" name="firstname" value={state.firstname}
								onChange={handleChange} />
						</div>

						<div className="space-y-1">
							<label className="select-none leading-tight block">
								Apellido
							</label>
							<input type="text" name="lastname" />
						</div>

						<div className="space-y-1">
							<label className="select-none leading-tight block">Email</label>
							<input type="text" name="email" />
						</div>

						<div className="space-y-1">
							<label className="select-none leading-tight block">
								Especialidad
							</label>
							<select name="specialty_id">
								<option value="">Selecciona una especialidad</option>
							</select>
						</div>

						<div className="space-y-1">
							<label className="select-none leading-tight block">
								Centro médico
							</label>

							<select name="specialty_id">
								<option value="">Selecciona una centro médico</option>
							</select>
						</div>
					</div>

					<div className="flex gap-x-5 justify-between pt-8">
						<div>
							<ButtonLink href="/doctors">Cancelar</ButtonLink>
						</div>

						<div className="w-32">
							<Button className="bg-primary border-primary text-white w-full">
								{doctor?.id ? 'Actualizar' : 'Guardar'}
							</Button>
						</div>
					</div>
				</form>
			</section>

			<pre className="mt-10">{JSON.stringify(doctor, null, 2)}</pre>
		</>
	)
}

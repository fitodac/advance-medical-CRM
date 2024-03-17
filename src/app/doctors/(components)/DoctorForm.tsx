'use client'
import { useState, ChangeEvent, FormEvent } from 'react'
import { ButtonLink, Button } from '@/components'
import type { Doctor } from '../types'

interface Props {
	doctor?: Doctor
}
export const DoctorForm = ({ doctor }: Props) => {
	const [state, setState] = useState(
		doctor
			? {
					firstname: doctor.firstname,
					lastname: doctor.lastname,
					role: doctor.role,
			  }
			: { firstname: '', lastname: '', role: '' }
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
			<form onSubmit={submit}>
				<div className="font-medium leading-tight">Datos del doctor</div>

				<div className="grid grid-cols-2 gap-x-5 gap-y-4 mt-6">
					<div className="space-y-1">
						<label className="select-none leading-tight block">
							Especialidad
						</label>
						<select name="" id="">
							<option value="">Selecciona una especialidad</option>
						</select>
					</div>

					<div className="space-y-1">
						<label className="select-none leading-tight block">
							Centro médico
						</label>
						<select name="" id="">
							<option value="">Selecciona un centro médico</option>
						</select>
					</div>
				</div>

				<div className="flex gap-x-5 justify-between pt-8">
					<div>
						<ButtonLink href="/users">Cancelar</ButtonLink>
					</div>

					<div className="w-32">
						<Button className="bg-primary border-primary text-white w-full">
							{doctor?.id ? 'Actualizar' : 'Guardar'}
						</Button>
					</div>
				</div>
			</form>
		</>
	)
}

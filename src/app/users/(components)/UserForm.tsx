'use client'
import { useState, ChangeEvent, FormEvent } from 'react'
import { ButtonLink, Button } from '@/components'
import type { User } from '../types'

interface Props {
	user?: User
}

export const UserForm = ({ user }: Props) => {
	const [state, setState] = useState(
		user
			? { firstname: user.firstname, lastname: user.lastname, role: user.role }
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
				<div className="font-medium leading-tight">Datos de usuario</div>

				<div className="grid grid-cols-2 gap-x-5 gap-y-4 mt-4">
					<div className="space-y-1">
						<label className="select-none leading-tight block">Nombre</label>
						<input
							type="text"
							name="firstname"
							value={state.firstname}
							onChange={handleChange}
						/>
					</div>

					<div className="space-y-1">
						<label className="select-none leading-tight block">Apellido</label>
						<input
							type="text"
							name="lastname"
							value={state.lastname}
							onChange={handleChange}
						/>
					</div>

					<div className="space-y-1">
						<label className="select-none leading-tight block">Email</label>
						<input
							type="text"
							name="email"
							value={state.email}
							onChange={handleChange}
						/>
					</div>

					<div className="space-y-1">
						<label className="select-none leading-tight block">
							Rol de usuario
						</label>

						<select name="role" value={state.role} onChange={handleChange}>
							<option value="">Selecciona un rol</option>
							<option value="doctor">Doctor</option>
							<option value="admin">Administrador</option>
						</select>
					</div>
				</div>

				<div className="flex gap-x-5 justify-between pt-8">
					<div>
						<ButtonLink href="/users">Cancelar</ButtonLink>
					</div>

					<div className="w-32">
						<Button className="bg-primary border-primary text-white w-full">
							{user?.id ? 'Actualizar' : 'Guardar'}
						</Button>
					</div>
				</div>
			</form>
		</>
	)
}

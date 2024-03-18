'use client'
import { ChangeEvent } from 'react'
import { useUserStore } from '@/store'

export const UserForm = ({ roleHidden = false }: { roleHidden?: boolean }) => {
	const { form, setForm, errors, setErrors } = useUserStore()

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target
		const newForm = { ...form }

		if ('role' === name && 'doctor' !== value) {
			newForm.specialty_id = null
			newForm.center_id = null
		}

		setForm({ ...newForm, [name]: value })
		setErrors({ ...errors, [name]: false })
	}

	return (
		<>
			<div className="font-medium leading-tight">Datos de usuario</div>

			<div className="grid grid-cols-2 gap-x-5 gap-y-4 mt-4">
				<div className="space-y-1">
					<label className="select-none leading-tight block">Nombre</label>
					<input
						type="text"
						name="firstname"
						value={form.firstname}
						className={errors.firstname ? 'input-error' : ''}
						onChange={handleChange}
					/>
					{errors.firstname && (
						<span className="text-pink-500 text-xs pl-1">
							{errors.firstname}
						</span>
					)}
				</div>

				<div className="space-y-1">
					<label className="select-none leading-tight block">Apellido</label>
					<input
						type="text"
						name="lastname"
						value={form.lastname}
						className={errors.lastname ? 'input-error' : ''}
						onChange={handleChange}
					/>
					{errors.lastname && (
						<span className="text-pink-500 text-xs pl-1">
							{errors.lastname}
						</span>
					)}
				</div>

				<div className="space-y-1">
					<label className="select-none leading-tight block">Email</label>
					<input
						type="text"
						name="email"
						value={form.email}
						className={errors.email ? 'input-error' : ''}
						onChange={handleChange}
					/>
					{errors.email && (
						<span className="text-pink-500 text-xs pl-1">{errors.email}</span>
					)}
				</div>

				<div className="space-y-1">
					{!roleHidden ? (
						<>
							<label className="select-none leading-tight block">
								Rol de usuario
							</label>

							<select
								name="role"
								value={form.role}
								className={errors.role ? 'input-error' : ''}
								onChange={handleChange}
							>
								{!form.role && <option value="">Selecciona un rol</option>}
								<option value="doctor">Doctor</option>
								<option value="admin">Administrador</option>
							</select>
							{errors.role && (
								<span className="text-pink-500 text-xs pl-1">
									{errors.role}
								</span>
							)}
						</>
					) : (
						<input type="hidden" defaultValue={form.role} readOnly />
					)}
				</div>
			</div>
		</>
	)
}

'use client'
import { useState, ChangeEvent, FormEvent } from 'react'
import type { User } from 'next-auth'
import type { Doctor, FormData, FormPassword } from '../type'
import { useSaveProfile, useSavePassword } from '../(hooks)'
import { toast } from 'react-toastify'

interface Props {
	specialties: { id: number; name: string }[]
	profile: User & {
		doctor: Doctor
	}
}

export const Form = ({ specialties, profile }: Props) => {
	const [state, setState] = useState<FormData>({
		firstname: profile.firstname ?? '',
		lastname: profile.lastname ?? '',
		specialty_id: profile.doctor.specialty_id ?? null,
	})

	const [pwd, setPwd] = useState<FormPassword>({
		password: '',
		new_password: '',
	})

	const { saveProfile } = useSaveProfile()
	const { savePassword } = useSavePassword()

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target
		setState({ ...state, [name]: value })
	}

	const handleChangePwd = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target
		setPwd({ ...pwd, [name]: value })
	}

	const submitProfile = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const resp = await saveProfile({ id: profile.id, form: state })

		if (!resp) {
			toast.error('Error al enviar el formulario')
		} else if (resp.success) {
			toast.success(resp.message.message)
		} else {
			toast.error(resp.error.message)
		}
	}

	const submitPassword = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const resp = await savePassword({ id: profile.id, form: pwd })

		if (!resp) {
			toast.error('Error al guardar la contraseña')
		} else if (resp.success) {
			toast.success(resp.message.message)
			setPwd({ password: '', new_password: '' })
		} else {
			toast.error(resp.error.message)
		}
	}

	return (
		<>
			<div className="max-w-3xl pt-5">
				<form onSubmit={submitProfile}>
					<div className="">
						<h2 className="font-semibold leading-none select-none">
							Mi cuenta
						</h2>

						<div className="grid gap-x-8 gap-y-4 mt-3 lg:grid-cols-2">
							<div className="space-y-2">
								<label className="select-none leading-tight block">Email</label>
								<input
									type="text"
									name="email"
									defaultValue={profile.email ?? ''}
									readOnly
									disabled
								/>
							</div>

							<div className="space-y-2">
								<label className="select-none leading-tight block">Rol</label>
								<input
									type="text"
									name="role"
									defaultValue={profile.role ?? ''}
									readOnly
									disabled
								/>
							</div>
						</div>
					</div>

					<hr className="my-9" />

					<div className="">
						<h2 className="font-semibold leading-none select-none">
							Datos personales
						</h2>

						<div className="grid gap-x-8 gap-y-4 mt-3 lg:grid-cols-2">
							<div className="space-y-2">
								<label className="select-none leading-tight block">
									Nombre
								</label>
								<input
									type="text"
									name="firstname"
									value={state.firstname}
									onChange={handleChange}
								/>
							</div>

							<div className="space-y-2">
								<label className="select-none leading-tight block">
									Apellido
								</label>
								<input
									type="text"
									name="lastname"
									value={state.lastname}
									onChange={handleChange}
								/>
							</div>
						</div>
					</div>

					<hr className="my-9" />

					<div className="">
						<h2 className="font-semibold leading-none select-none">
							Datos de doctor
						</h2>

						<div className="grid gap-x-8 gap-y-4 mt-3 lg:grid-cols-2">
							<div className="space-y-2">
								<label className="select-none leading-tight block">
									Especialidad
								</label>
								<select
									name="specialty_id"
									value={state.specialty_id}
									onChange={handleChange}
								>
									<option value="">--- Selecciona una opción ---</option>
									{specialties.map((specialty) => (
										<option key={specialty.id} value={specialty.id}>
											{specialty.name}
										</option>
									))}
								</select>
							</div>

							<div className="space-y-2">
								{profile.doctor && (
									<>
										<label className="select-none leading-tight block">
											Centro médico
										</label>
										<p className="text-slate-500 font-semibold">
											{profile.doctor.center.name}
										</p>
										<small className="text-slate-400 text-xs">
											COD. {profile.doctor.center.code}
										</small>
									</>
								)}
							</div>
						</div>
					</div>

					<div className="my-9">
						<button
							type="submit"
							className="btn bg-primary border-primary text-white"
						>
							Actualizar
						</button>
					</div>
				</form>

				<hr className="my-16" />

				<form onSubmit={submitPassword}>
					<div className="">
						<div className="space-y-2">
							<h2 className="font-semibold leading-none select-none">
								Seguridad
							</h2>
							<div className="text-slate-500 text-sm select-none">
								Cambiar contraseña
							</div>
						</div>

						<div className="grid gap-x-8 gap-y-4 mt-3 lg:grid-cols-2">
							<div className="space-y-2">
								<label className="select-none leading-tight block">
									Contraseña actual
								</label>
								<input
									type="text"
									name="password"
									value={pwd.password}
									onChange={handleChangePwd}
								/>
							</div>

							<div className="space-y-2">
								<label className="select-none leading-tight block">
									Nueva contraseña
								</label>
								<input
									type="text"
									name="new_password"
									value={pwd.new_password}
									onChange={handleChangePwd}
								/>
							</div>
						</div>

						<div className="pt-8">
							<button
								type="submit"
								className="btn bg-primary border-primary text-white"
							>
								Actualizar
							</button>
						</div>
					</div>
				</form>
			</div>

			<div className="h-20" />
		</>
	)
}

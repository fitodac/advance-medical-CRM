'use client'
import { ChangeEvent } from 'react'
import { useUserStore } from '@/store'
import type { SpecialtiesList, MedicalCentersList } from 'types'

interface Props {
	specialties: SpecialtiesList[]
	medicalCenters: MedicalCentersList[]
}

export const DoctorForm = ({ specialties, medicalCenters }: Props) => {
	const { form, setForm } = useUserStore()

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target
		setForm({ ...form, [name]: parseInt(value) })
	}

	return (
		<>
			<div className="font-medium leading-tight">Datos del doctor</div>

			<div className="grid grid-cols-2 gap-x-5 gap-y-4 mt-6">
				<div className="space-y-1">
					<label className="select-none leading-tight block">
						Especialidad
					</label>
					<select
						name="specialty_id"
						value={form.specialty_id ?? ''}
						onChange={handleChange}
					>
						{!form.specialty_id && (
							<option value="">Selecciona una especialidad</option>
						)}
						{specialties.map((e) => (
							<option key={e.name} value={e.id}>
								{e.name}
							</option>
						))}
					</select>
				</div>

				<div className="space-y-1">
					<label className="select-none leading-tight block">
						Centro médico
					</label>
					<select
						name="center_id"
						value={form.center_id ?? ''}
						onChange={handleChange}
					>
						{!form.center_id && (
							<option value="">Selecciona un centro médico</option>
						)}
						{medicalCenters.map((e) => (
							<option key={e.code} value={e.id}>
								{e.name}
							</option>
						))}
					</select>
				</div>
			</div>
		</>
	)
}

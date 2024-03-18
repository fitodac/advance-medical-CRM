'use client'
import { FormEvent, useEffect } from 'react'
import { ButtonLink, Button } from '@/components'
import { UserForm, DoctorForm } from '@/app/users/(components)'
import { useUserStore } from '@/store'
import { toast } from 'react-toastify'
import { useForm } from '@/app/users/(hooks)'
import { useRouter } from 'next/navigation'

import type { Doctor } from '../types'
import type { SpecialtiesList, MedicalCentersList } from 'types'

interface Props {
	doctor?: Doctor
	specialties: SpecialtiesList[]
	medicalCenters: MedicalCentersList[]
}

export const Form = ({ doctor, specialties, medicalCenters }: Props) => {
	const { form, setForm, setErrors } = useUserStore()
	const { saveUser } = useForm()
	const router = useRouter()

	useEffect(() => {
		return () => {
			setForm({
				id: null,
				firstname: '',
				lastname: '',
				email: '',
				role: '',
				center_id: null,
				specialty_id: null,
			})
		}
	}, [])

	useEffect(() => {
		if (doctor && doctor.user) {
			setForm({
				id: doctor.user.id,
				firstname: doctor.user.firstname,
				lastname: doctor.user.lastname,
				email: doctor.user.email,
				role: 'doctor',
				center_id: doctor.center_id,
				specialty_id: doctor.specialty_id,
			})
		}
	}, [doctor])

	const submit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const resp = await saveUser(form)

		if (!resp) {
			toast.error('Error al enviar el formulario')
		} else if (resp.success) {
			toast.success(resp.message)
			router.push('/doctors')
			router.refresh()
		} else if (resp.error) {
			setErrors(resp.error)
		} else {
			toast.error(resp.message)
		}
	}

	return (
		<>
			<section className="max-w-3xl pt-5">
				<form onSubmit={submit}>
					<UserForm roleHidden={true} />
					<div className="h-4" />
					<DoctorForm
						specialties={specialties}
						medicalCenters={medicalCenters}
					/>

					<div className="flex gap-x-5 justify-between pt-8">
						<div>
							<ButtonLink href="/doctors">Cancelar</ButtonLink>
						</div>

						<div className="w-32">
							<Button className="bg-primary border-primary text-white w-full">
								{doctor && doctor.id ? 'Actualizar' : 'Guardar'}
							</Button>
						</div>
					</div>
				</form>
			</section>

			<pre className="pt-10">{JSON.stringify(form, null, 2)}</pre>
			<pre className="mt-10">{JSON.stringify(doctor, null, 2)}</pre>
		</>
	)
}

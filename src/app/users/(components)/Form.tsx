'use client'
import { FormEvent, useEffect } from 'react'
import { ButtonLink, Button } from '@/components'
import { UserForm, DoctorForm } from '.'
import { useUserStore } from '@/store'
import { toast } from 'react-toastify'
import { useForm } from '../(hooks)'
import { useRouter } from 'next/navigation'

import type { User } from '../type'
import type { SpecialtiesList, MedicalCentersList } from 'types'

interface Props {
	user?: User
	specialties: SpecialtiesList[]
	medicalCenters: MedicalCentersList[]
}

export const Form = ({ user, specialties, medicalCenters }: Props) => {
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
		if (user) {
			setForm({
				id: user.id,
				firstname: user.firstname,
				lastname: user.lastname,
				email: user.email,
				role: user.role,
				specialty_id: user.doctor?.specialty_id,
				center_id: user.doctor?.center_id,
			})
		}
	}, [user])

	const submit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const resp = await saveUser(form)

		if (!resp) {
			toast.error('Error al enviar el formulario')
		} else if (resp.success) {
			toast.success(resp.message)
			router.push('/users')
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
					<UserForm />

					{'doctor' === form.role && (
						<>
							<div className="h-8" />

							<DoctorForm
								specialties={specialties}
								medicalCenters={medicalCenters}
							/>
						</>
					)}

					<div className="flex gap-x-5 justify-between pt-8">
						<div>
							<ButtonLink href="/users">Cancelar</ButtonLink>
						</div>

						<div className="w-32">
							<Button className="bg-primary border-primary text-white w-full">
								{user && user.id ? 'Actualizar' : 'Guardar'}
							</Button>
						</div>
					</div>
				</form>
			</section>

			{/* <pre className="pt-10">{JSON.stringify(form, null, 2)}</pre> */}
			{/* <pre className="pt-10">{JSON.stringify(user, null, 2)}</pre> */}
		</>
	)
}

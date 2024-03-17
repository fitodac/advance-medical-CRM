'use client'
import { useState, ChangeEvent, FormEvent } from 'react'
import { ButtonLink, Button } from '@/components'
import type { User } from '../types'
import { UserForm } from '.'
import { DoctorForm } from '@/app/doctors/(components)'

interface Props {
	user?: User
}

export const Form = ({ user }: Props) => {
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
			<section className="max-w-3xl pt-5">
				<UserForm />
				<div className="h-10" />
				<DoctorForm />
			</section>
		</>
	)
}

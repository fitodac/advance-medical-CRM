'use client'
import { useState, ChangeEvent, FormEvent } from 'react'
import { ButtonLink, Button } from '@/components'
import { useHelpers } from '@/hooks'
import { useForm } from '../(hooks)'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

import type { MedicalCenter, MedicalCenterForm } from '../type'

interface Props {
	center?: MedicalCenter
}

export const Form = ({ center }: Props) => {
	const { toCapitalize } = useHelpers()
	const router = useRouter()

	const [state, setState] = useState<MedicalCenterForm>(
		center
			? { id: center.id, name: toCapitalize(center.name), code: center.code }
			: { id: null, name: '', code: '' }
	)

	const [errors, setErrors] = useState<{
		name: boolean | string
		code: boolean | string
	}>({
		name: false,
		code: false,
	})

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target
		const val: string = name === 'name' ? toCapitalize(value) : value
		setState({ ...state, [name]: val })
	}

	const { saveMedicalCenter } = useForm()

	const submit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const resp = await saveMedicalCenter(state)

		if (!resp) {
			toast.error('Error al enviar el formulario')
		} else if (resp.success) {
			toast.success(resp.message.message)
			router.push(`/medical-centers`)
			router.refresh()
		} else if (resp.error) {
			setErrors(resp.error)
		} else {
			toast.error(resp.message)
		}
	}

	return (
		<>
			<section className="max-w-lg pt-5">
				<form onSubmit={submit}>
					<div className="space-y-4">
						<div className="space-y-1">
							<label className="select-none leading-tight block">Nombre</label>
							<input
								type="text"
								name="name"
								value={state.name}
								className={errors.name ? 'input-error' : ''}
								onChange={handleChange}
								onKeyUp={() => setErrors({ ...errors, name: false })}
							/>

							{errors.name && (
								<span className="text-pink-500 text-xs">{errors.name}</span>
							)}
						</div>

						<div className="space-y-1">
							<label className="select-none leading-tight block">Código</label>

							<div className="w-32">
								{state.id ? (
									<>
										<input
											type="text"
											defaultValue={state.code}
											readOnly
											disabled
											className="text-slate-400"
										/>
									</>
								) : (
									<>
										<input
											type="text"
											name="code"
											value={state.code}
											maxLength={5}
											onChange={handleChange}
											className={`uppercase ${
												errors.code ? 'input-error' : ''
											}`}
											onKeyUp={() => setErrors({ ...errors, code: false })}
										/>
									</>
								)}
							</div>

							{errors.code && (
								<span className="text-pink-500 text-xs">{errors.code}</span>
							)}
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

			{/* <pre className="mt-10">{JSON.stringify(state, null, 2)}</pre> */}
		</>
	)
}

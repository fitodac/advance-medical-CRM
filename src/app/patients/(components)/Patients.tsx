'use client'
import { useSession } from 'next-auth/react'
import { useCrdStore } from '@/store'
import {
	PageHeader,
	Breadcrumbs,
	Button,
	ButtonLink,
	Table,
} from '@/components'

type Row = {
	id: number
	code: string
	doctor: { [key: string]: number | string }
	//  center:
	visits: { [key: string]: number | string }
}

const thead = [
	{ title: '#' },
	{ title: 'ID' },
	{ title: 'Fecha de nacimiento' },
	{ title: 'Doctor' },
	{ title: 'Visita 1' },
	{ title: 'Visita 2' },
	{ title: 'Acciones', class: 'text-end' },
]

export const Patients = ({ data }: { data: { [key: string]: any } }) => {
	const { data: session, status } = useSession()
	// console.log('session', session)
	const { setPatient } = useCrdStore()

	const createNewPatient = () => {
		console.log('createNewPatient')
	}

	return (
		<>
			<PageHeader title="Listado de pacientes">
				{session && session.user && session.user.role === 'doctor' && (
					<div>
						<Button
							className="bg-teal border-teal text-white"
							onClick={createNewPatient}
						>
							Nuevo paciente
						</Button>
					</div>
				)}
			</PageHeader>

			<Breadcrumbs data={[{ title: 'Lista de pacientes', current: true }]} />

			<section className="w-full overflow-x-hidden pt-5">
				{data && session?.user && (
					<Table
						header={
							'doctor' === session?.user.role
								? [...thead].filter((i) => i.title !== 'Doctor')
								: thead
						}
					>
						{data.map((patient: Row) => (
							<tr key={patient.code}>
								<td>
									<span className="text-slate-300 text-xs">{patient.id}</span>
								</td>

								<td>
									<span className="text-slate-500 text-sm font-bold">
										{patient.code}
									</span>
								</td>

								<td>
									<span
										className={
											patient.visits[0]?.birth_date ? '' : 'text-slate-200'
										}
									>
										{patient.visits[0]?.birth_date ?? '...'}
									</span>
								</td>

								{'doctor' !== session?.user.role && (
									<td className="leading-none">
										{patient.doctor ? (
											patient.doctor.user.firstname ||
											patient.doctor.user.lastname ? (
												<div className="text-slate-500 whitespace-nowrap text-ellipsis">
													{patient.doctor?.user.firstname}{' '}
													{patient.doctor?.user.lastname}
												</div>
											) : (
												<div>{patient.doctor?.user.name}</div>
											)
										) : (
											<div className="text-slate-300">sin datos</div>
										)}

										{patient.center ? (
											<small className="text-slate-500 text-xs font-light">
												{patient.center?.name}
											</small>
										) : (
											<small className="text-slate-300 text-xs font-light">
												sin datos
											</small>
										)}
									</td>
								)}

								<td>
									<span
										className={patient.visits[0]?.date ? '' : 'text-slate-200'}
									>
										{patient.visits[0]?.date ?? '...'}
									</span>
								</td>

								<td>
									<span
										className={patient.visits[1]?.date ? '' : 'text-slate-200'}
									>
										{patient.visits[1]?.date ?? '...'}
									</span>
								</td>

								<td>
									<div className="flex gap-x-2 justify-end h-full">
										{'doctor' === session?.user.role && (
											<span
												onClick={() => {
													setPatient(patient)
												}}
											>
												<ButtonLink
													className="btn-sm bg-teal border-teal text-white"
													href={`/crd/${patient.id}`}
												>
													CRD
												</ButtonLink>
											</span>
										)}

										<Button>Borrar</Button>

										{/* 
										<Delete
											id={id}
											url={`${API_URI}/patient/delete/${id}`}
											context={pageContext}
										/> 
										*/}
									</div>
								</td>
							</tr>
						))}
					</Table>
				)}

				{/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
			</section>
		</>
	)
}

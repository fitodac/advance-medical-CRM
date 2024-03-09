'use client'
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'

const boxClassName = `bg-white border boder-slate-100 px-7 py-4 space-y-1 flex flex-col select-none transition-all rounded-md 
											hover:bg-teal hover:border-teal hover:text-white`

export const Dashboard = (): JSX.Element => {
	const { data: session, status } = useSession()

	const user = session ? session.user : null

	return (
		<>
			<section className="w-full overflow-x-hidden pt-5">
				{session && (
					<div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8">
						<div>
							<Link href="/patients" className={boxClassName}>
								<div className="font-bold">Pacientes</div>
								<div className="text-sm font-light leading-tight">
									Accede al listado de todos los pacientes registrados
								</div>
							</Link>
						</div>

						{'superadmin' === user.role && (
							<div>
								<Link href="/users" className={boxClassName}>
									<div className="font-bold">Usuarios</div>
									<div className="text-sm font-light leading-tight">
										Administra los usuarios registrados tanto Doctores como
										Administradores
									</div>
								</Link>
							</div>
						)}

						{'admin' === user.role && (
							<div>
								<Link href="/doctors" className={boxClassName}>
									<div className="font-bold">Doctores</div>
									<div className="text-sm font-light leading-tight">
										Un listado de todos los doctores registrados
									</div>
								</Link>
							</div>
						)}

						{'doctor' === user.role && (
							<div>
								<Link href="/medical-centers" className={boxClassName}>
									<div className="font-bold">Centros médicos</div>
									<div className="text-sm font-light leading-tight">
										Aquí podrás administrar los diferentes centros médicos con
										los que contamos
									</div>
								</Link>
							</div>
						)}

						<div>
							<Link href="/documents" className={boxClassName}>
								<div className="font-bold">Documentos</div>
								<div className="text-sm font-light leading-tight">
									Contamos con documentos disponibles para descargar en formato
									digital
								</div>
							</Link>
						</div>
					</div>
				)}
			</section>

			{/* 
			<div className="space-y-5 mt-16">
				<pre className="text-sm">{JSON.stringify(session, null, 2)}</pre>
				<pre>{JSON.stringify(status)}</pre>
				<div className="">
					<button
						onClick={() => signIn()}
						className="btn bg-primary text-white"
					>
						Sign in
					</button>
				</div>

				<div className="">
					<button
						onClick={() => signOut()}
						className="btn bg-primary text-white"
					>
						Sign out
					</button>
				</div>
			</div> 
			*/}
		</>
	)
}

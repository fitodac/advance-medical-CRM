'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import type { User } from 'next-auth'

const itemClassName = `link text-white text-opacity-60 text-[15px] pl-6 py-2 block hover:text-opacity-80`
const itemActiveClassName = `link border-r-4 border-r-white text-white text-[15px] pl-6 py-2 block 
															before:content-['•'] before:relative before:-left-1 before:-ml-2 before:opacity-40`

export const Navbar = (): JSX.Element => {
	const pathname = usePathname()
	const { data: session } = useSession()
	const user: User | null = session ? session.user : null

	if (!user) return <></>

	return (
		<nav className="bg-teal w-[260px] min-h-screen sm:w-[33vw] sm:fixed md:w-[25vw] lg:w-[25vw] xl:w-[16.5vw]">
			<div className="px-6 pt-3 pb-10">
				<Link href="/">
					<img
						src="/brand.webp"
						alt="Advance experts"
						className="w-44 object-cover pointer-events-none"
					/>
				</Link>
			</div>

			<ul className="text-sm pb-6 select-none">
				{(user?.role === 'admin' || user?.role === 'superadmin') && (
					<li>
						<Link
							href="/doctors"
							className={
								'/doctors' === pathname ? itemActiveClassName : itemClassName
							}
						>
							Doctores
						</Link>
					</li>
				)}

				<li>
					<Link
						href="/patients"
						className={
							'/patients' === pathname ? itemActiveClassName : itemClassName
						}
					>
						Pacientes
					</Link>
				</li>

				{(user?.role === 'admin' || user?.role === 'superadmin') && (
					<li>
						<Link
							href="/medical-centers"
							className={
								'/medical-centers' === pathname
									? itemActiveClassName
									: itemClassName
							}
						>
							Centros médicos
						</Link>
					</li>
				)}

				{user?.role === 'superadmin' && (
					<li>
						<Link
							href="/users"
							className={
								'/users' === pathname ? itemActiveClassName : itemClassName
							}
						>
							Usuarios
						</Link>
					</li>
				)}

				<li>
					<Link
						href="/documents"
						className={
							'/documents' === pathname ? itemActiveClassName : itemClassName
						}
					>
						Documentos
					</Link>
				</li>

				{(user?.role === 'admin' || user?.role === 'superadmin') && (
					<li>
						<Link
							href="/export-excel"
							className={
								'/export-excel' === pathname
									? itemActiveClassName
									: itemClassName
							}
						>
							Exportar datos
						</Link>
					</li>
				)}
			</ul>
		</nav>
	)
}

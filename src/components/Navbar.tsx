'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import type { DefaultSession, User } from 'next-auth'

const itemClassName = `link text-white text-opacity-60 text-[15px] pl-6 py-2 block hover:text-opacity-80`
const itemActiveClassName = `link border-r-4 border-r-white text-white text-[15px] pl-6 py-2 block 
															before:content-['•'] before:relative before:-left-1 before:-ml-2 before:opacity-40`

export const Navbar = (): JSX.Element => {
	const pathname = usePathname()
	const { data: session } = useSession()
	const user: User | null = session ? session.user : null
	const role = user ? user.role : null

	return (
		<nav className="">
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
							href="/downloads"
							className={
								'/downloads' === pathname ? itemActiveClassName : itemClassName
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

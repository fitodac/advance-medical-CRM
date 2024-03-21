'use client'
import { useState } from 'react'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'

export const Header = (): JSX.Element => {
	const { data: session } = useSession()
	const user = session ? session.user : null
	const [dd, setDd] = useState<number>(0)

	if (!user) return <></>

	return (
		<>
			<header className="bg-primary border-b border-primary w-full px-5 py-2 flex justify-between items-center inset-x-0 top-0 fixed z-20">
				<div className="flex gap-x-6 items-center">
					<span className="sm:hidden">
						<button className="btn btn-icon bg-transparent border-transparent text-slate-400">
							<i className="ri-menu-2-line"></i>
						</button>
					</span>
				</div>

				<div className="flex gap-x-6 justify-end items-center">
					<div className="">
						<div className="dropdown">
							<label className="btn-toggler">
								<input
									type="checkbox"
									className="dropdown-toggler"
									value={0}
									onChange={() => setDd(dd ? 0 : 1)}
									checked={dd ? true : false}
								/>

								{user && user.firstname && (
									<>
										<span className="border-none bg-transparent text-white font-normal flex gap-x-1.5 items-center btn btn-sm whitespace-nowrap ellipsis overflow-hidden">
											<div className="bg-teal text-white tracking-tight w-8 h-8 flex items-center rounded-full">
												<div className="w-full text-center">
													{`${
														user.firstname[0] + user.firstname[1]
													}`.toUpperCase()}
												</div>
											</div>
											<span className="text-xs">Hola {user.firstname}</span>
											<i className="ri-arrow-down-s-fill top-0.5 relative"></i>
										</span>

										<div className="dropdown-nav w-40 z-20">
											<ul className="text-sm rounded-0">
												<li>
													<Link
														href={'/profile'}
														onClick={() => setDd(0)}
														className="text-left w-full select-none transition-all hover:text-primary"
													>
														Mi cuenta
													</Link>
												</li>
												<li>
													<button
														onClick={() => signOut()}
														className="text-left w-full select-none transition-all hover:text-primary"
													>
														Cerrar sesión
													</button>
												</li>
											</ul>
										</div>
									</>
								)}
							</label>
						</div>
					</div>
				</div>
			</header>

			<div className="h-20" />
		</>
	)
}

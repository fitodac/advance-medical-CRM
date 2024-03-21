'use client'
import { useSession } from 'next-auth/react'

export const Footer = () => {
	const { data: session } = useSession()
	const user = session ? session.user : null

	if (!user) return <></>

	return (
		<>
			<div className="text-slate-400 w-full px-6 py-8 flex justify-end">
				<span className="text-xxs select-none">&copy;2023 Advance experts</span>
			</div>
		</>
	)
}

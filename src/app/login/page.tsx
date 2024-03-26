'use client'
import { useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { useSession } from 'next-auth/react'
import { permanentRedirect } from 'next/navigation'

import Link from 'next/link'

interface Props {}

const LoginPage = ({}: Props) => {
	const router = useRouter()
	const { data: session, status } = useSession()
	const email = useRef('andrea.martin@abbott.com')
	const pass = useRef('advance')
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		if (session) {
			router.push('/')
		}
	}, [])

	const submit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const resp = await signIn('credentials', {
			email: email.current,
			password: pass.current,
			redirect: false,
		})

		if (resp?.error) {
			setError(resp.error)
		}

		if (!resp?.error) {
			router.push('/')
		}
	}

	if (session) permanentRedirect('/')

	return (
		<>
			<div className="space-y-6">
				<div className="flex justify-center select-none">
					<img
						src="/brand.png"
						alt="Advance experts"
						className="w-60 object-cover pointer-events-none"
					/>
				</div>

				<form onSubmit={submit}>
					<div className="space-y-4">
						<div className="space-y-1">
							<label className="text-white text-base font-light select-none">
								Email
							</label>
							<input
								name="email"
								type="text"
								defaultValue={email.current}
								onChange={(e) => (email.current = e.target.value)}
							/>
						</div>

						<div className="space-y-1">
							<label className="text-white text-base font-light select-none">
								Password
							</label>
							<input
								name="password"
								type="password"
								defaultValue={pass.current}
								onChange={(e) => (pass.current = e.target.value)}
							/>
						</div>

						<button className="btn bg-teal border-teal text-white w-full">
							Entrar
						</button>
					</div>
				</form>

				<div className="text-center mt-3 select-none">
					<Link
						href="/forgot-password"
						className="text-white text-sm transition-all hover:underline"
					>
						¿Olvidaste tu contraseña?
					</Link>
				</div>
			</div>
		</>
	)
}

export default LoginPage

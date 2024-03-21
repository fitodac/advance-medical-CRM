import { withAuth } from 'next-auth/middleware'
import { decode } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'
import type { NextFetchEvent } from 'next/server'

export default withAuth(
	async function middleware(req: NextRequest, event: NextFetchEvent) {
		const sessionToken = req.cookies.get('next-auth.session-token')
		const basePath = process.env.BASE_PATH
		const redirect = NextResponse.redirect(new URL('/', req.url))

		if (!sessionToken) return NextResponse.next()

		const session = await decode({
			token: sessionToken.value,
			secret: `${process.env.NEXTAUTH_SECRET}`,
		})

		if (session) {
			const {
				user: {
					user: { role },
				},
			} = session

			// if (!role) return redirect

			if ('doctor' === role) {
				if (req.url.includes(`${basePath}/doctors`)) return redirect
				if (req.url.includes(`${basePath}/medical-centers`)) return redirect
				if (req.url.includes(`${basePath}/export-excel`)) return redirect
			}

			if ('doctor' !== role) {
				if (req.url.includes(`${basePath}/crd`)) return redirect
			}

			if ('superadmin' !== role) {
				if (req.url.includes(`${basePath}/users`)) return redirect
			}
		}
	},
	{
		callbacks: {
			authorized: async ({ token, req }) => {
				const sessionToken = req.cookies.get('next-auth.session-token')

				return sessionToken ? true : false
			},
		},
	}
)

export const config = { matcher: ['/:path*'] }

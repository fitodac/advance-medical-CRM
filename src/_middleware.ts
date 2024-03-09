import { withAuth } from 'next-auth/middleware'
import { NextResponse, NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { getSession } from 'next-auth/react'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth/next'

// export async function middleware(req: NextRequest, res: NextResponse) {
// 	const session = await getServerSession(req, res, {
// 		secret: process.env.NEXTAUTH_SECRET,
// 	})
// 	console.log('session', session)
// 	// const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
// 	const session = await getServerSession({ req, secret: process.env.NEXTAUTH_SECRET })
// 	if (!session) {
// 		await console.log('no session')
// 		// const requestedPage = req.nextUrl.pathname
// 		// const url = req.nextUrl.clone()
// 		// url.pathname = '/api/auth/signin'
// 		// url.search = `callbackUrl=${requestedPage}`
// 		// return NextResponse.redirect(url)
// 	}
// 	console.log(await 'session', session)
// 	// 	// return NextResponse.redirect(new URL('/home', request.url))
// 	return await NextResponse.next()
// }

export const config = {
	matcher: [
		// '/',
		'/doctors/:path*',
		'/patients/:path*'
	],
}

export default withAuth(
	async function middleware(req) {
		const token = await getToken({ req })

		console.log('token', token)
	},
	{
		callbacks: {
			async authorized() {
				return true
			},
		},
	}
)

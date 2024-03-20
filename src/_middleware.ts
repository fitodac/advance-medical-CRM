import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// import https from 'next-auth'
// export { auth as middleware } from 'auth'
// import { withAuth } from 'next-auth/middleware'
// import { getToken } from 'next-auth/jwt'
// import { getSession } from 'next-auth/react'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth/next'
import { useGetSession } from '@/hooks'
import type { NextFetchEvent } from 'next/server'

export async function middleware(request: NextRequest, event: NextFetchEvent) {
	// const session = await getServerSession({
	// 	req,
	// 	secret: process.env.NEXTAUTH_SECRET,
	// })
	return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
	matcher: '/doctors/:path*',
}

// export async function middleware(req: NextRequest, res: NextResponse) {
// 	console.log('session', req, res)
// 	const session = await useGetSession()
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
// return await NextResponse.redirect(new URL('/home', req.url))
// }

// export const config = {
// 	matcher: [
// 		// '/',
// 		'/doctors/:path*',
// 		'/patients/:path*',
// 	],
// }

// export default withAuth(
// 	async function middleware(req) {
// 		const token = await getToken({ req })

// 		console.log('token', token)
// 	},
// 	{
// 		callbacks: {
// 			async authorized() {
// 				return true
// 			},
// 		},
// 	}
// )

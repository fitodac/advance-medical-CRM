'use server'
import { cookies } from 'next/headers'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

/**
 *
 * @returns token: El token que se usa para Laravel
 * @returns sessionCookie: El token que se usa para NextAuth.js
 */
export const useGetToken = async (): Promise<{
	token: string
	sessionCookie: string
}> => {
	const session = await getServerSession(authOptions)
	const cookie = await cookies().get('next-auth.session-token')

	const sessionCookie = cookie ? `${cookie.name}=${cookie.value}` : ''

	const token = await `Bearer ${session?.accessToken}`

	return {
		sessionCookie,
		token,
	}
}

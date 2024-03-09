import { cookies } from 'next/headers'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export const useGetToken = async (): Promise<{
	token: string
	jwt: string
}> => {
	const session = await getServerSession(authOptions)

	const csrfCookie = cookies().get('__Host-next-auth.csrf-token')
	const jwt = `${csrfCookie?.name}=${csrfCookie?.value}`

	const token = await `Bearer ${session?.accessToken}`

	return {
		jwt,
		token,
	}
}

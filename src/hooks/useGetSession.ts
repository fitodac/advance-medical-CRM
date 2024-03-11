import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export const useGetSession = async () => {
	const session = await getServerSession(authOptions)
	return session
}

import { JWT, Session, User } from 'next-auth/next'

declare module 'next-auth' {
	export interface User {
		id?: number
		name?: string | null | undefined
		firstname?: string
		lastname?: string
		email?: string | null | undefined
		image?: string | null | undefined
		role?: string
		access_token?: string
	}
}

export interface Session {
	accessToken: string
	user: User
}

export interface JWT {
	user: User
	access_token: string
}

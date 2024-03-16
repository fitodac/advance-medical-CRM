import NextAuth, { DefaultSession, NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
// import type { JWT, Session, User } from '../../../../../next-auth'

export const authOptions: NextAuthOptions = {
	session: {
		strategy: 'jwt',
		maxAge: 30 * 24 * 60 * 60, // 30 days
	},
	useSecureCookies: process.env.NEXTAUTH_SECURE_COOKIES === 'true' ?? false,
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		CredentialsProvider({
			name: 'API',
			credentials: {
				email: {
					label: 'Email',
					type: 'text',
					value: 'dani@commonpeoplei.com', // Superadmin
					// value: 'dani+admin@commonpeoplei.com', // Admin
					// value: 'marianovor@hotmail.com', // Doctor
				},
				password: { label: 'Password', type: 'password', value: 'cpi_1975' },
				// password: { label: 'Password', type: 'password', value: 'advance' },
			},
			async authorize(credentials) {
				const res = await fetch('http://localhost/sanctum/csrf-cookie', {
					method: 'GET',
				})

				const setCookieHeader = res.headers.get('Set-Cookie')
				const cookies = setCookieHeader?.split('; ')
				// console.log(cookies)
				let sessionKey = null
				let xsrfToken = null

				for (const cookie of cookies!) {
					if (cookie.startsWith('laravel_session=')) {
						sessionKey = cookie.split('=')[1]
					} else if (cookie.startsWith('XSRF-TOKEN=')) {
						xsrfToken = cookie.split('=')[1]
					}

					if (sessionKey && xsrfToken) {
						break
					}
				}

				const data = {
					email: credentials?.email,
					password: credentials?.password,
				}

				const headers = new Headers({
					Cookie: `laravel_session=${sessionKey}`,
					'Content-Type': 'application/json',
				})

				if (xsrfToken) {
					headers.append('X-XSRF-TOKEN', xsrfToken)
				}

				try {
					const response = await fetch('http://localhost/api/v2/auth/login', {
						method: 'POST',
						body: JSON.stringify(data),
						headers,
					})

					if (response.ok) {
						const res = await response.json()
						return res
					} else {
						console.log('HTTP error! Status:', response.status)
						// Handle non-successful response here, return an appropriate JSON response.
						return { error: 'Authentication failed' }
					}
				} catch (error) {
					return { error: 'Authentication failed' }
				}

				return null
			},
		}),
	],
	callbacks: {
		async jwt({ token, account, user }) {
			if (user) {
				token.user = user
				token.accessToken = user.access_token
			}
			return token
		},
		async session({ session, token }) {
			session.accessToken = token.user.access_token
			session.user = token.user.user as User
			return session
		},
		// async redirect({ url, baseUrl }) {
		// console.log('URL', url, baseUrl)
		// Allows relative callback URLs
		// if (url.startsWith('/')) return `${baseUrl}${url}`
		// Allows callback URLs on the same origin
		// else if (new URL(url).origin === baseUrl) return url
		// return baseUrl
		// },
	},

	pages: {
		// signIn: '/auth/signin'
		// error: 'auth/error',
	},
	// events: {
	// 	signOut(message) {},
	// },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }

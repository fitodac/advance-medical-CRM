import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

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
					// value: 'dani@commonpeoplei.com', // Superadmin
					value: 'andrea.martin@abbott.com', // Admin
					// value: 'marianovor@hotmail.com', // Doctor
				},
				// password: { label: 'Password', type: 'password', value: 'cpi_1975' },
				password: { label: 'Password', type: 'password', value: 'advance' },
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
						console.log('Authentication failed')
						console.log('HTTP error! Status:', response.status)
						return null
					}
				} catch (error) {
					console.log('Authentication failed')
					return null
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
	},

	pages: {
		signIn: '/login'
	}

	// debug: true,
	// events: {
	// 	signOut(message) {},
	// },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }

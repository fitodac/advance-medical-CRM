'use client'
import { SessionProvider } from 'next-auth/react'
import { Inter } from 'next/font/google'

import 'remixicon/fonts/remixicon.css'
import 'react-toastify/dist/ReactToastify.css'
import '@/css/main.css'
import '@/ui/css/ui.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
	children,
	session,
}: Readonly<{
	children: React.ReactNode
	session: any
}>): JSX.Element {
	return (
		<html lang="en">
			<body className={`${inter.className}`}>
				<SessionProvider session={session}>{children}</SessionProvider>
			</body>
		</html>
	)
}

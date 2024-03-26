'use client'
import { SessionProvider } from 'next-auth/react'
import { Inter } from 'next/font/google'

import 'remixicon/fonts/remixicon.css'
import 'react-toastify/dist/ReactToastify.css'
import '@/css/main.css'
import '@/ui/css/ui.css'

import { useStore } from '@/store'
import { ToastContainer } from 'react-toastify'
import { Slide } from 'react-toastify'

import { Loading } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
	children,
	session,
}: Readonly<{
	children: React.ReactNode
	session: any
}>): JSX.Element {
	const { loading } = useStore()

	return (
		<html lang="en">
			<body
				className={`${inter.className} ${loading ? 'overflow-hidden' : ''}`}
			>
				<SessionProvider session={session}>
					<div className="grid grid-cols-12">{children}</div>
				</SessionProvider>

				{loading && <Loading />}

				<ToastContainer
					position="bottom-left"
					hideProgressBar={true}
					transition={Slide}
					progressStyle={{}}
					autoClose={3000}
				/>
			</body>
		</html>
	)
}

'use client'
import { SessionProvider } from 'next-auth/react'
import { Inter } from 'next/font/google'

import 'remixicon/fonts/remixicon.css'
import 'react-toastify/dist/ReactToastify.css'
import '@/css/main.css'
import '@/ui/css/ui.css'

import { useStore } from '@/store'
import { ToastContainer } from 'react-toastify'

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
				<SessionProvider session={session}>{children}</SessionProvider>

				{loading && (
					<div className="bg-white/80 inset-0 fixed z-[100]">
						<div className="grid place-content-center h-full">
							<div className="spinner border-l-teal w-10 after:border-opacity-30"></div>
						</div>
					</div>
				)}

				<ToastContainer
					position="bottom-right"
					hideProgressBar={true}
					autoClose={3000}
				/>
			</body>
		</html>
	)
}

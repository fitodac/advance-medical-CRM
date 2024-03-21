import type { Metadata } from 'next'
import { Dashboard } from '@/components'

export const metadata: Metadata = {
	title: process.env.APP_NAME,
}

export default function Home() {

	return (
		<>
			<Dashboard />
		</>
	)
}

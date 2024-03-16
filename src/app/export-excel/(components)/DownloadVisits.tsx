'use client'
import { Button } from '@/components'

export const DownloadVisits = () => {
	const generateXLS = () => {
		// setLoading(true)
	}

	return (
		<>
			<Button
				className="btn btn-lg bg-green-600 border-green-600 text-white w-72 space-x-2"
				onClick={generateXLS}
			>
				<span className="text-3xl">
					<i className="ri-file-excel-2-line"></i>
				</span>
				<span className="text-sm">Descargar visitas</span>
			</Button>
		</>
	)
}

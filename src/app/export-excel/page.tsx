import type { Metadata } from 'next'
import { PageHeader, Breadcrumbs } from '@/components'
import { DownloadVisits, DownloadPatients } from './(components)'

export const metadata: Metadata = {
	title: `${process.env.APP_NAME} • Exportar datos`,
}

const ExportExcelPage = (): JSX.Element => {
	return (
		<>
			<PageHeader title="Exportar datos" />

			<Breadcrumbs data={[{ title: 'Exportar datos', current: true }]} />

			<div className="py-10 items-center max-w-4xl">
				<div className="bg-white border border-slate-100 p-6 space-y-5 rounded-xl shadow-lg">
					<div>
						<DownloadVisits />
					</div>

					<div>
						<DownloadPatients />
					</div>
				</div>
			</div>
		</>
	)
}

export default ExportExcelPage

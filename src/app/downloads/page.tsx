import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: `${process.env.APP_NAME} • Exportar datos`,
}

const ExportExcelPage = (): JSX.Element => {
	return <div>Export excel</div>
}

export default ExportExcelPage

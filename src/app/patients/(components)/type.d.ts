declare module 'type-patients' {
	interface Row {
		id: number
		code: string
		doctor: {
			user: {
				firstname: string
				lastname: string
			}
		}
		center: {
			id: number
			code: string
			name: string
		}
		visits: {
			id: number
			patient_id: number
			birth_date: string
			date: string
		}[]
	}

	interface Pager {
		current_page: number
		prev_page_url: string | null
		next_page_url: string | null
		last_page: number
		links: { url: string | null; label: string; active: boolean }[]
		total: number
	}
}

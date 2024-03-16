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
}

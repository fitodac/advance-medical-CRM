declare module 'types' {
	export type Patient = {
		id: number
		code: string
		doctor_id: number
		center_id: number
		created_at: string
		updated_at: string
		doctor: {
			id: number
			user_id: number
			center_id: number
			specialty_id: number
			created_at: string
			updated_at: string
			user: {
				id: number
				email: string
				firstname: string
				lastname: string
			}
		}
		visits: { [key: string]: number | string }[]
	}
}

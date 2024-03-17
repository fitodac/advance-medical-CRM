export interface MedicalCenter {
	id: number
	name: string
	code: string
	created_at: string
	updated_at: string
	date: string
}

interface MedicalCenterForm {
	id: number | null
	name: string
	code: string
}

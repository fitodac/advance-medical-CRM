import { User } from '@/app/users/type'

interface Center {
	id: number
	name: string
	code: string
	created_at: Date
	updated_at: Date
}

interface Specialty {
	id: number
	name: string
}

export interface Doctor {
	id: number
	user_id: number
	center_id: number
	specialty_id: number
	created_at: Date
	updated_at: Date
	center: Center
	user: User
	specialty: Specialty
}

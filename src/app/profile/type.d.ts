export interface Doctor {
	id: number
	user_id: number
	center_id: number
	specialty_id: number
	created_at: Date
	updated_at: Date
	center: Center
}

export interface Center {
	id: number
	name: string
	code: string
	created_at: Date
	updated_at: Date
}

export interface FormData {
	firstname: string
	lastname: string
	specialty_id: number | null
}

export interface FormPassword {
	password: string
	new_password: string
}

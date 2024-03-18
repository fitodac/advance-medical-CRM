export interface Doctor {
	id: number
	user_id: number
	center_id: number
	specialty_id: number
	created_at: string
	updated_at: string
}

export interface User {
	id: number
	role: string
	email: string
	firstname: string
	lastname: string
	email_verified_at: string
	created_at: string
	updated_at: string
	doctor?: Doctor
}


export interface UserForm {
	id: number | null
	firstname: string
	lastname: string
	email: string
	role: string
	center_id?: number | null
	specialty_id?: number | null
}
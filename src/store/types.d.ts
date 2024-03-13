import type { Initial, Visit1 } from 'crd'
import type { Patient } from 'types'

declare module 'store-types' {
	export type Patient = {
		id: number
		code: string
		doctor_id: number
		center_id: number
		created_at: string
		updated_at: string
	}

	export interface InitialErrors {
		date: boolean
		birth_date: boolean
	}

	export interface Visit1Errors {
		date: boolean
	}

	export interface CrdStore {
		patient: Patient | null
		initial: Initial | null
		visit1: Visit1 | null
		setInitial: (initial: Initial | null) => void
		setVisit1: (visit1: Visit1 | null) => void
		setPatient: (patient: Patient | null) => void
		currentForm: 'initial' | 'visit1'
		setCurrentForm: (currentForm: 'initial' | 'visit1') => void
		initialErrors: InitialErrors
		setInitialErrors: () => void
		visit1Errors: Visit1Errors
		setVisit1Errors: () => void
	}

	export interface Store {
		loading: boolean
		setLoading: (state: boolean) => void
	}
}

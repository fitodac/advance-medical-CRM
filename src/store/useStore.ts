import { create } from 'zustand'
import type { Initial, Visit1 } from 'crd'

interface CrdStore {
	patient: any
	initial: Initial | null
	visit1: Visit1 | null
	setInitial: (initial: Initial | null) => void
	setVisit1: (visit1: Visit1 | null) => void
	setPatient: (patient: any | null) => void
	currentForm: 'initial' | 'visit1'
	setCurrentForm: (currentForm: 'initial' | 'visit1') => void
}

export const useCrdStore = create<CrdStore>()((set) => ({
	patient: {
		id: 172,
		code: 'HUVN-172',
		doctor_id: 24,
		center_id: 3,
		created_at: '2024-02-22T12:49:31.000000Z',
		updated_at: '2024-02-22T12:49:31.000000Z',
		doctor: {
			id: 24,
			user_id: 39,
			center_id: 3,
			specialty_id: 5,
			created_at: '2024-01-23T15:14:35.000000Z',
			updated_at: '2024-01-23T15:14:35.000000Z',
			user: {
				id: 39,
				email: 'house_md@local.com',
				firstname: 'Cristina',
				lastname: 'Novo Rodriguez',
			},
		},
		visits: [
			{
				id: 109,
				patient_id: 172,
				birth_date: '11/09/1971',
				date: '22/02/2024',
			},
		],
	},

	initial: null,
	visit1: null,
	setPatient: (state) => set({ patient: { ...state } }),
	setInitial: (state) => set({ initial: { ...state } }),
	setVisit1: (state) => set({ visit1: { ...state } }),
	currentForm: 'initial',
	// currentForm: 'visit1',
	setCurrentForm: (state) => set({ currentForm: state }),
}))

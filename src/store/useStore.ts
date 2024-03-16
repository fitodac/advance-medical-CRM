import { create } from 'zustand'
import type { CrdStore, Store, Patient } from 'store-types'
import type { Initial, Visit1 } from 'crd'

export const useCrdStore = create<CrdStore>()((set) => ({
	patient: null,
	initial: null,
	visit1: null,
	currentForm: 'initial',
	initialErrors: {
		date: false,
		birth_date: false,
	},
	visit1Errors: {
		date: false,
	},

	setPatient: (state: Patient) => set({ patient: { ...state } }),
	setInitial: (state: Initial) => set({ initial: { ...state } }),
	setVisit1: (state: Visit1) => set({ visit1: { ...state } }),
	setCurrentForm: (state: string) => set({ currentForm: state }),
	setInitialErrors: (val: { [key: string]: boolean }) =>
		set((state: CrdStore) => ({
			initialErrors: { ...state.initialErrors, ...val },
		})),
	setVisit1Errors: (val: { [key: string]: boolean }) =>
		set((state: CrdStore) => ({
			visit1Errors: { ...state.visit1Errors, ...val },
		})),
}))

export const useStore = create<Store>()((set) => ({
	loading: false,
	setLoading: (state: boolean) => set({ loading: state }),
}))

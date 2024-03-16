import { create } from 'zustand'
import type { CrdStore, Store } from './types'
// import type { Initial, Visit1 } from 'crd'

/**
 * Visits store
 */
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

	setPatient: (state) => set({ patient: { ...state } }),
	setInitial: (state) => {
		if (state) set({ initial: { ...state } })
	},
	setVisit1: (state) => {
		if (state) set({ visit1: { ...state } })
	},
	setCurrentForm: (state) => set({ currentForm: state }),
	setInitialErrors: (val) => {
		if (val)
			set((state: CrdStore) => ({
				initialErrors: { ...state.initialErrors, ...val },
			}))
	},
	setVisit1Errors: (val) =>
		set((state: CrdStore) => ({
			visit1Errors: { ...state.visit1Errors, ...val },
		})),
}))

/**
 * Main store
 */
export const useStore = create<Store>()((set) => ({
	loading: false,
	setLoading: (state: boolean) => set({ loading: state }),
}))

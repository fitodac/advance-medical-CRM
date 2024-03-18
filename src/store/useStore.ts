import { create } from 'zustand'
import type { CrdStore, UserStore, Store } from './type'
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
 * User store
 */

export const useUserStore = create<UserStore>()((set) => ({
	form: {
		id: null,
		firstname: '',
		lastname: '',
		email: '',
		role: '',
		center_id: null,
		specialty_id: null,
	},
	errors: {
		firstname: false,
		lastname: false,
		email: false,
		role: false,
	},
	setForm: (state) => set({ form: state }),
	setErrors: (state) => set({ errors: state }),
}))

/**
 * Main store
 */
export const useStore = create<Store>()((set) => ({
	loading: false,
	setLoading: (state: boolean) => set({ loading: state }),
}))

import { create } from 'zustand'

interface CrdStore {
	initial: { [key: string]: any }
	visit1: { [key: string]: any }
	setInitial: (initial: { [key: string]: any }) => void
	setVisit1: (visit1: { [key: string]: any }) => void
	currentForm: 'initial' | 'visit1'
	setCurrentForm: (currentForm: 'initial' | 'visit1') => void
}

export const useCrdStore = create<CrdStore>()((set) => ({
	initial: {},
	visit1: {},
	setInitial: (state) => set({ initial: { ...state } }),
	setVisit1: (state) => set({ visit1: { ...state } }),
	currentForm: 'initial',
	// currentForm: 'visit1',
	setCurrentForm: (state) => set({ currentForm: state }),
}))

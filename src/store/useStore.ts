import { create } from 'zustand'
import type { Visit1 } from 'crd'

interface CrdStore {
	initial: { [key: string]: any }
	visit1: Visit1 | null
	setInitial: (initial: { [key: string]: any }) => void
	setVisit1: (visit1: Visit1 | null) => void
	currentForm: 'initial' | 'visit1'
	setCurrentForm: (currentForm: 'initial' | 'visit1') => void
}

export const useCrdStore = create<CrdStore>()((set) => ({
	initial: {},
	visit1: null,
	setInitial: (state) => set({ initial: { ...state } }),
	setVisit1: (state) => set({ visit1: { ...state } }),
	currentForm: 'initial',
	// currentForm: 'visit1',
	setCurrentForm: (state) => set({ currentForm: state }),
}))

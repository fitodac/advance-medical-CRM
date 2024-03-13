'use client'
import { useCrdStore } from '@/store'
import { initialEmptyData, visit1EmptyData } from '../(helpers)/formModels'

export const useResetForm = () => {
	const { setInitial, setVisit1, setPatient, setCurrentForm } = useCrdStore()

	function resetForm() {
		setInitial(initialEmptyData)
		setVisit1(visit1EmptyData)
		setPatient(null)
		setCurrentForm('initial')
	}

	return { resetForm }
}

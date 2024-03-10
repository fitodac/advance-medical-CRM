import type { ChangeEvent } from 'react'
import { useCrdStore } from '@/store'

/**
 * Modifica el store al clickear un checkbox
 * @returns handleChange: () => void
 */
export const useCheckboxHandleChange = (visitType: 'initial' | 'visit1') => {
	const { visit1, setVisit1, initial, setInitial } = useCrdStore()

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target

		if (initial && visitType === 'initial') {
			const val = initial[name] === value ? null : value
			setInitial({ ...initial, [e.target.name]: val })
		}

		if (visit1 && visitType === 'visit1') {
			const val = visit1[name] === value ? null : value
			setVisit1({ ...visit1, [e.target.name]: val })
		}
	}

	return { handleChange }
}

/**
 * Modifica el store al cambiar el valor en un campo
 * @param visitType
 * @returns
 */
export const useInputHandleChange = (visitType: 'initial' | 'visit1') => {
	const { visit1, setVisit1, initial, setInitial } = useCrdStore()

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target

		console.log('e', e)

		// if (initial && visitType === 'initial') {
		// 	const val = initial[name] === value ? null : value
		// 	setInitial({ ...initial, [e.target.name]: val })
		// }

		// if (visit1 && visitType === 'visit1') {
		// 	const val = visit1[name] === value ? null : value
		// 	setVisit1({ ...visit1, [e.target.name]: val })
		// }
	}

	return { handleInputChange }
}

export const useSetDate = (visitType: 'initial' | 'visit1') => {
	const { visit1, setVisit1, initial, setInitial } = useCrdStore()

	const setDate = (inputValue: { target: { name: string; value: string } }) => {
		const { name, value } = inputValue.target

		if (initial && visitType === 'initial') {
			const val = initial[name] === value ? null : value
			setInitial({ ...initial, [name]: val })
		}

		if (visit1 && visitType === 'visit1') {
			const val = visit1[name] === value ? null : value
			setVisit1({ ...visit1, [name]: val })
		}
	}

	return { setDate }
}

import type { ChangeEvent } from 'react'
import { useCrdStore } from '@/store'
import type { Initial, Visit1 } from 'crd'

/**
 * Modifica el store al clickear un checkbox
 *
 * @use const { handleChange } = useCheckboxHandleChange({VISIT_TYPE})
 */
export const useCheckboxHandleChange = (visitType: 'initial' | 'visit1') => {
	const { visit1, setVisit1, initial, setInitial } = useCrdStore()

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value

		if (initial && visitType === 'initial') {
			const name = e.target.name as keyof Initial
			const val = initial[name] === value ? null : value
			setInitial({ ...initial, [e.target.name]: val })
		}

		if (visit1 && visitType === 'visit1') {
			const name = e.target.name as keyof Visit1
			const val = visit1[name] === value ? null : value
			setVisit1({ ...visit1, [e.target.name]: val })
		}
	}

	return { handleChange }
}

/**
 * Modifica el store al cambiar el valor en un campo
 *
 * @use const { handleInputChange } = useInputHandleChange({VISIT_TYPE})
 */
export const useInputHandleChange = (visitType: 'initial' | 'visit1') => {
	const { visit1, setVisit1, initial, setInitial } = useCrdStore()

	const handleInputChange = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const value = e.target.value

		if (initial && visitType === 'initial') {
			const name = e.target.name as keyof Initial
			const val = initial[name] === value ? null : value
			setInitial({ ...initial, [e.target.name]: val })
		}

		if (visit1 && visitType === 'visit1') {
			const name = e.target.name as keyof Visit1
			const val = visit1[name] === value ? null : value
			setVisit1({ ...visit1, [e.target.name]: val })
		}
	}

	return { handleInputChange }
}

export const useSetValue = (visitType: 'initial' | 'visit1') => {
	const { visit1, setVisit1, initial, setInitial } = useCrdStore()

	const setValue = (e: { target: { name: string; value: string } }) => {
		const value = e.target.value

		if (initial && visitType === 'initial') {
			const name = e.target.name as keyof Initial
			const val = initial[name] === value ? null : value
			setInitial({ ...initial, [name]: val })
		}

		if (visit1 && visitType === 'visit1') {
			const name = e.target.name as keyof Visit1
			const val = visit1[name] === value ? null : value
			setVisit1({ ...visit1, [name]: val })
		}
	}

	return { setValue }
}

import type { ChangeEvent } from 'react'
import { useCrdStore } from '@/store'

/**
 * Modifica el store al clickear un checkbox
 * @returns handleChange: () => void
 */
export const useCheckboxHandleChange = () => {
	const { visit1, setVisit1 } = useCrdStore()

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		const val = visit1[name] === value ? null : value
		setVisit1({ ...visit1, [e.target.name]: val })
	}

	return { handleChange }
}

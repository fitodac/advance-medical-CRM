import { useStore } from '@/store'
import type { MedicalCenterForm } from '../type'

export const useForm = () => {
	const { setLoading } = useStore()

	const saveMedicalCenter = async (form: MedicalCenterForm) => {
		setLoading(true)

		try {
			if (form.id) {
				/**
				 * Edit medical center
				 */
				const resp = await fetch(`/api/medical-center/${form.id}`, {
					method: 'PATCH',
					body: JSON.stringify(form),
					headers: { 'Content-Type': 'application/json' },
				})

				if (resp.ok) {
					const resp_json = await resp.json()
					setLoading(false)
					return await resp_json
				} else {
					setLoading(false)
				}
			} else {
				/**
				 * Create medical center
				 */

				const resp = await fetch(`/api/medical-center`, {
					method: 'POST',
					body: JSON.stringify(form),
					headers: { 'Content-Type': 'application/json' },
				})

				if (resp.ok) {
					const resp_json = await resp.json()
					setLoading(false)
					return await resp_json
				} else {
					setLoading(false)
				}
			}
		} catch (err) {
			console.log(err)
			setLoading(false)
			return false
		}
	}

	return { saveMedicalCenter }
}
